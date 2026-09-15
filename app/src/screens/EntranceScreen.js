// אולם הכניסה — where the player lands. The skeleton hall fills the top of
// the screen; underneath it are the three ways on: into the exhibitions, back
// to the room they were last standing in, or to the souvenir shop.
import React from 'react';
import {View, Text, Pressable, ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import EntranceHall from '../components/EntranceHall.js';
import CoinPill from '../components/CoinPill.js';
import {Eyebrow} from '../components/ui.js';
import {colors, serif} from '../theme.js';

const pad2 = n => String(n).padStart(2, '0');

function Door({title, note, mark, tone, onPress, disabled}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={`${title}. ${note}`}
      accessibilityState={{disabled: !!disabled}}
      style={({pressed}) => [
        styles.door,
        tone === 'primary' && styles.doorPrimary,
        pressed && styles.doorPressed,
        disabled && styles.doorOff,
      ]}>
      <Text style={[styles.doorMark, tone === 'primary' && styles.doorMarkPrimary]}>{mark}</Text>
      <View style={styles.doorText}>
        <Text style={[styles.doorTitle, tone === 'primary' && styles.doorTitlePrimary]}>
          {title}
        </Text>
        <Text style={[styles.doorNote, tone === 'primary' && styles.doorNotePrimary]}>{note}</Text>
      </View>
      <Text style={[styles.doorArrow, tone === 'primary' && styles.doorTitlePrimary]}>←</Text>
    </Pressable>
  );
}

export default function EntranceScreen({
  roomTheme,
  coins,
  exhibition,
  current,
  solvedCount,
  onEnterMuseum,
  onResume,
  onShop,
  onShare,
  onInstall,
  showInstall,
}) {
  const {width, height} = useWindowDimensions();
  const hallWidth = Math.min(width, 480);
  // The hall gets its natural shape when there is room, but never more than a
  // third of a short screen — the doors below it matter more than the ceiling.
  const hallHeight = Math.round(Math.min(hallWidth * (340 / 480), height * 0.36));
  const started = solvedCount > 0 || current > 0;

  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <View style={[styles.hall, {height: hallHeight}]}>
        <EntranceHall theme={roomTheme} width="100%" height="100%" />
      </View>
      <View style={styles.hallPlaque}>
        <Text style={styles.hallPlaqueText}>אולם השלדים · הכניסה הראשית</Text>
      </View>

      <View style={styles.intro}>
        <View style={styles.introTop}>
          <Eyebrow>IL MUSEO · ברוכים הבאים</Eyebrow>
          <CoinPill count={coins} />
        </View>
        <Text style={styles.headline}>
          המוזיאון פתוח.{'\n'}
          <Text style={styles.headlineEm}>מאיפה נתחיל?</Text>
        </Text>
      </View>

      <View style={styles.doors}>
        <Door
          mark="▥"
          tone="primary"
          title="כניסה למוזיאון"
          note="ארבע תערוכות, 80 מוצגים לגלות"
          onPress={onEnterMuseum}
        />
        <Door
          mark="✦"
          title={started ? 'המשך מהחידה הנוכחית' : 'התחלת החידה הראשונה'}
          note={
            started
              ? `${exhibition.title} · מוצג ${pad2(current + 1)} מתוך ${exhibition.levels.length}`
              : `${exhibition.title} · מתחילים מהחדר הראשון`
          }
          onPress={onResume}
        />
        <Door
          mark="⌂"
          title="חנות מזכרות"
          note="עדיין נערכת · אפשר להציץ"
          onPress={onShop}
        />
      </View>

      <View style={styles.footRow}>
        <Pressable onPress={onShare} accessibilityRole="button" style={styles.footLink}>
          <Text style={styles.footLinkText}>שיתוף המוזיאון ↗</Text>
        </Pressable>
        {showInstall ? (
          <Pressable onPress={onInstall} accessibilityRole="button" style={styles.footLink}>
            <Text style={styles.footLinkText}>התקנה במסך הבית ↓</Text>
          </Pressable>
        ) : null}
      </View>

      <Text style={styles.note}>האוסף והמטבעות שלכם נשמרים במכשיר הזה.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {paddingBottom: 22},
  hall: {width: '100%', overflow: 'hidden', backgroundColor: colors.chrome},
  hallPlaque: {
    alignItems: 'center',
    paddingVertical: 6,
    backgroundColor: colors.parchment,
    borderBottomWidth: 1,
    borderBottomColor: colors.parchmentLine,
  },
  hallPlaqueText: {
    fontSize: 9,
    letterSpacing: 1.2,
    color: colors.eyebrow,
    writingDirection: 'rtl',
  },
  intro: {paddingHorizontal: 20, paddingTop: 16},
  introTop: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  headline: {
    ...serif,
    fontSize: 29,
    lineHeight: 36,
    color: colors.ink,
    marginTop: 12,
    marginBottom: 16,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  headlineEm: {color: '#b7694d'},
  doors: {paddingHorizontal: 20, gap: 10},
  door: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 14,
    minHeight: 68,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 15,
    backgroundColor: colors.parchment,
    borderWidth: 1,
    borderColor: colors.parchmentLine,
  },
  doorPrimary: {backgroundColor: colors.primary, borderColor: colors.primaryPressed},
  doorPressed: {opacity: 0.85},
  doorOff: {opacity: 0.4},
  doorMark: {fontSize: 22, color: colors.brass, width: 26, textAlign: 'center'},
  doorMarkPrimary: {color: colors.brassLight},
  doorText: {flex: 1},
  doorTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.ink,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  doorTitlePrimary: {color: '#fff'},
  doorNote: {
    fontSize: 11,
    lineHeight: 17,
    color: colors.inkFaint,
    marginTop: 2,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  doorNotePrimary: {color: '#f0e0c8'},
  doorArrow: {fontSize: 16, color: colors.brass},
  footRow: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  footLink: {
    flexGrow: 1,
    minHeight: 42,
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.parchmentLine,
  },
  footLinkText: {
    fontSize: 13,
    color: colors.inkSoft,
    textAlign: 'center',
    writingDirection: 'rtl',
  },
  note: {
    fontSize: 10,
    textAlign: 'center',
    color: '#838879',
    marginTop: 16,
    writingDirection: 'rtl',
  },
});
