// The museum's own Hebrew keyboard, so answering never hands the screen over
// to the system keyboard.
//
// The letters sit where an Israeli keyboard puts them — left to right, the way
// iOS and Android lay out Hebrew too, because that is the arrangement people
// have in their fingers. Every answer in the museum is Hebrew (checked against
// the puzzle data), and normalize() folds final letters and the geresh away,
// so letters, a space and a backspace are the whole alphabet needed here.
import React from 'react';
import {View, Text, Pressable, StyleSheet, useWindowDimensions} from 'react-native';
import {colors} from '../theme.js';

const ROWS = [
  ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
  ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
  ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'],
];

const WIDEST = Math.max(...ROWS.map(row => row.length));
const GAP = 4;
const SIDE = 6;

function Key({label, width, height, onPress, tone, accessibilityLabel}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      style={({pressed}) => [
        styles.key,
        {width, height},
        tone === 'action' && styles.keyAction,
        tone === 'submit' && styles.keySubmit,
        pressed && styles.keyPressed,
      ]}>
      <Text style={[styles.keyText, tone === 'submit' && styles.keyTextSubmit]}>{label}</Text>
    </Pressable>
  );
}

export default function Keyboard({onKey, onBackspace, onSpace, onSubmit, onClose, canSubmit}) {
  const {width, height} = useWindowDimensions();

  // The widest row decides the key size; everything else is measured off it so
  // the rows stay on one line at any width the shell allows.
  const shell = Math.min(width, 480);
  const keyWidth = Math.floor((shell - SIDE * 2 - GAP * (WIDEST - 1)) / WIDEST);
  const keyHeight = height < 700 ? 38 : 44;

  return (
    <View style={styles.board}>
      <View style={styles.handle}>
        <Text style={styles.handleText}>מקלדת המוזיאון</Text>
        <Pressable
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="סגירת המקלדת"
          style={styles.close}>
          <Text style={styles.closeText}>⌄</Text>
        </Pressable>
      </View>

      {ROWS.map((row, index) => (
        <View key={index} style={[styles.row, {gap: GAP}]}>
          {row.map(letter => (
            <Key
              key={letter}
              label={letter}
              width={keyWidth}
              height={keyHeight}
              onPress={() => onKey(letter)}
            />
          ))}
        </View>
      ))}

      <View style={[styles.row, {gap: GAP}]}>
        <Key
          label="⌫"
          tone="action"
          accessibilityLabel="מחיקת אות"
          width={keyWidth * 2 + GAP}
          height={keyHeight}
          onPress={onBackspace}
        />
        <Key
          label="רווח"
          tone="action"
          width={keyWidth * 5 + GAP * 4}
          height={keyHeight}
          onPress={onSpace}
        />
        <Key
          label="בדיקה"
          tone={canSubmit ? 'submit' : 'action'}
          accessibilityLabel="בדיקת התשובה"
          width={keyWidth * 3 + GAP * 2}
          height={keyHeight}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    paddingHorizontal: SIDE,
    paddingBottom: 8,
    gap: GAP,
    backgroundColor: colors.parchment,
    borderTopWidth: 1,
    borderTopColor: colors.parchmentLine,
  },
  handle: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingTop: 4,
    paddingBottom: 2,
  },
  handleText: {
    fontSize: 9,
    letterSpacing: 1.1,
    color: colors.eyebrow,
    writingDirection: 'rtl',
  },
  close: {width: 40, height: 24, alignItems: 'center', justifyContent: 'center'},
  closeText: {fontSize: 18, lineHeight: 20, color: colors.inkSoft},
  row: {flexDirection: 'row', justifyContent: 'center'},
  key: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: colors.field,
    borderWidth: 1,
    borderColor: colors.fieldLine,
  },
  keyAction: {backgroundColor: colors.label},
  keySubmit: {backgroundColor: colors.primary, borderColor: colors.primaryPressed},
  keyPressed: {backgroundColor: colors.brassLight},
  keyText: {fontSize: 19, color: colors.ink},
  keyTextSubmit: {color: '#fff', fontSize: 14, fontWeight: '600'},
});
