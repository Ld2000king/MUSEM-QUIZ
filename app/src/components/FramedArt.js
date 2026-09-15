// A print in its brass frame, on a bright mat, with the wall label beneath.
// Tapping it opens the enlarged view — the label says so.
//
// When the room is solved, the print takes a bow: it swells slightly, a gold
// halo blooms around the frame, and the gallery light sweeps across the glass.
import React from 'react';
import {Animated, View, Text, Pressable, StyleSheet} from 'react-native';
import Artwork, {isSculpture} from './Artwork.js';
import {colors, wingColor} from '../theme.js';
import {useCelebration, pulse, flash} from '../celebrate.js';

export default function FramedArt({
  artKey,
  part,
  width,
  wing,
  solved,
  showLabel,
  onPress,
  artLabel,
  celebrate,
}) {
  const sculpture = isSculpture(artKey);
  const accent = wingColor(wing);
  const height = Math.round(width * (310 / 260));
  const [progress, active] = useCelebration(celebrate);

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`הגדלת פרט ${part} · ${artLabel}`}
      style={({pressed}) => [styles.art, {width}, pressed && styles.pressed]}>
      <Animated.View style={{width: '100%', transform: [{scale: pulse(progress, 1.05)}]}}>
        {active ? (
          <Animated.View
            pointerEvents="none"
            style={[
              styles.halo,
              {
                opacity: flash(progress, 0.95),
                transform: [{scale: progress.interpolate({inputRange: [0, 1], outputRange: [1, 1.18]})}],
              },
            ]}
          />
        ) : null}

        <View
          style={[
            styles.frame,
            sculpture && styles.frameless,
            solved && !sculpture && styles.solvedFrame,
          ]}>
          <View style={[styles.mat, sculpture && styles.frameless]}>
            <Artwork artKey={artKey} width="100%" height={height} />
            {active ? (
              <Animated.View
                pointerEvents="none"
                style={[
                  styles.sweep,
                  {
                    opacity: flash(progress, 0.55, 0.4),
                    transform: [
                      {
                        translateX: progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-width * 1.1, width * 1.1],
                        }),
                      },
                      {rotate: '12deg'},
                    ],
                  },
                ]}
              />
            ) : null}
          </View>
        </View>
      </Animated.View>

      {showLabel ? (
        <View style={[styles.label, {borderRightColor: accent}]}>
          <Text style={styles.labelText} numberOfLines={1}>
            פרט {part} · להגדלה
          </Text>
          <View style={[styles.zoomMark, {borderColor: accent}]}>
            <View style={[styles.zoomBar, styles.zoomBarH, {backgroundColor: accent}]} />
            <View style={[styles.zoomBar, styles.zoomBarV, {backgroundColor: accent}]} />
          </View>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  art: {alignItems: 'center'},
  pressed: {opacity: 0.85},
  halo: {
    position: 'absolute',
    top: -7,
    left: -7,
    right: -7,
    bottom: -7,
    borderWidth: 3,
    borderColor: '#f3cd84',
    borderRadius: 3,
  },
  frame: {
    width: '100%',
    padding: 4,
    backgroundColor: colors.brassLight,
    borderWidth: 2,
    borderColor: 'rgba(255,240,200,0.5)',
    shadowColor: '#3c2d14',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.28,
    shadowRadius: 16,
    elevation: 7,
  },
  solvedFrame: {borderColor: '#7ea083', borderWidth: 2},
  frameless: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  mat: {
    padding: 5,
    backgroundColor: colors.mat,
    borderWidth: 1,
    borderColor: colors.matLine,
    // Keeps the light sweep inside the glass.
    overflow: 'hidden',
  },
  // A band of light crossing the print, like the gallery lamp catching glass.
  sweep: {
    position: 'absolute',
    top: -40,
    bottom: -40,
    width: '45%',
    backgroundColor: '#fff',
  },
  label: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 6,
    marginTop: 9,
    paddingVertical: 4,
    paddingHorizontal: 8,
    maxWidth: '100%',
    backgroundColor: '#fbf8ec',
    borderRightWidth: 3,
  },
  labelText: {fontSize: 9, lineHeight: 13, color: '#5c6257', writingDirection: 'rtl'},
  zoomMark: {width: 11, height: 11, borderWidth: 1.5, borderRadius: 6},
  zoomBar: {position: 'absolute', borderRadius: 1},
  zoomBarH: {top: 3.5, left: 2, right: 2, height: 1},
  zoomBarV: {top: 2, bottom: 2, left: 3.5, width: 1},
});
