// The exhibits are SVG path strings, exactly as the illustrator wrote them.
// SvgXml renders that markup natively, so the drawings port over untouched.
import React, {useMemo} from 'react';
import {SvgXml} from 'react-native-svg';
import {drawings, artName} from '../data/exhibitions.js';
import {colors} from '../theme.js';

// Sculptures stand free, without paper behind them.
export const isSculpture = key => key === 'head';

function Artwork({artKey, width, height, style}) {
  const xml = useMemo(() => {
    const paper = isSculpture(artKey) ? '' : `<path fill="${colors.artPaper}" d="M0 0H260V310H0Z"/>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 310">${paper}${drawings[artKey] || ''}</svg>`;
  }, [artKey]);

  return (
    <SvgXml
      xml={xml}
      width={width}
      height={height}
      style={style}
      accessibilityRole="image"
      accessibilityLabel={artName(artKey)}
    />
  );
}

export default React.memo(Artwork);
