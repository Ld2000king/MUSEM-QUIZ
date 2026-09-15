// The museum's own Hebrew keyboard, so answering never hands the screen over
// to the system keyboard.
//
// The letters sit where an Israeli keyboard puts them — left to right, the way
// iOS and Android lay out Hebrew too, because that is the arrangement people
// have in their fingers.
//
// No answer in the museum needs a digit (checked against the puzzle data), so
// numbers live on a second layer behind a toggle rather than taking a row of
// their own: the keyboard keeps exactly the same height and the room above it
// never shifts when you switch.
import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, useWindowDimensions} from 'react-native';
import {colors} from '../theme.js';

// Both layers are the same shape — 8 / 10 / 9 — so switching moves nothing.
const LAYERS = {
  letters: [
    ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'],
  ],
  numbers: [
    ['1', '2', '3', '4', '5', '6', '7', '8'],
    ['9', '0', '׳', '״', '-', '.', ',', ':', '!', '?'],
    ['(', ')', '/', '=', '+', '%', '₪', '&', '@'],
  ],
};

const COLUMNS = 10;
const GAP = 4;
const SIDE = 6;

function Key({label, width, height, onPress, tone, accessibilityLabel, textStyle}) {
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
      <Text style={[styles.keyText, tone === 'submit' && styles.keyTextSubmit, textStyle]}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function Keyboard({onKey, onBackspace, onSpace, onSubmit, onClose, canSubmit}) {
  const {width, height} = useWindowDimensions();
  const [layer, setLayer] = useState('letters');

  // Ten columns decide the key size; everything wider is measured in whole
  // columns so every row lands on the same grid.
  const shell = Math.min(width, 480);
  const unit = Math.floor((shell - SIDE * 2 - GAP * (COLUMNS - 1)) / COLUMNS);
  const keyHeight = height < 700 ? 38 : 44;
  const span = n => unit * n + GAP * (n - 1);

  const [topRow, ...restRows] = LAYERS[layer];
  const numbers = layer === 'numbers';

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

      {/* Backspace holds the top right corner on both layers, so it is always
          in the same place whatever you are typing. */}
      <View style={[styles.row, {gap: GAP}]}>
        {topRow.map(key => (
          <Key key={key} label={key} width={unit} height={keyHeight} onPress={() => onKey(key)} />
        ))}
        <Key
          label="⌫"
          tone="action"
          accessibilityLabel="מחיקת אות"
          width={span(2)}
          height={keyHeight}
          onPress={onBackspace}
        />
      </View>

      {restRows.map((row, index) => (
        <View key={index} style={[styles.row, {gap: GAP}]}>
          {row.map(key => (
            <Key key={key} label={key} width={unit} height={keyHeight} onPress={() => onKey(key)} />
          ))}
        </View>
      ))}

      <View style={[styles.row, {gap: GAP}]}>
        <Key
          label={numbers ? 'אבג' : '123'}
          tone="action"
          accessibilityLabel={numbers ? 'מעבר לאותיות' : 'מעבר למספרים'}
          width={span(2)}
          height={keyHeight}
          textStyle={styles.keyTextSmall}
          onPress={() => setLayer(numbers ? 'letters' : 'numbers')}
        />
        <Key
          label="רווח"
          tone="action"
          width={span(5)}
          height={keyHeight}
          textStyle={styles.keyTextSmall}
          onPress={onSpace}
        />
        <Key
          label="בדיקה"
          tone={canSubmit ? 'submit' : 'action'}
          accessibilityLabel="בדיקת התשובה"
          width={span(3)}
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
  keyTextSmall: {fontSize: 14, fontWeight: '600', color: colors.inkSoft},
  keyTextSubmit: {color: '#fff', fontSize: 14, fontWeight: '600'},
});
