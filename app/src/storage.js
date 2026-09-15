// Progress lives under the same keys the vanilla build used. On web
// AsyncStorage is backed by window.localStorage with the raw key, so a player
// who already has a collection keeps it when the app replaces the old page.
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'cityMuseum.v2';
const LEGACY_KEY = 'cityMuseum.v1';

export const emptyState = {version: 2, active: 'israel', categories: {}};

export async function loadState() {
  let state = {...emptyState, categories: {}};
  try {
    const stored = JSON.parse((await AsyncStorage.getItem(KEY)) || '{}');
    if (stored && stored.version === 2 && stored.categories && typeof stored.categories === 'object') {
      state = stored;
    }
  } catch {}
  if (!state.categories.israel) {
    try {
      state.categories.israel = JSON.parse((await AsyncStorage.getItem(LEGACY_KEY)) || '{}') || {};
    } catch {
      state.categories.israel = {};
    }
  }
  return state;
}

export async function saveState(state) {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(state));
    if (state.categories.israel) {
      await AsyncStorage.setItem(LEGACY_KEY, JSON.stringify(state.categories.israel));
    }
    return true;
  } catch {
    return false;
  }
}
