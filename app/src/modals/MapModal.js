// The floor plan: one wing of ten rooms at a time, with a wing picker above
// it. Rooms already discovered show their answer.
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Sheet, styles as ui} from '../components/ui.js';
import {WING_SIZE, kindLabel, wingLabel} from '../data/exhibitions.js';
import {colors} from '../theme.js';

const pad2 = n => String(n).padStart(2, '0');

export default function MapModal({visible, onClose, exhibition, current, solved, onGo}) {
  const levels = exhibition.levels;
  const wingCount = Math.ceil(levels.length / WING_SIZE);
  const [wing, setWing] = useState(Math.floor(current / WING_SIZE));

  // Opening the map always lands on the wing the player is standing in.
  useEffect(() => {
    if (visible) setWing(Math.floor(current / WING_SIZE));
  }, [visible, current]);

  const start = wing * WING_SIZE;
  const rooms = levels.slice(start, start + WING_SIZE);

  return (
    <Sheet
      visible={visible}
      onClose={onClose}
      kicker="IL MUSEO / FLOOR 01"
      title="בחרו לאן לטייל."
      closeLabel="סגירת המפה">
      <Text style={ui.paragraph}>
        {exhibition.title} · {levels.length} מוצגים
      </Text>

      {wingCount > 1 ? (
        <>
          <Text style={styles.selectLabel}>בחירת אגף</Text>
          <View style={styles.wingRow}>
            {Array.from({length: wingCount}, (_, index) => (
              <Pressable
                key={index}
                onPress={() => setWing(index)}
                accessibilityRole="button"
                accessibilityState={{selected: index === wing}}
                style={[styles.wingChip, index === wing && styles.wingChipOn]}>
                <Text style={[styles.wingChipText, index === wing && styles.wingChipTextOn]}>
                  {wingLabel(exhibition, index)} · {index * WING_SIZE + 1}–
                  {Math.min((index + 1) * WING_SIZE, levels.length)}
                </Text>
              </Pressable>
            ))}
          </View>
        </>
      ) : null}

      <View style={styles.map}>
        {rooms.map((level, offset) => {
          const index = start + offset;
          const here = index === current;
          const found = solved.has(index);
          return (
            <Pressable
              key={index}
              onPress={() => onGo(index)}
              accessibilityRole="button"
              accessibilityLabel={`חדר ${index + 1}${found ? ', ' + level.city : ''}`}
              style={[styles.room, found && styles.roomFound, here && styles.roomHere]}>
              <Text style={styles.roomNumber}>{pad2(index + 1)}</Text>
              <Text style={styles.roomName} numberOfLines={1}>
                {found ? level.city : 'מוצג לגלות'}
              </Text>
              <Text style={styles.roomNote} numberOfLines={1}>
                {found ? '✓ התגלתה' : here ? '● אתם כאן' : kindLabel(level.kind)}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={styles.entry}>↑ כניסה למוזיאון</Text>
      <Text style={styles.key}>● החדר שלכם   ✓ עיר שהתגלתה</Text>
    </Sheet>
  );
}

const styles = StyleSheet.create({
  selectLabel: {
    fontSize: 12,
    color: colors.inkSoft,
    marginBottom: 5,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  wingRow: {flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 6, marginBottom: 13},
  wingChip: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.fieldLine,
    backgroundColor: colors.field,
  },
  wingChipOn: {backgroundColor: colors.parchment, borderColor: colors.brass},
  wingChipText: {fontSize: 13, color: colors.inkSoft, writingDirection: 'rtl'},
  wingChipTextOn: {color: colors.primaryPressed, fontWeight: '600'},
  map: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    gap: 8,
    padding: 10,
    backgroundColor: '#edeae2',
    borderWidth: 1,
    borderColor: '#d7d2c7',
  },
  room: {
    width: '47%',
    flexGrow: 1,
    gap: 3,
    minHeight: 77,
    padding: 8,
    backgroundColor: '#fffcf6',
    borderWidth: 2,
    borderBottomWidth: 6,
    borderColor: '#d4d1c7',
  },
  roomFound: {borderColor: '#7d9e85', backgroundColor: '#eef5ea'},
  roomHere: {borderColor: colors.brass, backgroundColor: colors.label},
  roomNumber: {fontSize: 19, fontWeight: '600', color: '#56616a'},
  roomName: {fontSize: 13, color: '#56616a', writingDirection: 'rtl', textAlign: 'right'},
  roomNote: {fontSize: 10, color: '#56616a', writingDirection: 'rtl', textAlign: 'right'},
  entry: {
    textAlign: 'center',
    fontSize: 12,
    padding: 10,
    color: '#677269',
    writingDirection: 'rtl',
  },
  key: {textAlign: 'center', fontSize: 12, color: '#63705e', writingDirection: 'rtl'},
});
