// אולם השלדים — the entrance hall, drawn in hallArt.js and mounted here.
import React, {useMemo} from 'react';
import {SvgXml} from 'react-native-svg';
import {hallXml} from './hallArt.js';
import {rooms, bones} from '../theme.js';

function EntranceHall({theme, width, height}) {
  const xml = useMemo(
    () => hallXml(rooms[theme] || rooms.dark, bones[theme] || bones.dark),
    [theme]
  );
  return (
    <SvgXml
      xml={xml}
      width={width}
      height={height}
      preserveAspectRatio="xMidYMax slice"
      accessibilityRole="image"
      accessibilityLabel="אולם הכניסה של המוזיאון: שלד לווייתן תלוי מהתקרה, שלד דינוזאור ארוך צוואר במרכז, ושלד ממותה בפינה"
    />
  );
}

export default React.memo(EntranceHall);
