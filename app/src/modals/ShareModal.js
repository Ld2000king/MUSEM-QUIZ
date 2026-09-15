// The fallback share sheet, shown when the device has no share dialog of its
// own. The link carries only exhibition ids and the numbers of solved rooms.
import React, {useState} from 'react';
import {Text, Pressable, StyleSheet, Linking} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import {Sheet, PrimaryButton, styles as ui} from '../components/ui.js';
import {colors} from '../theme.js';

export default function ShareModal({visible, onClose, share}) {
  const [status, setStatus] = useState('');
  if (!share) return null;

  const message = `${share.message} ${share.url}`;

  const open = async url => {
    setStatus('');
    try {
      await Linking.openURL(url);
    } catch {
      setStatus('לא הצלחנו לפתוח את האפליקציה. אפשר להעתיק את הקישור.');
    }
  };

  const copy = async () => {
    try {
      await Clipboard.setStringAsync(share.url);
      setStatus('הקישור הועתק. אפשר להדביק בכל שיחה.');
    } catch {
      setStatus('סמנו והעתיקו את הקישור מהשדה.');
    }
  };

  return (
    <Sheet
      visible={visible}
      onClose={() => {
        setStatus('');
        onClose();
      }}
      closeLabel="סגירת השיתוף"
      kicker="האוסף שלכם יוצא לעולם"
      title="שתף את המוזיאון עם חברים">
      <Text style={ui.paragraph}>
        הקישור מציג צילום מצב של האוסף שלכם. החברים יוכלו לצפות בו ולהתחיל אוסף משלהם.
      </Text>

      <Pressable
        onPress={() => open('https://wa.me/?text=' + encodeURIComponent(message))}
        accessibilityRole="link"
        style={styles.link}>
        <Text style={styles.linkText}>שיתוף בוואטסאפ</Text>
      </Pressable>
      <Pressable
        onPress={() => open('sms:?body=' + encodeURIComponent(message))}
        accessibilityRole="link"
        style={styles.link}>
        <Text style={styles.linkText}>שיתוף בהודעה</Text>
      </Pressable>

      <PrimaryButton label="העתקת קישור" onPress={copy} />

      <Text selectable style={styles.url}>
        {share.url}
      </Text>
      {status ? (
        <Text accessibilityLiveRegion="polite" style={styles.status}>
          {status}
        </Text>
      ) : null}
    </Sheet>
  );
}

const styles = StyleSheet.create({
  link: {
    padding: 13,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#d4dfd0',
    borderRadius: 12,
    backgroundColor: '#edf3e9',
  },
  linkText: {textAlign: 'center', fontSize: 16, color: '#396745', writingDirection: 'rtl'},
  url: {
    marginTop: 12,
    padding: 8,
    fontSize: 11,
    color: '#5b6c78',
    backgroundColor: '#f5f7f3',
    borderWidth: 1,
    borderColor: '#d8ded6',
    borderRadius: 8,
    writingDirection: 'ltr',
    textAlign: 'left',
  },
  status: {
    marginTop: 8,
    fontSize: 13,
    color: colors.success,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
});
