// מטבעות המוזיאון — the museum's coins.
//
// The balance is derived from the collection rather than stored as a running
// total: every solved room is worth the same, so the wallet can always be
// recomputed from progress. That means it cannot drift out of step with the
// collection, and it survives a save written by the older vanilla build,
// which knows nothing about coins. Only what has been spent is stored.
import {exhibitions, WING_SIZE} from './data/exhibitions.js';
import {validProgress} from './logic.js';

export const PER_EXHIBIT = 5;
export const PER_WING = 25;
export const PER_EXHIBITION = 100;

// Ten rooms make a wing, so a wing is complete when all ten are solved.
function completedWings(exhibition, solved) {
  const wings = Math.ceil(exhibition.levels.length / WING_SIZE);
  let done = 0;
  for (let wing = 0; wing < wings; wing++) {
    const start = wing * WING_SIZE;
    const size = Math.min(WING_SIZE, exhibition.levels.length - start);
    let found = 0;
    for (let index = start; index < start + size; index++) if (solved.has(index)) found++;
    if (found === size) done++;
  }
  return done;
}

// What one exhibition is worth at the given state of discovery.
export function earnedIn(exhibition, solved) {
  const complete = solved.size === exhibition.levels.length;
  return (
    solved.size * PER_EXHIBIT +
    completedWings(exhibition, solved) * PER_WING +
    (complete ? PER_EXHIBITION : 0)
  );
}

// Everything the player has earned across the whole museum.
export function earnedTotal(state, live) {
  return exhibitions.reduce((sum, exhibition) => {
    const solved =
      live && live.id === exhibition.id
        ? live.solved
        : new Set(validProgress(state, exhibition.id).solved);
    return sum + earnedIn(exhibition, solved);
  }, 0);
}

export function spent(state) {
  const value = state?.spent;
  return Number.isInteger(value) && value > 0 ? value : 0;
}

// What the player can actually spend. `live` lets the screen count the room
// that was just solved before that Set has been written back to the state.
export function balance(state, live) {
  return Math.max(0, earnedTotal(state, live) - spent(state));
}

// The most coins the museum will ever hand out — what the shop is priced against.
export const TOTAL_AVAILABLE = exhibitions.reduce(
  (sum, exhibition) =>
    sum + earnedIn(exhibition, new Set(exhibition.levels.map((_, index) => index))),
  0
);

// What solving `index` just paid, and why — so the room can say so out loud.
export function rewardFor(exhibition, before, index) {
  if (before.has(index)) return {coins: 0, reasons: []};
  const after = new Set(before);
  after.add(index);
  const coins = earnedIn(exhibition, after) - earnedIn(exhibition, before);
  const reasons = [];
  if (after.size === exhibition.levels.length) reasons.push('התערוכה הושלמה');
  else if (completedWings(exhibition, after) > completedWings(exhibition, before)) {
    reasons.push('אגף שלם');
  }
  return {coins, reasons};
}
