// The entrance hall: one card per exhibition, each showing how much of it the
// player has already discovered.
import React from 'react';
import {View, Text, Pressable, ScrollView, StyleSheet} from 'react-native';
import Artwork from '../components/Artwork.js';
import {Eyebrow, PrimaryButton} from '../components/ui.js';
import {exhibitions} from '../data/exhibitions.js';
import {colors, cardTone, serif} from '../theme.js';

function ExhibitionCard({exhibition, discovered, onPress}) {
  const tone = cardTone(exhibition.tone);
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${exhibition.title} — ${exhibition.subtitle}`}
      style={({pressed}) => [
        styles.card,
        {backgroundColor: tone.background, borderColor: tone.border},
        pressed && styles.cardPressed,
      ]}>
      <View style={styles.cardArt}>
        <Artwork artKey={exhibition.icon} width={89} height={111} />
      </View>
      <View style={styles.cardText}>
        <Text style={styles.count}>{exhibition.levels.length} מוצגים</Text>
        <Text style={styles.cardTitle}>{exhibition.title}</Text>
        <Text style={styles.cardSub}>{exhibition.subtitle}</Text>
        <Text style={styles.progress}>
          {discovered ? `${discovered} התגלו · ממשיכים בסיור` : 'כניסה לתערוכה ←'}
        </Text>
      </View>
    </Pressable>
  );
}

export default function LobbyScreen({discoveredById, onEnter, onShare}) {
  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <Eyebrow>IL MUSEO · ארבע תערוכות, עולם של גילויים</Eyebrow>
      <Text style={styles.headline}>
        לאן הסקרנות{'\n'}
        <Text style={styles.headlineEm}>תיקח אתכם היום?</Text>
      </Text>
      <Text style={styles.intro}>בחרו תערוכה. פענחו את הרמזים. בנו אוסף משלכם.</Text>

      <View style={styles.cards}>
        {exhibitions.map(exhibition => (
          <ExhibitionCard
            key={exhibition.id}
            exhibition={exhibition}
            discovered={discoveredById[exhibition.id] || 0}
            onPress={() => onEnter(exhibition.id)}
          />
        ))}
      </View>

      <PrimaryButton label="שתף את המוזיאון עם חברים ↗" onPress={onShare} style={styles.share} />
      <Text style={styles.note}>האוסף שלכם נשמר במכשיר, בכל תערוכה בנפרד.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {paddingHorizontal: 20, paddingTop: 19, paddingBottom: 24},
  headline: {
    ...serif,
    fontSize: 31,
    lineHeight: 38,
    color: colors.ink,
    marginTop: 14,
    marginBottom: 9,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  headlineEm: {color: '#b7694d'},
  intro: {
    fontSize: 12,
    color: '#758074',
    marginBottom: 21,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  cards: {gap: 13},
  card: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 17,
    padding: 13,
    borderWidth: 1,
    borderRadius: 17,
    minHeight: 143,
  },
  cardPressed: {opacity: 0.85},
  cardArt: {
    width: 89,
    height: 111,
    backgroundColor: '#fffdf5',
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderWidth: 5,
    borderColor: 'rgba(255,255,255,0.6)',
    overflow: 'hidden',
  },
  cardText: {flex: 1},
  count: {fontSize: 10, color: '#7a7869', writingDirection: 'rtl', textAlign: 'right'},
  cardTitle: {
    ...serif,
    fontSize: 19,
    color: '#304b63',
    marginTop: 3,
    marginBottom: 5,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  cardSub: {
    fontSize: 11,
    lineHeight: 17,
    color: '#727c73',
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  progress: {
    fontSize: 12,
    color: '#476747',
    marginTop: 12,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  share: {marginTop: 21, marginBottom: 10},
  note: {fontSize: 10, textAlign: 'center', color: '#838879', writingDirection: 'rtl'},
});
