// The room itself. The scene fills whatever height is left above the answer
// panel: the prints hang on the back wall, the plaque sits on the floor, and
// the room number is painted on the wall beside them.
import React, {useMemo, useRef, useState} from 'react';
import {
  Animated,
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  PanResponder,
  useWindowDimensions,
} from 'react-native';
import RoomScene from '../components/RoomScene.js';
import FramedArt from '../components/FramedArt.js';
import {Coin} from '../components/CoinPill.js';
import {PrimaryButton} from '../components/ui.js';
import {useCelebration, pulse, flash} from '../celebrate.js';
import {artName, kindLabel, wingLabel, WING_SIZE} from '../data/exhibitions.js';
import {colors, wingColor, serif} from '../theme.js';

const pad2 = n => String(n).padStart(2, '0');
const pad3 = n => String(n).padStart(3, '0');

// Vertical room budget, in the order things stack down the back wall.
const ROOM_TOP = 60; // the map row, and the wall above the prints
const FRAME_CHROME = 24; // the brass frame and its mat around the drawing
const LABEL_HEIGHT = 26; // the wall label under each print
const PLAQUE_CLEARANCE = 112; // the plaque on the floor, and a gap above it

function TourStrip({total, current, solved, onGo}) {
  const start = Math.max(0, Math.min(current - 2, total - 5));
  const shown = Array.from({length: Math.min(5, total)}, (_, offset) => start + offset);
  return (
    <View style={styles.tourDots} accessibilityLabel="בחירת מוצג">
      {shown.map(index => {
        const isCurrent = index === current;
        const isSolved = solved.has(index);
        return (
          <Pressable
            key={index}
            onPress={() => onGo(index)}
            accessibilityRole="button"
            accessibilityState={{selected: isCurrent}}
            accessibilityLabel={`מוצג ${index + 1}${isSolved ? ', נפתר' : ''}`}
            style={styles.dotHit}>
            <Text
              style={[
                styles.dotNumber,
                isCurrent && styles.dotNumberCurrent,
                isSolved && styles.dotNumberSolved,
              ]}>
              {isSolved ? '✓' : index + 1}
            </Text>
            <View
              style={[
                styles.dot,
                isCurrent && styles.dotCurrent,
                isSolved && !isCurrent && styles.dotSolved,
              ]}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

export default function GalleryScreen({
  exhibition,
  level,
  current,
  solved,
  roomTheme,
  answer,
  onAnswer,
  onSubmit,
  onHint,
  onContinue,
  onGo,
  onOpenMap,
  onZoom,
  feedback,
  feedbackTone,
  invalid,
  celebration,
}) {
  const {height, width} = useWindowDimensions();
  const total = exhibition.levels.length;
  const done = solved.has(current);
  const wing = Math.floor(current / WING_SIZE);
  const accent = wingColor(wing);

  // The room takes whatever height is left over, so the prints are sized from
  // what it actually got rather than from a guess about the screen.
  const [roomHeight, setRoomHeight] = useState(0);
  const compact = height < 740;

  // Sideways, two prints share the room with the shell padding, both arrows
  // and the plus sign between them.
  const rowWidth = Math.min(width, 480) - 100;

  // Downwards, the print hangs below the map row and has to clear the plaque
  // standing on the floor — plus its own frame, and the wall label when the
  // screen is tall enough to show one.
  const budget =
    roomHeight - ROOM_TOP - FRAME_CHROME - PLAQUE_CLEARANCE - (compact ? 0 : LABEL_HEIGHT);
  const artWidth = Math.max(
    86,
    Math.min(rowWidth / 2, budget > 0 ? budget * (260 / 310) : rowWidth / 2)
  );

  // PanResponder is built once, so it reads the live index through a ref.
  const currentRef = useRef(current);
  currentRef.current = current;

  const swipe = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 20 && Math.abs(gesture.dx) > Math.abs(gesture.dy) * 1.5,
      onPanResponderRelease: (_, gesture) => {
        if (Math.abs(gesture.dx) > 65 && Math.abs(gesture.dx) > Math.abs(gesture.dy) * 1.5) {
          // Right-to-left reading: a swipe to the right walks forward.
          onGo(currentRef.current + (gesture.dx > 0 ? 1 : -1));
        }
      },
    })
  ).current;

  const letters = useMemo(
    () =>
      level.city
        .split(' ')
        .map(word => word.length)
        .join(' + ') + ' אותיות',
    [level.city]
  );

  // The whole room reacts to a solve: the prints take a bow, the plaque that
  // now carries the answer swells, and the coins earned drift up towards the
  // counter in the strip above.
  const [reveal, celebrating] = useCelebration(celebration?.id);

  const continueLabel =
    solved.size === total
      ? 'לצפייה באוסף המלא ←'
      : current === total - 1
        ? 'לחידה שטרם גיליתם ←'
        : 'לחדר הבא ←';

  return (
    <View style={styles.screen}>
      <View
        style={styles.room}
        onLayout={event => setRoomHeight(event.nativeEvent.layout.height)}>
        <View style={StyleSheet.absoluteFill}>
          <RoomScene theme={roomTheme} />
        </View>

        <View style={styles.roomTop}>
          <Pressable onPress={onOpenMap} accessibilityRole="button" style={styles.mapTrigger}>
            <Text style={styles.mapTriggerText}>▦ מפת המוזיאון</Text>
          </Pressable>
          <Text style={styles.roomNumber}>
            מוצג {pad2(current + 1)} מתוך {total}
          </Text>
        </View>

        {!compact ? (
          <Text style={[styles.wingMark, {color: accent}]} accessibilityElementsHidden>
            {pad2(current + 1)}
          </Text>
        ) : null}

        <View style={styles.exhibition} {...swipe.panHandlers}>
          <Pressable
            onPress={() => onGo(current - 1)}
            disabled={current === 0}
            accessibilityRole="button"
            accessibilityLabel="למוצג הקודם"
            style={[styles.arrow, styles.arrowPrev, current === 0 && styles.arrowOff]}>
            <Text style={styles.arrowMark}>→</Text>
          </Pressable>

          <View style={styles.artRow}>
            {level.art.map((key, index) => (
              <React.Fragment key={`${key}-${index}`}>
                {index ? (
                  <Text style={styles.plus}>{level.kind === 'place' ? '&' : '+'}</Text>
                ) : null}
                <FramedArt
                  artKey={key}
                  part={index ? 'ב׳' : 'א׳'}
                  artLabel={artName(key)}
                  width={artWidth}
                  wing={wing}
                  solved={done}
                  showLabel={!compact}
                  celebrate={celebration?.id}
                  onPress={() => onZoom(index)}
                />
              </React.Fragment>
            ))}
          </View>

          <Pressable
            onPress={() => onGo(current + 1)}
            disabled={current === total - 1}
            accessibilityRole="button"
            accessibilityLabel="למוצג הבא"
            style={[styles.arrow, styles.arrowNext, current === total - 1 && styles.arrowOff]}>
            <Text style={styles.arrowMark}>←</Text>
          </Pressable>
        </View>

        <Animated.View
          style={[
            styles.plaque,
            celebrating && styles.plaqueRevealing,
            {transform: [{scale: pulse(reveal, 1.07)}]},
          ]}>
          <View style={styles.plaquePin} />
          <Text style={styles.plaqueNumber}>
            {kindLabel(level.kind)} / {pad3(current + 1)}
          </Text>
          <Text style={styles.plaqueTitle}>
            {done
              ? level.city
              : exhibition.subject === 'עיר'
                ? 'עיר שמסתתרת בין התמונות'
                : 'מי מסתתר בין הרמזים?'}
          </Text>
          <Text style={styles.plaqueCaption}>
            {done
              ? level.explain
              : level.kind === 'place'
                ? 'איזו עיר מחברת בין שני המראות?'
                : level.kind === 'identity'
                  ? 'זהו את השם בעזרת שני הרמזים'
                  : 'חברו את הרמזים מימין לשמאל'}
          </Text>
        </Animated.View>

        {celebrating && celebration?.coins ? (
          <Animated.View
            pointerEvents="none"
            style={[
              styles.earned,
              {
                opacity: flash(reveal, 1, 0.25),
                transform: [
                  {translateY: reveal.interpolate({inputRange: [0, 1], outputRange: [0, -62]})},
                  {scale: pulse(reveal, 1.1, 0.25)},
                ],
              },
            ]}>
            <Coin size={18} />
            <Text style={styles.earnedText}>{celebration.coins}</Text>
          </Animated.View>
        ) : null}
      </View>

      <View style={styles.tourStrip}>
        <Text style={[styles.wingLabel, {color: '#ad5a3c'}]} numberOfLines={1}>
          {wingLabel(exhibition, wing)}
        </Text>
        <TourStrip total={total} current={current} solved={solved} onGo={onGo} />
        <Text style={styles.swipeLabel} numberOfLines={1}>
          החליקו לסיור ↔
        </Text>
      </View>

      <View style={styles.answerPanel}>
        {done ? (
          <PrimaryButton label={continueLabel} onPress={onContinue} style={styles.continue} />
        ) : (
          <>
            <View style={styles.questionTop}>
              <Text style={styles.questionLabel}>{exhibition.question}</Text>
              <Text style={styles.letterCount}>{letters}</Text>
            </View>
            <View style={styles.answerRow}>
              <TextInput
                value={answer}
                onChangeText={onAnswer}
                onSubmitEditing={onSubmit}
                placeholder={
                  exhibition.subject === 'עיר' ? 'הקלידו את שם העיר' : 'הקלידו את השם המלא'
                }
                placeholderTextColor="#828b7e"
                maxLength={40}
                returnKeyType="done"
                autoCorrect={false}
                accessibilityLabel={exhibition.question}
                aria-invalid={invalid}
                style={[styles.input, invalid && styles.inputInvalid]}
              />
              <PrimaryButton
                label="←"
                onPress={onSubmit}
                style={styles.submit}
                textStyle={styles.submitMark}
              />
            </View>
          </>
        )}

        {feedback ? (
          <Text
            accessibilityLiveRegion="polite"
            style={[styles.feedback, feedbackTone === 'error' && styles.feedbackError]}>
            {feedback}
          </Text>
        ) : null}

        <View style={styles.answerFooter}>
          <Pressable
            onPress={onHint}
            disabled={done}
            accessibilityRole="button"
            style={styles.hintButton}>
            <Text style={[styles.hintText, done && styles.hintOff]}>✧ רמז מהאוצר</Text>
          </Pressable>
          <Text style={styles.footNote}>מבט נוסף עושה את ההבדל</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1},
  room: {flex: 1, minHeight: 210, overflow: 'hidden', backgroundColor: colors.chrome},
  roomTop: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  mapTrigger: {
    minHeight: 36,
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 9,
    backgroundColor: 'rgba(248,243,230,0.86)',
    borderWidth: 1,
    borderColor: colors.parchmentLine,
    borderRadius: 5,
  },
  mapTriggerText: {fontSize: 12, color: colors.inkSoft, writingDirection: 'rtl'},
  roomNumber: {
    fontSize: 10,
    color: colors.inkSoft,
    backgroundColor: 'rgba(248,243,230,0.86)',
    borderWidth: 1,
    borderColor: colors.parchmentLine,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 9,
    writingDirection: 'rtl',
  },
  wingMark: {
    position: 'absolute',
    top: 52,
    right: '11%',
    fontSize: 26,
    lineHeight: 28,
    opacity: 0.7,
    letterSpacing: -2,
  },
  exhibition: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 14,
    paddingHorizontal: 6,
  },
  artRow: {flexDirection: 'row-reverse', alignItems: 'center', gap: 8, flexShrink: 1},
  plus: {fontSize: 18, color: '#8c714b'},
  arrow: {
    width: 31,
    height: 31,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,252,243,0.86)',
    borderWidth: 1,
    borderColor: '#c8c8b9',
  },
  arrowPrev: {marginLeft: 'auto'},
  arrowNext: {marginRight: 'auto'},
  arrowOff: {opacity: 0.28},
  arrowMark: {fontSize: 17, color: '#3d5871', lineHeight: 20},
  plaque: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    maxWidth: '85%',
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: colors.parchment,
    borderWidth: 1,
    borderColor: colors.parchmentLine,
    alignItems: 'center',
  },
  plaqueRevealing: {borderColor: '#d9ac66'},
  earned: {
    position: 'absolute',
    // Clear of the plaque below it, so the answer it just revealed stays
    // readable while the coins drift up towards the counter.
    bottom: 104,
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: colors.parchment,
    borderWidth: 1,
    borderColor: '#d9ac66',
  },
  earnedText: {fontSize: 16, fontWeight: '700', color: colors.primaryPressed},
  plaquePin: {
    position: 'absolute',
    top: -6,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.brassLight,
  },
  plaqueNumber: {
    fontSize: 7,
    letterSpacing: 1.5,
    color: colors.eyebrow,
    writingDirection: 'rtl',
  },
  plaqueTitle: {
    ...serif,
    fontSize: 12,
    lineHeight: 18,
    color: colors.ink,
    marginVertical: 4,
    textAlign: 'center',
    writingDirection: 'rtl',
  },
  plaqueCaption: {
    ...serif,
    fontStyle: 'italic',
    fontSize: 9,
    lineHeight: 14,
    color: colors.inkFaint,
    textAlign: 'center',
    writingDirection: 'rtl',
  },
  tourStrip: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
    minHeight: 41,
    paddingHorizontal: 15,
    backgroundColor: colors.shell,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e5dc',
  },
  wingLabel: {fontSize: 9, fontWeight: '500', writingDirection: 'rtl'},
  swipeLabel: {fontSize: 9, color: colors.muted, writingDirection: 'rtl'},
  tourDots: {flexDirection: 'row-reverse', paddingVertical: 4},
  dotHit: {width: 27, height: 32, alignItems: 'center', justifyContent: 'center'},
  dotNumber: {fontSize: 11, color: '#5a6a77'},
  dotNumberCurrent: {color: colors.current, fontWeight: '700'},
  dotNumberSolved: {color: '#397762'},
  dot: {position: 'absolute', bottom: 2, width: 3, height: 3, borderRadius: 2, backgroundColor: colors.dot},
  dotCurrent: {width: 17, height: 3, borderRadius: 2, backgroundColor: colors.current},
  dotSolved: {backgroundColor: colors.solved},
  answerPanel: {
    paddingTop: 13,
    paddingHorizontal: 19,
    paddingBottom: 12,
    backgroundColor: colors.chrome,
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
  },
  questionTop: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 9,
  },
  questionLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.ink,
    writingDirection: 'rtl',
    flexShrink: 1,
  },
  letterCount: {fontSize: 10, color: '#707b70', writingDirection: 'rtl'},
  answerRow: {flexDirection: 'row-reverse', gap: 10},
  input: {
    flex: 1,
    height: 51,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.fieldLine,
    backgroundColor: colors.field,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#293b2e',
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  inputInvalid: {borderColor: colors.error},
  submit: {width: 58, height: 51, paddingHorizontal: 0, paddingVertical: 0},
  submitMark: {fontSize: 24},
  continue: {width: '100%', marginBottom: 5},
  feedback: {
    fontSize: 12,
    lineHeight: 20,
    color: colors.success,
    marginTop: 8,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  feedbackError: {color: colors.error},
  answerFooter: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginTop: 7,
  },
  hintButton: {minHeight: 35, justifyContent: 'center', paddingVertical: 4},
  hintText: {fontSize: 15, color: colors.hint, writingDirection: 'rtl'},
  hintOff: {opacity: 0.28},
  footNote: {fontSize: 9, color: '#7c8477', writingDirection: 'rtl'},
});
