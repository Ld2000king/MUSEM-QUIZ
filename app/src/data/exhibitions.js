// The museum catalogue, assembled the same way the original game.js did it:
// the six hand-drawn city puzzles first, then the 44 extra rooms, then the
// three later exhibitions.
import {baseDrawings, originalLabels, baseLevels} from './baseExhibits.js';
import {artLabels, extraDrawings, extraLevels} from './extraExhibits.js';
import {newExhibitions} from './extraCategories.js';

export const drawings = {...baseDrawings, ...extraDrawings};

const israelLevels = [...baseLevels, ...extraLevels];

export const WING_SIZE = 10;
export const wings = ['אגף הגילוי', 'אגף האור', 'אגף המילים', 'אגף השמות', 'אגף הנופים'];

export const exhibitions = [
  {
    id: 'israel',
    title: 'ערים בישראל',
    subtitle: 'המקומות שלנו, מזווית חדשה',
    icon: 'house',
    tone: 'sand',
    subject: 'עיר',
    question: 'איזו עיר בישראל גיליתם?',
    levels: israelLevels,
  },
  ...newExhibitions,
];

export function artName(key) {
  return artLabels[key] || originalLabels[key] || '';
}

export function kindLabel(kind) {
  if (kind === 'place') return 'זיהוי מקום';
  if (kind === 'identity') return 'זיהוי לפי רמזים';
  return 'חידת מילים';
}

export function wingLabel(exhibition, index) {
  return exhibition.levels.length <= WING_SIZE ? exhibition.title : wings[index];
}
