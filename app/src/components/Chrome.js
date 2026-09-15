// The fixed shell: a brand bar with the wall-colour swatches and the help
// button, and the bottom tab row.
import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {colors, serif} from '../theme.js';

const logo = require('../../assets/logo-mark.png');

function Swatch({tone, active, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{selected: active}}
      accessibilityLabel={tone === 'dark' ? 'רקע כהה' : 'רקע בהיר'}
      style={[
        styles.swatch,
        tone === 'dark' ? styles.swatchDark : styles.swatchLight,
        active && styles.swatchActive,
      ]}
    />
  );
}

export function Header({roomTheme, onRoomTheme, onHelp, onBrand, offline}) {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={onBrand}
        accessibilityRole="button"
        accessibilityLabel="מקום למחשבה — חזרה ללובי"
        style={styles.brand}>
        <Image source={logo} style={styles.brandIcon} accessibilityIgnoresInvertColors />
        <View style={styles.brandText}>
          <Text style={styles.brandTitle}>מקום למחשבה</Text>
          <Text style={styles.brandSub}>IL MUSEO · המוזיאון שלכם</Text>
        </View>
      </Pressable>

      {offline ? (
        <Text style={styles.offline} accessibilityRole="text">
          ללא חיבור
        </Text>
      ) : null}

      <View style={styles.swatches} accessibilityRole="radiogroup" accessibilityLabel="רקע אגף המורשת">
        <Swatch tone="dark" active={roomTheme === 'dark'} onPress={() => onRoomTheme('dark')} />
        <Swatch tone="light" active={roomTheme === 'light'} onPress={() => onRoomTheme('light')} />
      </View>

      <Pressable
        onPress={onHelp}
        accessibilityRole="button"
        accessibilityLabel="איך משחקים"
        style={styles.help}>
        <Text style={styles.helpMark}>?</Text>
      </Pressable>
    </View>
  );
}

// Four destinations is all the row fits at phone width. Sharing and
// installing moved onto the entrance hall, where there is room to name them.
const tabs = [
  {id: 'entrance', icon: '▤', label: 'הכניסה'},
  {id: 'gallery', icon: '▥', label: 'התערוכות'},
  {id: 'collection', icon: '▧', label: 'האוסף שלי'},
  {id: 'shop', icon: '⌂', label: 'חנות'},
];

export function BottomNav({active, count, onTab, bottomInset}) {
  return (
    <View style={[styles.nav, {paddingBottom: 7 + bottomInset}]}>
      {tabs.map(tab => {
        const on = active === tab.id;
        return (
          <Pressable
            key={tab.id}
            onPress={() => onTab(tab.id)}
            accessibilityRole="tab"
            accessibilityState={{selected: on}}
            style={styles.tab}>
            <View style={[styles.navIconBox, on && styles.navIconBoxOn]}>
              <Text style={[styles.navIcon, on && styles.tabLabelOn]}>{tab.icon}</Text>
            </View>
            <Text style={[styles.tabLabel, on && styles.tabLabelOn]} numberOfLines={1}>
              {tab.label}
            </Text>
            {tab.id === 'collection' ? (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{count}</Text>
              </View>
            ) : null}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 9,
    paddingHorizontal: 20,
    paddingBottom: 9,
    backgroundColor: colors.chrome,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  brand: {flexDirection: 'row-reverse', alignItems: 'center', gap: 11, flex: 1},
  brandIcon: {width: 32, height: 32, resizeMode: 'contain'},
  brandText: {flexShrink: 1},
  brandTitle: {
    ...serif,
    fontSize: 16,
    fontWeight: '500',
    color: colors.ink,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  brandSub: {
    fontSize: 8,
    letterSpacing: 1.2,
    color: '#747873',
    marginTop: 2,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  offline: {
    fontSize: 10,
    maxWidth: 76,
    color: '#8b5b30',
    backgroundColor: '#f5e7d6',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  swatches: {
    flexDirection: 'row-reverse',
    gap: 6,
    padding: 3,
    backgroundColor: colors.parchment,
    borderWidth: 1,
    borderColor: colors.parchmentLine,
    borderRadius: 20,
  },
  swatch: {width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: 'transparent'},
  swatchDark: {backgroundColor: '#71502f'},
  swatchLight: {backgroundColor: '#dcbb89'},
  swatchActive: {borderColor: colors.brass},
  help: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e6e8e3',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpMark: {fontSize: 18, color: '#737971'},
  nav: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingTop: 7,
    paddingHorizontal: 12,
    minHeight: 67,
    backgroundColor: colors.chrome,
    borderTopWidth: 1,
    borderTopColor: colors.parchmentLine,
  },
  tab: {flex: 1, alignItems: 'center', gap: 3, minHeight: 48, paddingHorizontal: 3},
  navIconBox: {
    width: 47,
    height: 26,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIconBoxOn: {backgroundColor: '#eddfc0'},
  navIcon: {fontSize: 22, lineHeight: 26, color: '#788174'},
  tabLabel: {fontSize: 12, color: '#788174', writingDirection: 'rtl'},
  tabLabelOn: {color: colors.primaryPressed},
  badge: {
    position: 'absolute',
    top: -2,
    right: 12,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: colors.chrome,
    backgroundColor: colors.count,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {fontSize: 9, color: colors.countInk},
});
