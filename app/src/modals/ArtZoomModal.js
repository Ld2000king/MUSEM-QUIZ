// One print, as large as the screen allows — for the puzzles where you need
// to count details or read an inscription.
import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import Artwork, {isSculpture} from '../components/Artwork.js';
import {Sheet, PrimaryButton} from '../components/ui.js';
import {colors} from '../theme.js';

const pad2 = n => String(n).padStart(2, '0');

export default function ArtZoomModal({visible, onClose, level, index, current, solved}) {
  const {height, width} = useWindowDimensions();
  if (!level || index == null) return null;

  const artKey = level.art[index];
  const sculpture = isSculpture(artKey);
  const part = index ? 'ב׳' : 'א׳';

  // As tall as the sheet can take, then clamped so it still fits sideways.
  const artHeight = Math.min(height * 0.5, 400, (width - 100) * (310 / 260));
  const artWidth = artHeight * (260 / 310);

  return (
    <Sheet
      visible={visible}
      onClose={onClose}
      closeLabel="סגירת התמונה"
      kicker={`פרט ${part} · מוצג ${pad2(current + 1)} · ${sculpture ? 'פסל אבן' : 'איור על נייר'}`}>
      <View style={styles.center}>
        <View style={[styles.frame, sculpture && styles.frameless]}>
          <View style={[styles.mat, sculpture && styles.frameless]}>
            <Artwork artKey={artKey} width={artWidth} height={artHeight} />
          </View>
        </View>
      </View>

      <Text style={styles.caption}>
        {solved
          ? level.explain
          : `התבוננו בפרטים. ${
              level.kind === 'place'
                ? 'איזו עיר שני המראות האלה מאפיינים?'
                : 'מה רואים כאן, ואיך זה מתחבר לפרט השני?'
            }`}
      </Text>

      <PrimaryButton label="בחזרה לחדר ←" onPress={onClose} />
    </Sheet>
  );
}

const styles = StyleSheet.create({
  center: {alignItems: 'center', marginTop: 15},
  frame: {
    padding: 6,
    backgroundColor: colors.brassLight,
    borderWidth: 1,
    borderColor: colors.brass,
  },
  frameless: {backgroundColor: 'transparent', borderWidth: 0, padding: 0},
  mat: {padding: 10, backgroundColor: colors.mat},
  caption: {
    fontSize: 13,
    lineHeight: 22,
    color: '#63705e',
    marginTop: 16,
    marginBottom: 18,
    textAlign: 'center',
    writingDirection: 'rtl',
  },
});
