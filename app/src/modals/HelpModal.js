import React from 'react';
import {Text} from 'react-native';
import {Sheet, PrimaryButton, styles as ui} from '../components/ui.js';

export default function HelpModal({visible, onClose}) {
  return (
    <Sheet
      visible={visible}
      onClose={onClose}
      kicker="BENVENUTI · ברוכים הבאים"
      title="מתבוננים. מחברים. מגלים.">
      <Text style={ui.paragraph}>
        בכל מוצג מסתתרת עיר, זמר או ספורטאי — לפי התערוכה שבחרתם. בחידות מילים חברו את הרמזים מימין
        לשמאל. בחידות זיהוי מקום חפשו עיר ששתי היצירות מאפיינות. אפשר להיעזר באוצר גם במשחקי אותיות
        ושמות.
      </Text>
      <Text style={ui.paragraph}>
        הקישו על תמונה כדי להגדיל אותה למלוא המסך ולראות כל פרט. אפשר להחליק בין המוצגים, להיעזר
        ברמז מהאוצר ולחזור לחידה בהמשך. כל חידה שפתרתם תתווסף לאוסף שלכם ותישמר במכשיר הזה.
      </Text>
      <PrimaryButton label="נכנסים לגלריה ←" onPress={onClose} />
    </Sheet>
  );
}
