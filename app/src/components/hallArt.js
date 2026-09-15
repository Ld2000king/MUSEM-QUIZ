// אולם השלדים — the entrance hall.
//
// The hall the player walks into before choosing where to go: a whale hung
// from the rafters, a long-necked dinosaur on a plinth in the middle of the
// floor, and a mammoth in the corner. Original drawings, in the same flat
// style as the puzzle artwork, and lit by the same wood-and-brass palette as
// the gallery rooms so the two rooms read as one building.
//
// This file is the drawing on its own, with no React in it, so the tests can
// render it and check it.
import {colors} from '../theme.js';

// Bones repeat, so the shapes that repeat are generated rather than retyped.
// `t` runs 0 → 1 along the run, for tapering.
const along = (count, place) =>
  Array.from({length: count}, (_, i) => place(i, count === 1 ? 0 : i / (count - 1))).join('');

// A run of vertebrae along a line, tapering from thick to thin.
function spine(BONE, x1, y1, x2, y2, count, from, to) {
  return along(count, (i, t) => {
    const x = x1 + (x2 - x1) * t;
    const y = y1 + (y2 - y1) * t;
    const r = from + (to - from) * t;
    return `<rect x="${(x - r).toFixed(1)}" y="${(y - r * 1.3).toFixed(1)}" width="${(r * 2).toFixed(1)}" height="${(r * 2.6).toFixed(1)}" rx="${(r * 0.6).toFixed(1)}" fill="${BONE}"/>`;
  });
}

// The whale. A baleen whale is mostly skull: a long arched upper jaw with the
// lower jaw slung under it, then the ribs in the front half of the body and a
// tail that tapers away to the flukes. Two cables carry it.
function whale({BONE, BONE_SHADE, BONE_LINE}) {
  const ribs = along(
    8,
    (i, t) =>
      `<path fill="none" stroke="${BONE}" stroke-width="3" stroke-linecap="round" d="M${196 + i * 16} 110q${11 - t * 2} ${16 + Math.sin(t * Math.PI) * 14} ${2 - t * 9} ${30 + Math.sin(t * Math.PI) * 16}"/>`
  );
  return `
    <g>
      <path stroke="${colors.brass}" stroke-width="1.3" d="M214 40v62M338 40v56"/>

      <!-- braincase at the back, then the long rostrum, with the lower jaw
           hinged behind it so the mouth opens into a wedge -->
      <path fill="${BONE}" d="M168 84q24-2 32 11 5 13-5 21l-27-1z"/>
      <path fill="${BONE_SHADE}" d="M172 88q16-1 22 8-12-5-22-5z"/>
      <path fill="${BONE}" d="M50 94q64-16 120-7l5 10q-60-12-126 5z"/>
      <path fill="${BONE}" d="M178 116q-64-16-128-10l1 9q62-5 124 11z"/>
      <path fill="${BONE_SHADE}" d="M54 96q58-13 112-6-56-2-112 10z"/>
      <circle fill="${BONE_LINE}" cx="180" cy="97" r="2.4"/>

      <!-- spine and ribs -->
      ${spine(BONE, 196, 104, 352, 96, 11, 5.4, 3)}
      ${ribs}

      <!-- tail, tapering to the flukes -->
      ${spine(BONE, 358, 96, 414, 92, 6, 2.8, 1.5)}
      <path fill="${BONE}" d="M412 86q20-14 34-16-9 12-7 18 8 6 13 20-18-10-38-13z"/>
    </g>`;
}

// The sauropod: neck up and to the left, tail sweeping out to the right, all
// of it standing on a brass-edged plinth.
function dinosaur({BONE, BONE_SHADE, BONE_LINE}) {
  const ribs = along(
    7,
    (i, t) =>
      `<path fill="none" stroke="${BONE}" stroke-width="3.2" stroke-linecap="round" d="M${150 + i * 13} 216q${12 - t * 3} ${20 + t * 6} ${2 - t * 8} ${38 + t * 4}"/>`
  );
  const leg = (x, lean) =>
    `<path fill="none" stroke="${BONE}" stroke-width="7" stroke-linecap="round" d="M${x} 250q${lean} 22 ${lean * 1.4} 62"/>
     <path fill="${BONE}" d="M${x + lean * 1.4 - 9} 309h18l3 8h-24z"/>`;
  return `
    <g>
      <path fill="${colors.brass}" d="M82 312h206l6 14H76z"/>
      <path fill="${colors.brassLight}" d="M82 312h206l-4 5H86z"/>

      ${leg(156, 4)}
      ${leg(180, -3)}
      ${leg(230, 5)}
      ${leg(252, -4)}

      <!-- shoulder, back and hip -->
      <path fill="${BONE}" d="M142 206q52-12 106 2l-4 16q-50-12-100-2z"/>
      ${ribs}
      <path fill="${BONE}" d="M244 206q16 2 22 12-8 10-24 8z"/>
      <path fill="${BONE}" d="M140 206q-14 2-20 10 8 10 22 8z"/>

      <!-- neck, rising to the skull -->
      ${spine(BONE, 130, 202, 76, 134, 10, 6, 3.2)}
      <path fill="none" stroke="${BONE_SHADE}" stroke-width="1.4" d="M128 200q-34-30-52-66"/>
      <path fill="${BONE}" d="M76 138q-24-8-34 0 0 8 8 12l-2 8 14 3 4-8 12 3z"/>
      <path fill="${BONE_SHADE}" d="M48 146q10 3 20 2l-1 4q-11 1-20-2z"/>
      <circle fill="${BONE_LINE}" cx="60" cy="141" r="2.3"/>

      <!-- tail, held clear of the mammoth in the corner -->
      ${spine(BONE, 258, 212, 322, 250, 11, 5.2, 1.5)}
      <path fill="none" stroke="${BONE_SHADE}" stroke-width="1.4" d="M260 214q40 16 64 38"/>
    </g>`;
}

