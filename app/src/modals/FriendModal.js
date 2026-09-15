// Someone else's collection, opened from a shared link. Read-only: it never
// touches the player's own progress, and it only ever shows local titles
// looked up behind indices that were validated first.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Sheet, PrimaryButton, styles as ui} from '../components/ui.js';
import {colors} from '../theme.js';

export default function FriendModal({visible, onClose, collection}) {
  if (!collection) return null;
  const count = collection.reduce((sum, item) => sum + item.solved.length, 0);

  return (
    <Sheet
      visible={visible}
      onClose={onClose}
      closeLabel="סגירת האוסף המשותף"
      kicker="הזמנה למוזיאון של חברים"
      title="הגילויים שלהם. הסקרנות שלכם.">
      <Text style={ui.paragraph}>
        {count} מוצגים התגלו באוסף המשותף. זהו צילום מצב, שאינו משנה את ההתקדמות שלכם.
      </Text>

      {collection.map(item => (
        <View key={item.category.id} style={styles.section}>
          <Text style={styles.title}>{item.category.title}</Text>
          <Text style={styles.names}>
            {item.solved.map(index => item.category.levels[index].city).join(' · ') ||
              'התערוכה עוד מחכה להתגלות'}
          </Text>
        </View>
      ))}

      <PrimaryButton label="למוזיאון שלי ←" onPress={onClose} />
    </Sheet>
  );
}

const styles = StyleSheet.create({
  section: {paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#e3e8df'},
  title: {fontSize: 16, color: '#436342', writingDirection: 'rtl', textAlign: 'right'},
  names: {
    fontSize: 13,
    lineHeight: 23,
    color: colors.inkFaint,
    marginTop: 7,
    marginBottom: 6,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
});
