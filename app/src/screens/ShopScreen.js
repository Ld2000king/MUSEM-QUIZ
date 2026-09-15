// חנות המזכרות — not open yet. It shows the player what their coins add up
// to and keeps the shelves in view, but nothing here is for sale and nothing
// can be spent: every slot is empty on purpose.
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import CoinPill from '../components/CoinPill.js';
import {Eyebrow, PrimaryButton} from '../components/ui.js';
import {PER_EXHIBIT, PER_WING, PER_EXHIBITION, TOTAL_AVAILABLE} from '../coins.js';
import {colors, serif} from '../theme.js';

const earnings = [
  {mark: '✓', label: 'כל מוצג שמגלים', value: PER_EXHIBIT},
  {mark: '▥', label: 'אגף שלם של עשרה חדרים', value: PER_WING},
  {mark: '★', label: 'תערוכה שהושלמה', value: PER_EXHIBITION},
];

function Shelf() {
  return (
    <View style={styles.shelf}>
      <View style={styles.shelfRow}>
        {[0, 1, 2].map(slot => (
          <View key={slot} style={styles.slot}>
            <Text style={styles.slotMark}>—</Text>
          </View>
        ))}
      </View>
      <View style={styles.shelfBoard} />
    </View>
  );
}

export default function ShopScreen({coins, onBack}) {
  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <Eyebrow>IL MUSEO · SOUVENIR</Eyebrow>
      <Text style={styles.heading}>חנות המזכרות.</Text>
      <Text style={styles.sub}>המדפים עוד ריקים. החנות תיפתח בהמשך.</Text>

      <View style={styles.wallet}>
        <View>
          <Text style={styles.walletLabel}>הארנק שלכם</Text>
          <Text style={styles.walletNote}>מתוך {TOTAL_AVAILABLE} מטבעות שאפשר לאסוף במוזיאון</Text>
        </View>
        <CoinPill count={coins} size="large" label={`${coins} מטבעות בארנק`} />
      </View>

      <View style={styles.closed} accessibilityRole="text">
        <Text style={styles.closedMark}>✕</Text>
        <Text style={styles.closedText}>סגור כרגע</Text>
      </View>

      <Shelf />
      <Shelf />

      <Text style={styles.earnHeading}>איך אוספים מטבעות</Text>
      <View style={styles.earnList}>
        {earnings.map(row => (
          <View key={row.label} style={styles.earnRow}>
            <Text style={styles.earnMark}>{row.mark}</Text>
            <Text style={styles.earnLabel}>{row.label}</Text>
            <CoinPill count={row.value} />
          </View>
        ))}
      </View>

      <PrimaryButton label="בחזרה לאולם הכניסה ←" onPress={onBack} style={styles.back} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {paddingHorizontal: 24, paddingTop: 17, paddingBottom: 25},
  heading: {
    ...serif,
    fontSize: 25,
    color: colors.primaryPressed,
    marginTop: 12,
    marginBottom: 6,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  sub: {fontSize: 12, color: '#747e6f', writingDirection: 'rtl', textAlign: 'right'},
  wallet: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 18,
    padding: 14,
    borderRadius: 15,
    backgroundColor: colors.label,
    borderWidth: 1,
    borderColor: colors.parchmentLine,
  },
  walletLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.ink,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  walletNote: {
    fontSize: 10,
    lineHeight: 16,
    color: colors.inkFaint,
    marginTop: 3,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  closed: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
    marginBottom: 4,
    paddingVertical: 9,
    backgroundColor: colors.parchment,
    borderWidth: 1,
    borderColor: colors.parchmentLine,
    borderRadius: 10,
  },
  closedMark: {fontSize: 14, color: colors.hint},
  closedText: {
    fontSize: 13,
    letterSpacing: 1,
    color: colors.inkSoft,
    writingDirection: 'rtl',
  },
  shelf: {marginTop: 16},
  shelfRow: {flexDirection: 'row-reverse', gap: 10},
  slot: {
    flex: 1,
    height: 72,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.parchmentLine,
    backgroundColor: '#f7f1e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotMark: {fontSize: 18, color: '#c3b394'},
  shelfBoard: {
    height: 7,
    marginTop: 4,
    borderRadius: 2,
    backgroundColor: colors.brassLight,
  },
  earnHeading: {
    ...serif,
    fontSize: 17,
    color: colors.ink,
    marginTop: 26,
    marginBottom: 10,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  earnList: {gap: 8},
  earnRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#f7f1e2',
    borderWidth: 1,
    borderColor: '#e8dcc0',
  },
  earnMark: {fontSize: 15, color: colors.brass, width: 20, textAlign: 'center'},
  earnLabel: {
    flex: 1,
    fontSize: 13,
    color: colors.inkSoft,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  back: {marginTop: 24},
});
