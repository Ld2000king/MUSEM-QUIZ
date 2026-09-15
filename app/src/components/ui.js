// Small shared pieces: the brass primary button, the section eyebrow, and a
// sheet that stands in for the <dialog> elements the web build used.
import React from 'react';
import {View, Text, Pressable, Modal, ScrollView, StyleSheet, Platform} from 'react-native';
import {colors, serif} from '../theme.js';

export function Eyebrow({children, style}) {
  return <Text style={[styles.eyebrow, style]}>{children}</Text>;
}

export function PrimaryButton({label, onPress, disabled, style, textStyle}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{disabled: !!disabled}}
      style={({pressed}) => [
        styles.primary,
        pressed && styles.primaryPressed,
        disabled && styles.disabled,
        style,
      ]}>
      <Text style={[styles.primaryText, textStyle]}>{label}</Text>
    </Pressable>
  );
}

export function Sheet({visible, onClose, children, title, kicker, closeLabel = 'סגירה', scroll = true}) {
  const Body = scroll ? ScrollView : View;
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} accessibilityLabel={closeLabel}>
        {/* The card swallows taps so only the backdrop closes the sheet. */}
        <Pressable style={styles.card} onPress={() => {}}>
          <Pressable
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel={closeLabel}
            style={styles.close}>
            <Text style={styles.closeText}>×</Text>
          </Pressable>
          <Body
            style={styles.body}
            contentContainerStyle={scroll ? styles.bodyContent : undefined}
            showsVerticalScrollIndicator={false}>
            {kicker ? <Eyebrow>{kicker}</Eyebrow> : null}
            {title ? <Text style={styles.title}>{title}</Text> : null}
            {children}
          </Body>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

export const styles = StyleSheet.create({
  eyebrow: {
    fontSize: 10,
    letterSpacing: 1.2,
    lineHeight: 15,
    color: colors.eyebrow,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  primary: {
    minHeight: 48,
    paddingVertical: 13,
    paddingHorizontal: 21,
    borderRadius: 13,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5a4119',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 3,
  },
  primaryPressed: {backgroundColor: colors.primaryPressed},
  disabled: {opacity: 0.28},
  primaryText: {color: '#fff', fontSize: 16, writingDirection: 'rtl'},
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(36,51,36,0.42)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    maxHeight: '88%',
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#edf0e8',
    paddingTop: 44,
    paddingBottom: 27,
    ...Platform.select({
      web: {boxShadow: '0 25px 90px rgba(16,36,18,0.13)'},
      default: {
        shadowColor: '#102412',
        shadowOffset: {width: 0, height: 25},
        shadowOpacity: 0.22,
        shadowRadius: 40,
        elevation: 12,
      },
    }),
  },
  body: {paddingHorizontal: 27},
  bodyContent: {paddingBottom: 4},
  close: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  closeText: {fontSize: 25, color: '#697362', lineHeight: 28},
  title: {
    ...serif,
    fontSize: 25,
    color: colors.primaryPressed,
    marginVertical: 16,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 26,
    color: '#63705e',
    marginBottom: 18,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
});
