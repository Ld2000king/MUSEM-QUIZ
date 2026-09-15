// The heritage skin — wood, brass and glass — as plain JS tokens.
// The room's wall and floor are the only colours the player can toggle
// (the two swatches in the header); everything else stays constant.

export const rooms = {
  dark: {
    base: '#4d341f',
    ceiling: '#4a3320',
    wall1: '#5c3f29',
    wall2: '#8a6038',
    wall3: '#8a6038',
    wall4: '#5c3f29',
    floor1: '#8f5f3b',
    floor2: '#c99a63',
    cornice: '#3a2717',
    fixture: '#3a2717',
    grid: 'rgba(255,230,190,0.22)',
    glow: 'rgba(255,242,208,0.55)',
  },
  light: {
    base: '#e8d2ab',
    ceiling: '#e0c89a',
    wall1: '#b98a52',
    wall2: '#e8ce9e',
    wall3: '#e8ce9e',
    wall4: '#b98a52',
    floor1: '#c9a15f',
    floor2: '#f0dcb4',
    cornice: '#3a2717',
    fixture: '#3a2717',
    grid: 'rgba(255,230,190,0.22)',
    glow: 'rgba(255,242,208,0.55)',
  },
};

export const colors = {
  brass: '#8a6435',
  brassLight: '#d9ac66',
  shell: '#fffdf9',
  chrome: '#f8f3e6',
  parchment: '#f0e6cd',
  parchmentLine: '#cbb27a',
  label: '#f5ecd6',
  mat: '#f6efdd',
  matLine: '#e8dcc0',
  artPaper: '#e8e6d5',
  ink: '#3a2e1f',
  inkSoft: '#5c4126',
  inkFaint: '#6e5636',
  eyebrow: '#8a6a44',
  muted: '#777465',
  primary: '#7a5230',
  primaryPressed: '#5c3f22',
  hint: '#a05a2e',
  field: '#fffdf6',
  fieldLine: '#dcc9a0',
  focus: '#b98a52',
  error: '#a54237',
  success: '#3f6545',
  line: '#e9e5dc',
  count: '#f2d6bc',
  countInk: '#944520',
  solved: '#3f826d',
  current: '#c96843',
  dot: '#c9c6b9',
};

// The wing accent rotates every ten rooms, as `.gallery-room[data-wing]` did.
export const wingColors = ['#a9782e', '#397361', '#bb593e'];

export function wingColor(wing) {
  return wingColors[wing % wingColors.length];
}

// Lobby card tones, from categories.css.
export const cardTones = {
  sand: {background: '#f1ede4', border: '#e4ded0'},
  blue: {background: '#eaf0f6', border: '#d6e1ec'},
  rose: {background: '#f4e8e7', border: '#e8d6d5'},
  green: {background: '#eaf0e5', border: '#d7e0d1'},
};

export function cardTone(tone) {
  return cardTones[tone] || cardTones.sand;
}

// 'Frank Ruhl Libre' is a web font the original loaded from Google Fonts. It
// is not bundled here, so headings fall back to the platform serif, which
// covers Hebrew on both iOS and Android.
export const serif = {
  fontFamily: process.env.EXPO_OS === 'ios' ? 'Georgia' : 'serif',
};

export const radius = {sm: 5, md: 8, card: 14, panel: 23, pill: 20};
