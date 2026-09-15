// Answer matching, progress validation and share encoding — the parts of the
// original game.js and sharing.js that never touched the DOM.
import {exhibitions} from './data/exhibitions.js';

export function normalize(value) {
  return value
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[\s\-־׳״'"֑-ׇ]/g, '')
    .replace(/^קריית/, 'קרית')
    .replace(/תקוה/g, 'תקווה')
    .replace(/[ךםןףץ]/g, c => ({ך: 'כ', ם: 'מ', ן: 'נ', ף: 'פ', ץ: 'צ'}[c]));
}

export function isAnswer(value, level) {
  const aliases = level.city === 'תל אביב' ? ['תל אביב יפו'] : [];
  return [level.city, ...aliases, ...(level.aliases || [])].some(
    answer => normalize(value) === normalize(answer)
  );
}

// A stored record is only trusted as far as it points at rooms that exist.
export function validProgress(state, id) {
  const collection = exhibitions.find(item => item.id === id);
  const record = (state.categories && state.categories[id]) || {};
  return {
    solved: Array.isArray(record.solved)
      ? [...new Set(record.solved.filter(n => Number.isInteger(n) && n >= 0 && n < collection.levels.length))]
      : [],
    current:
      Number.isInteger(record.current) && record.current >= 0 && record.current < collection.levels.length
        ? record.current
        : 0,
  };
}

export const SHARE_BASE = 'https://ld2000king.github.io/MUSEM-QUIZ/';

function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  bytes.forEach(byte => {
    binary += String.fromCharCode(byte);
  });
  return globalThis.btoa(binary);
}

function decodeBase64(text) {
  const binary = globalThis.atob(text);
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function makeShare(state) {
  const snapshot = {
    v: 1,
    c: exhibitions
      .map(item => ({id: item.id, s: validProgress(state, item.id).solved}))
      .filter(item => item.s.length),
  };
  const total = snapshot.c.reduce((sum, item) => sum + item.s.length, 0);
  return {
    title: 'המוזיאון שלי — מקום למחשבה',
    message: `כבר גיליתי ${total} מוצגים במוזיאון שלי! בואו לראות את האוסף ולגלות ערים, זמרים וספורטאים.`,
    url: SHARE_BASE + '#museum=' + encodeBase64(JSON.stringify(snapshot)),
    total,
  };
}

// Only ever resolves to local titles behind indices we have validated, so a
// crafted link cannot put text of its own on the screen.
export function parseSharedMuseum(hash) {
  if (!hash || !hash.startsWith('#museum=') || hash.length > 6000) return null;
  try {
    const snapshot = JSON.parse(decodeBase64(hash.slice(8)));
    if (snapshot.v !== 1 || !Array.isArray(snapshot.c) || snapshot.c.length > exhibitions.length) return null;
    const used = new Set();
    return snapshot.c.map(entry => {
      const category = exhibitions.find(item => item.id === entry.id);
      if (!category || used.has(entry.id) || !Array.isArray(entry.s) || entry.s.length > category.levels.length) {
        throw Error('Invalid collection');
      }
      used.add(entry.id);
      if (entry.s.some(index => !Number.isInteger(index) || index < 0 || index >= category.levels.length)) {
        throw Error('Invalid exhibit');
      }
      return {category, solved: [...new Set(entry.s)]};
    });
  } catch {
    return null;
  }
}
