// Everything the player has found in this exhibition, one ten-room wing per
// page. Locked rooms show a question mark rather than a spoiler.
import React from 'react';
import {View, Text, Pressable, ScrollView, StyleSheet} from 'react-native';
import Artwork from '../components/Artwork.js';
import {Eyebrow, PrimaryButton} from '../components/ui.js';
import {WING_SIZE} from '../data/exhibitions.js';
import {colors, serif} from '../theme.js';

const pad2 = n => String(n).padStart(2, '0');

export default function CollectionScreen({exhibition, solved, page, onPage, onOpen, onBack}) {
  const levels = exhibition.levels;
  const pages = Math.ceil(levels.length / WING_SIZE);
  const start = page * WING_SIZE;
  const rooms = levels.slice(start, start + WING_SIZE);

  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <Eyebrow>LA COLLEZIONE</Eyebrow>
      <Text style={styles.heading}>האוסף הפרטי שלכם.</Text>
      <Text style={styles.sub}>מקומות שגיליתם. רגעים ששווה לשמור.</Text>
      <Text style={styles.summary} accessibilityLiveRegion="polite">
        {solved.size} מתוך {levels.length} מוצגים באוסף
      </Text>

      <View style={styles.grid}>
        {rooms.map((level, offset) => {
          const index = start + offset;
          const found = solved.has(index);
          return (
            <Pressable
              key={index}
              onPress={() => onOpen(index)}
              accessibilityRole="button"
              accessibilityLabel={found ? level.city : `מוצג ${pad2(index + 1)}`}
              style={({pressed}) => [styles.card, pressed && styles.cardPressed]}>
              {found ? (
                <View style={styles.cardArt}>
                  <Artwork artKey={level.art[0]} width="100%" height={119} />
                </View>
              ) : (
                <View style={styles.locked}>
                  <Text style={styles.lockedMark}>?</Text>
                </View>
              )}
              <Text style={styles.cardTitle} numberOfLines={1}>
                {found ? level.city : `מוצג ${pad2(index + 1)}`}
              </Text>
              <Text style={styles.cardNote}>
                {found ? 'נוסף לאוסף · לצפייה במוצג' : 'המוצג הבא מחכה להתגלות'}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {pages > 1 ? (
        <View style={styles.paging}>
          <Pressable
            onPress={() => onPage(Math.max(0, page - 1))}
            disabled={page === 0}
            accessibilityRole="button"
            accessibilityLabel="לעמוד הקודם באוסף"
            style={[styles.pageButton, page === 0 && styles.pageOff]}>
            <Text style={styles.pageMark}>→</Text>
          </Pressable>
          <Text style={styles.pageLabel}>
            אגף {page + 1} מתוך {pages}
          </Text>
          <Pressable
            onPress={() => onPage(Math.min(pages - 1, page + 1))}
            disabled={page === pages - 1}
            accessibilityRole="button"
            accessibilityLabel="לעמוד הבא באוסף"
            style={[styles.pageButton, page === pages - 1 && styles.pageOff]}>
            <Text style={styles.pageMark}>←</Text>
          </Pressable>
        </View>
      ) : null}

      <PrimaryButton label="בחזרה לסיור ←" onPress={onBack} />
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
  summary: {
    fontSize: 13,
    color: '#617568',
    marginTop: 14,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  grid: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    gap: 14,
    marginTop: 20,
    marginBottom: 5,
  },
  card: {
    width: '46%',
    flexGrow: 1,
    padding: 14,
    backgroundColor: '#f2efe7',
    borderWidth: 1,
    borderColor: '#e6dfd2',
    borderRadius: 3,
  },
  cardPressed: {opacity: 0.85},
  cardArt: {borderWidth: 8, borderColor: '#fff', backgroundColor: '#fff'},
  locked: {
    height: 135,
    borderWidth: 1,
    borderColor: '#e1e7da',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockedMark: {fontSize: 34, color: '#aab4a1'},
  cardTitle: {
    ...serif,
    fontSize: 15,
    color: '#303e2e',
    marginTop: 13,
    marginBottom: 5,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  cardNote: {
    fontSize: 10,
    lineHeight: 17,
    color: '#798371',
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  paging: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginVertical: 15,
  },
  pageButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.parchment,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageOff: {opacity: 0.28},
  pageMark: {fontSize: 21, color: colors.brass},
  pageLabel: {fontSize: 13, color: '#617568', writingDirection: 'rtl'},
});
