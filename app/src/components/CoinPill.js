// The museum's coin: a brass token with a column struck on it. Used for the
// running balance in the chrome and for the larger figure in the shop.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle, Path, G} from 'react-native-svg';
import {colors} from '../theme.js';

export function Coin({size = 16}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx="12" cy="12" r="11" fill={colors.brassLight} />
      <Circle cx="12" cy="12" r="11" fill="none" stroke={colors.brass} strokeWidth="1.6" />
      <Circle cx="12" cy="12" r="8" fill="none" stroke={colors.brass} strokeWidth="0.9" />
      <G fill={colors.brass}>
        <Path d="M7.5 7h9v1.7h-9zM8.6 15.4h6.8V17H8.6z" />
        <Path d="M9.2 8.7h1.5v6.7H9.2zM13.3 8.7h1.5v6.7h-1.5z" />
      </G>
    </Svg>
  );
}

export default function CoinPill({count, size = 'small', style, label}) {
  const large = size === 'large';
  return (
    <View
      style={[styles.pill, large && styles.pillLarge, style]}
      accessibilityRole="text"
      accessibilityLabel={label || `${count} מטבעות`}>
      <Coin size={large ? 26 : 16} />
      <Text style={[styles.count, large && styles.countLarge]}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: colors.parchment,
    borderWidth: 1,
    borderColor: colors.parchmentLine,
  },
  pillLarge: {gap: 8, paddingVertical: 7, paddingHorizontal: 14},
  count: {fontSize: 12, fontWeight: '600', color: colors.inkSoft},
  countLarge: {fontSize: 22},
});
