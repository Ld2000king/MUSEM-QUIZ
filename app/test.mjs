// Checks the puzzle content and the game rules — the parts that do not need a
// renderer. Run with `npm test` from app/.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {exhibitions, drawings, artName, kindLabel, wingLabel, WING_SIZE} from './src/data/exhibitions.js';
import {normalize, isAnswer, validProgress, makeShare, parseSharedMuseum} from './src/logic.js';

const israel = exhibitions.find(item => item.id === 'israel');

// --- content -----------------------------------------------------------------

assert.equal(exhibitions.length, 4);
assert.equal(israel.levels.length, 50);
assert.equal(
  exhibitions.reduce((sum, item) => sum + item.levels.length, 0),
  80
);
assert.deepEqual(
  israel.levels.slice(0, 6).map(level => level.city),
  ['בית שמש', 'ראש העין', 'באר שבע', 'רמת גן', 'בת ים', 'תל אביב']
);

for (const exhibition of exhibitions) {
  const names = new Set(exhibition.levels.map(level => normalize(level.city)));
  assert.equal(names.size, exhibition.levels.length, `${exhibition.id}: every answer is unique`);
  assert.ok(drawings[exhibition.icon], `${exhibition.id}: lobby icon exists`);

  exhibition.levels.forEach((level, index) => {
    const where = `${exhibition.id}/${index + 1}`;
    assert.equal(level.art.length, 2, `${where}: two artworks`);
    for (const key of level.art) {
      assert.ok(drawings[key], `${where}: artwork "${key}" is drawn`);
      assert.ok(artName(key), `${where}: artwork "${key}" has a label`);
    }
    assert.ok(level.hint.length > 15, `${where}: has a real hint`);
    assert.ok(level.explain.length > 8, `${where}: explains the answer`);
    assert.ok(['word', 'place', 'identity'].includes(level.kind || 'word'), `${where}: known kind`);
    assert.ok(kindLabel(level.kind).length > 3);

    assert.ok(isAnswer(level.city, level), `${where}: accepts its own answer`);
    assert.ok(!isAnswer('אין עיר כזאת', level), `${where}: rejects a wrong answer`);
  });
}

// Every wing of every exhibition is named and exactly ten rooms wide.
for (const exhibition of exhibitions) {
  const wings = Math.ceil(exhibition.levels.length / WING_SIZE);
  for (let wing = 0; wing < wings; wing++) {
    assert.ok(wingLabel(exhibition, wing), `${exhibition.id}: wing ${wing} is named`);
  }
}

console.log('PASS: 4 exhibitions, 80 puzzles, every artwork drawn and labelled, every answer accepted.');

// --- spelling variants -------------------------------------------------------

assert.ok(isAnswer('קריית שמונה', israel.levels[13]));
assert.ok(isAnswer('פתח תקוה', israel.levels[18]));
assert.ok(isAnswer('תל אביב-יפו', israel.levels[5]));
assert.ok(isAnswer('תל אביב יפו', israel.levels[5]));
assert.ok(isAnswer('NEW YORK', exhibitions.find(item => item.id === 'usa').levels[0]));
assert.equal(normalize('ראש  העין'), normalize('ראשהעין'));
assert.equal(normalize('קריית גת'), normalize('קרית גת'));

console.log('PASS: spelling variants, final letters and English aliases.');

// --- saved progress ----------------------------------------------------------

const state = {version: 2, active: 'israel', categories: {israel: {solved: [0, 1], current: 2}}};
assert.deepEqual(validProgress(state, 'israel'), {solved: [0, 1], current: 2});
// Unknown exhibitions start empty rather than inheriting anything.
assert.deepEqual(validProgress(state, 'usa'), {solved: [], current: 0});
// Out-of-range and repeated entries in a stored record are discarded.
assert.deepEqual(
  validProgress({categories: {usa: {solved: [0, 0, 9, 10, -1, 'x'], current: 99}}}, 'usa'),
  {solved: [0, 9], current: 0}
);
assert.deepEqual(validProgress({}, 'israel'), {solved: [], current: 0});
assert.deepEqual(validProgress({categories: {israel: 'broken'}}, 'israel'), {solved: [], current: 0});

console.log('PASS: saved progress is bounded, de-duplicated and safe when corrupt.');

// --- sharing -----------------------------------------------------------------

const full = {
  version: 2,
  active: 'israel',
  categories: {israel: {solved: [0, 1, 2], current: 3}, usa: {solved: [4], current: 4}},
};
const share = makeShare(full);
assert.ok(share.url.startsWith('https://ld2000king.github.io/MUSEM-QUIZ/#museum='));
assert.equal(share.total, 4);

const hash = share.url.slice(share.url.indexOf('#'));
const parsed = parseSharedMuseum(hash);
assert.equal(parsed.reduce((sum, item) => sum + item.solved.length, 0), 4);
assert.deepEqual(
  parsed.map(item => item.category.id),
  ['israel', 'usa']
);
// The snapshot only ever resolves to local titles.
assert.deepEqual(parsed[1].solved.map(index => parsed[1].category.levels[index].city), [
  exhibitions.find(item => item.id === 'usa').levels[4].city,
]);

const b64 = value => Buffer.from(JSON.stringify(value)).toString('base64');
for (const bad of [
  '#museum=oops',
  '#museum=' + b64({v: 1, c: [{id: 'usa', s: [99]}]}),
  '#museum=' + b64({v: 1, c: [{id: 'bad', s: [0]}]}),
  '#museum=' + b64({v: 2, c: []}),
  '#museum=' + b64({v: 1, c: [{id: 'usa', s: [0]}, {id: 'usa', s: [1]}]}),
  '#nothing',
  '',
]) {
  assert.equal(parseSharedMuseum(bad), null, `rejects ${bad.slice(0, 24)}`);
}

console.log('PASS: share snapshots round-trip, and malformed links are refused.');

// --- the data modules are still the originals --------------------------------
// While the vanilla build under the repo root is still being served, the app's
// copies must not drift from it. Each copy is the original file plus the one
// import line and the one export line that make it a module.
const here = dirname(fileURLToPath(import.meta.url));
const read = path => readFileSync(join(here, path), 'utf8');

const copies = [
  ['../levels.js', 'src/data/extraExhibits.js'],
  ['../categories.js', 'src/data/extraCategories.js'],
];

for (const [original, copy] of copies) {
  const body = read(copy)
    .split('\n')
    .filter(line => !line.startsWith('import {') && !line.startsWith('export {'))
    .join('\n')
    .trim();
  assert.equal(body, read(original).trim(), `${copy} has drifted from ${original}`);
}

console.log('PASS: the app’s puzzle data still matches the files the web build serves.');