// The mammoth: the domed skull and the pair of curved tusks are what name it,
// so both are drawn as tapering solids rather than even strokes.
function mammoth({BONE, BONE_SHADE, BONE_LINE}) {
  const ribs = along(
    6,
    (i, t) =>
      `<path fill="none" stroke="${BONE}" stroke-width="3" stroke-linecap="round" d="M${400 + i * 11} 238q${9 - t * 2} ${17 + t * 5} ${1 - t * 6} ${32 + t * 4}"/>`
  );
  const leg = x =>
    `<path fill="none" stroke="${BONE}" stroke-width="6.5" stroke-linecap="round" d="M${x} 268q3 20 1 44"/>
     <path fill="${BONE}" d="M${x - 7} 309h16l3 7h-22z"/>`;
  return `
    <g>
      <path fill="${colors.brass}" d="M350 312h112l5 14H344z"/>
      <path fill="${colors.brassLight}" d="M350 312h112l-3 4h-106z"/>

      ${leg(402)}
      ${leg(420)}
      ${leg(442)}
      ${leg(458)}

      <!-- back and ribs -->
      <path fill="${BONE}" d="M392 228q46-8 74 6l-4 14q-40-12-72-4z"/>
      ${ribs}

      <!-- the high domed skull, tapering to the muzzle, joined to the back -->
      ${spine(BONE, 408, 232, 424, 231, 3, 4, 4.4)}
      <path fill="${BONE}" d="M366 216q3-19 20-20 19-1 23 18 3 14-2 22l-4 15q-2 9-11 9h-11q-9 0-11-9l-4-15q-4-8 0-20z"/>
      <path fill="${BONE_SHADE}" d="M372 214q14-9 24 2-12-4-24-2z"/>
      <ellipse fill="${BONE_LINE}" cx="374" cy="234" rx="4" ry="4.6"/>
      <path fill="${BONE_LINE}" d="M382 240q7-5 12 0l-3 11h-7z"/>

      <!-- tusks: down from the skull, then forward and up -->
      <path fill="${BONE}" d="M374 260q-28 14-32 40-2 17 14 22l3-8q-10-4-9-14 2-21 28-32z"/>
      <path fill="${BONE}" d="M388 262q-21 15-22 34-1 13 11 17l3-7q-7-3-7-11 1-16 20-27z"/>
      <path fill="${BONE_SHADE}" d="M375 264q-23 13-27 35 6-20 27-31z"/>
    </g>`;
}

export function hallXml(room, bone) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 340">
    <defs>
      <linearGradient id="hallWallL"><stop stop-color="${room.wall1}"/><stop offset="1" stop-color="${room.wall2}"/></linearGradient>
      <linearGradient id="hallWallR"><stop stop-color="${room.wall3}"/><stop offset="1" stop-color="${room.wall4}"/></linearGradient>
      <linearGradient id="hallFloor" x2="0" y2="1"><stop stop-color="${room.floor1}"/><stop offset="1" stop-color="${room.floor2}"/></linearGradient>
    </defs>

    <path fill="${room.base}" d="M0 0h480v340H0z"/>
    <path fill="${room.ceiling}" d="M0 0h480l-34 34H34z"/>
    <path fill="url(#hallWallL)" d="M0 0 34 34v250L0 340z"/>
    <path fill="url(#hallWallR)" d="M480 0l-34 34v250l34 56z"/>
    <path fill="url(#hallFloor)" d="M34 284h412l34 56H0z"/>
    <g fill="none" stroke="${room.grid}">
      <path d="M34 284h412M0 316h480M120 284 66 340M240 284v56M360 284l54 56"/>
    </g>

    <!-- skylights over the hall, and the brass rail under them -->
    <g fill="${room.glow}">
      <path d="M150 8h64l30 40h-124z"/>
      <path d="M272 8h64l30 40h-124z"/>
    </g>
    <path fill="${colors.brassLight}" d="M32 34h416v3H32z"/>

    <!-- the arch through to the exhibitions -->
    <path fill="${room.ceiling}" d="M196 176q44-42 88 0v108h-88z"/>
    <path fill="${colors.brass}" d="M192 178q48-46 96 0l-6 6q-42-40-84 0z"/>

    ${whale(bone)}
    ${dinosaur(bone)}
    ${mammoth(bone)}
  </svg>`;
}
