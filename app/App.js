// מקום למחשבה — the museum quiz, as a React Native app.
//
// One screen at a time inside a phone-width shell: the lobby, a gallery room,
// or the player's collection. Progress is per exhibition and lives on the
// device, under the same storage keys the original web build used.
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Share,
  Linking,
  StatusBar as RNStatusBar,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Header, BottomNav} from './src/components/Chrome.js';
import {Eyebrow, Sheet, PrimaryButton, styles as ui} from './src/components/ui.js';
import EntranceScreen from './src/screens/EntranceScreen.js';
import LobbyScreen from './src/screens/LobbyScreen.js';
import ShopScreen from './src/screens/ShopScreen.js';
import GalleryScreen from './src/screens/GalleryScreen.js';
import CollectionScreen from './src/screens/CollectionScreen.js';
import MapModal from './src/modals/MapModal.js';
import HelpModal from './src/modals/HelpModal.js';
import ShareModal from './src/modals/ShareModal.js';
import FriendModal from './src/modals/FriendModal.js';
import ArtZoomModal from './src/modals/ArtZoomModal.js';
import {exhibitions, WING_SIZE} from './src/data/exhibitions.js';
import {isAnswer, validProgress, makeShare, parseSharedMuseum} from './src/logic.js';
import {loadState, saveState, emptyState} from './src/storage.js';
import {watchInstallPrompt, promptInstall, canInstall, retireOldServiceWorker} from './src/install.js';
import {balance, rewardFor} from './src/coins.js';
import CoinPill from './src/components/CoinPill.js';
import {colors} from './src/theme.js';

const THEME_KEY = 'cityMuseum.roomTheme';

// Takes the shared snapshot back out of the address bar once it has been read.
function clearSharedHash() {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return;
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
}

export default function App() {
  const [state, setState] = useState(emptyState);
  const [ready, setReady] = useState(false);
  // entrance | lobby | gallery | collection | shop
  const [view, setView] = useState('entrance');
  const [exhibitionId, setExhibitionId] = useState('israel');
  const [current, setCurrent] = useState(0);
  const [solved, setSolved] = useState(() => new Set());
  const [collectionPage, setCollectionPage] = useState(0);

  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackTone, setFeedbackTone] = useState('');
  const [invalid, setInvalid] = useState(false);

  const [roomTheme, setRoomTheme] = useState('dark');
  const [modal, setModal] = useState(null); // map | help | share | friend | art | install
  const [zoomIndex, setZoomIndex] = useState(null);
  const [share, setShare] = useState(null);
  const [friend, setFriend] = useState(null);
  const [installText, setInstallText] = useState('');
  const [offline, setOffline] = useState(false);

  const exhibition = useMemo(
    () => exhibitions.find(item => item.id === exhibitionId) || exhibitions[0],
    [exhibitionId]
  );
  const level = exhibition.levels[current];
  const total = exhibition.levels.length;

  // --- loading -------------------------------------------------------------

  useEffect(() => {
    let live = true;
    (async () => {
      const stored = await loadState();
      let theme = 'dark';
      try {
        const saved = await AsyncStorage.getItem(THEME_KEY);
        if (saved === 'light' || saved === 'dark') theme = saved;
      } catch {}
      if (!live) return;
      setState(stored);
      setRoomTheme(theme);
      setExhibitionId(stored.active || 'israel');
      const progress = validProgress(stored, stored.active || 'israel');
      setSolved(new Set(progress.solved));
      setCurrent(progress.current);
      setReady(true);
    })();
    return () => {
      live = false;
    };
  }, []);

  useEffect(watchInstallPrompt, []);
  useEffect(retireOldServiceWorker, []);

  // The connection badge only means anything in a browser tab.
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;
    const update = () => setOffline(!window.navigator.onLine);
    update();
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, []);

  // --- saving --------------------------------------------------------------

  // Writing on every change is what the vanilla build's persist() did, and it
  // keeps a backgrounded app from losing the room the player is standing in.
  useEffect(() => {
    if (!ready) return;
    // Spread the stored state first so fields this screen does not manage —
    // `spent`, and whatever the shop adds when it opens — survive the write.
    const next = {
      ...state,
      version: 2,
      active: exhibitionId,
      categories: {...state.categories, [exhibitionId]: {solved: [...solved], current}},
    };
    setState(next);
    saveState(next).then(saved => {
      if (!saved) setFeedback(f => f + ' ההתקדמות תישמר רק עד סגירת העמוד.');
    });
    // `state` is deliberately not a dependency: this effect writes it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, exhibitionId, solved, current]);

  const applyRoomTheme = useCallback(next => {
    setRoomTheme(next);
    AsyncStorage.setItem(THEME_KEY, next).catch(() => {});
  }, []);

  // --- shared links --------------------------------------------------------

  const openSharedLink = useCallback(url => {
    if (!url) return;
    const hash = url.slice(url.indexOf('#'));
    const collection = url.includes('#') ? parseSharedMuseum(hash) : null;
    if (collection) {
      setFriend(collection);
      setModal('friend');
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    Linking.getInitialURL().then(openSharedLink);
    const sub = Linking.addEventListener('url', event => openSharedLink(event.url));
    // react-native-web reads the URL once at startup and never reports a
    // hash change, so on the web the browser event is the one that counts.
    let onHash;
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      onHash = () => openSharedLink(window.location.href);
      window.addEventListener('hashchange', onHash);
    }
    return () => {
      sub.remove();
      if (onHash) window.removeEventListener('hashchange', onHash);
    };
  }, [ready, openSharedLink]);

  // --- navigation ----------------------------------------------------------

  const go = useCallback(
    index => {
      setCurrent(Math.max(0, Math.min(total - 1, index)));
      setAnswer('');
      setFeedback('');
      setFeedbackTone('');
      setInvalid(false);
    },
    [total]
  );

  const enterExhibition = useCallback(
    id => {
      const progress = validProgress(state, id);
      setExhibitionId(id);
      setSolved(new Set(progress.solved));
      setCurrent(progress.current);
      setCollectionPage(0);
      setAnswer('');
      setFeedback('');
      setFeedbackTone('');
      setInvalid(false);
      setView('gallery');
    },
    [state]
  );

  const showLobby = useCallback(() => {
    setView('lobby');
    setModal(null);
  }, []);

  const showEntrance = useCallback(() => {
    setView('entrance');
    setModal(null);
  }, []);

  // "Carry on where I was" — the active exhibition, at the room it remembers.
  const resumePuzzle = useCallback(() => {
    setModal(null);
    setAnswer('');
    setFeedback('');
    setFeedbackTone('');
    setInvalid(false);
    setView('gallery');
  }, []);

  // --- playing -------------------------------------------------------------

  const submit = useCallback(() => {
    if (solved.has(current)) return;
    if (isAnswer(answer, level)) {
      const reward = rewardFor(exhibition, solved, current);
      const next = new Set(solved);
      next.add(current);
      setSolved(next);
      setAnswer('');
      setInvalid(false);
      setFeedbackTone('');
      // Phrased without a leading "+": in a right-to-left line the sign is
      // reordered to the far side of the number and reads as "5+".
      const earned = reward.reasons.length
        ? ` הרווחתם ${reward.coins} מטבעות — ${reward.reasons.join(', ')}.`
        : ` הרווחתם ${reward.coins} מטבעות.`;
      setFeedback(
        (next.size === total
          ? `איזה אוסף! גיליתם את כל ${total} המוצגים.`
          : `נכון, ${level.city}! המוצג נוסף לאוסף שלכם (${next.size}/${total}).`) + earned
      );
    } else {
      setFeedbackTone('error');
      setFeedback('עוד לא. נסו שוב או בקשו רמז מהאוצר.');
      setInvalid(true);
    }
  }, [answer, current, exhibition, level, solved, total]);

  const showHint = useCallback(() => {
    setFeedbackTone('');
    setFeedback(level.hint);
  }, [level]);

  const continueTour = useCallback(() => {
    if (solved.size === total) {
      setCollectionPage(Math.floor(current / WING_SIZE));
      setView('collection');
    } else if (current < total - 1) {
      go(current + 1);
    } else {
      go(exhibition.levels.findIndex((_, index) => !solved.has(index)));
    }
  }, [current, exhibition, go, solved, total]);

  // --- sharing -------------------------------------------------------------

  const shareMuseum = useCallback(async () => {
    const data = makeShare(state);
    if (Platform.OS === 'web') {
      const navigatorShare = globalThis.navigator?.share;
      if (navigatorShare) {
        try {
          await navigatorShare.call(globalThis.navigator, {
            title: data.title,
            text: data.message,
            url: data.url,
          });
          return;
        } catch (error) {
          if (error?.name === 'AbortError') return;
        }
      }
    } else {
      try {
        await Share.share({title: data.title, message: `${data.message} ${data.url}`, url: data.url});
        return;
      } catch {}
    }
    setShare(data);
    setModal('share');
  }, [state]);

  const openInstall = useCallback(async () => {
    const text = await promptInstall();
    if (text) {
      setInstallText(text);
      setModal('install');
    }
  }, []);

  const onTab = useCallback(
    tab => {
      if (tab === 'entrance') showEntrance();
      else if (tab === 'gallery') showLobby();
      else if (tab === 'collection') {
        setCollectionPage(Math.floor(current / WING_SIZE));
        setView('collection');
      } else if (tab === 'shop') {
        setModal(null);
        setView('shop');
      }
    },
    [current, showEntrance, showLobby]
  );

  // The wallet is derived, so it counts the room that was just solved even
  // before that Set has been written back into the saved state.
  const coins = useMemo(
    () => balance(state, {id: exhibitionId, solved}),
    [state, exhibitionId, solved]
  );

  const discoveredById = useMemo(() => {
    const counts = {};
    exhibitions.forEach(item => {
      counts[item.id] =
        item.id === exhibitionId ? solved.size : validProgress(state, item.id).solved.length;
    });
    return counts;
  }, [exhibitionId, solved, state]);

  const activeTab =
    view === 'collection' ? 'collection' : view === 'entrance' ? 'entrance' : view === 'shop' ? 'shop' : 'gallery';

  if (!ready) {
    return (
      <SafeAreaView style={styles.app}>
        <StatusBar style="dark" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="dark" />
      <View style={styles.shell}>
        <Header
          roomTheme={roomTheme}
          onRoomTheme={applyRoomTheme}
          onHelp={() => setModal('help')}
          onBrand={showEntrance}
          offline={offline}
        />

        <KeyboardAvoidingView
          style={styles.main}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          {view === 'gallery' || view === 'collection' ? (
            <View style={styles.intro}>
              <Eyebrow>● {exhibition.title} · VOL. 01</Eyebrow>
              <CoinPill count={coins} />
            </View>
          ) : null}

          {view === 'entrance' ? (
            <EntranceScreen
              roomTheme={roomTheme}
              coins={coins}
              exhibition={exhibition}
              current={current}
              solvedCount={solved.size}
              onEnterMuseum={showLobby}
              onResume={resumePuzzle}
              onShop={() => setView('shop')}
              onShare={shareMuseum}
              onInstall={openInstall}
              showInstall={canInstall()}
            />
          ) : view === 'shop' ? (
            <ShopScreen coins={coins} onBack={showEntrance} />
          ) : view === 'lobby' ? (
            <LobbyScreen
              discoveredById={discoveredById}
              onEnter={enterExhibition}
              onShare={shareMuseum}
            />
          ) : view === 'collection' ? (
            <CollectionScreen
              exhibition={exhibition}
              solved={solved}
              page={collectionPage}
              onPage={setCollectionPage}
              onOpen={index => {
                go(index);
                setView('gallery');
              }}
              onBack={() => setView('gallery')}
            />
          ) : (
            <GalleryScreen
              exhibition={exhibition}
              level={level}
              current={current}
              solved={solved}
              roomTheme={roomTheme}
              answer={answer}
              onAnswer={value => {
                setAnswer(value);
                setInvalid(false);
              }}
              onSubmit={submit}
              onHint={showHint}
              onContinue={continueTour}
              onGo={go}
              onOpenMap={() => setModal('map')}
              onZoom={index => {
                setZoomIndex(index);
                setModal('art');
              }}
              feedback={feedback}
              feedbackTone={feedbackTone}
              invalid={invalid}
            />
          )}
        </KeyboardAvoidingView>

        <BottomNav
          active={activeTab}
          count={solved.size}
          onTab={onTab}
          bottomInset={0}
        />
      </View>

      <MapModal
        visible={modal === 'map'}
        onClose={() => setModal(null)}
        exhibition={exhibition}
        current={current}
        solved={solved}
        onGo={index => {
          go(index);
          setModal(null);
        }}
      />
      <HelpModal visible={modal === 'help'} onClose={() => setModal(null)} />
      <ShareModal visible={modal === 'share'} onClose={() => setModal(null)} share={share} />
      <FriendModal
        visible={modal === 'friend'}
        onClose={() => {
          setModal(null);
          setFriend(null);
          clearSharedHash();
          showLobby();
        }}
        collection={friend}
      />
      <ArtZoomModal
        visible={modal === 'art'}
        onClose={() => setModal(null)}
        level={level}
        index={zoomIndex}
        current={current}
        solved={solved.has(current)}
      />
      <InstallSheet visible={modal === 'install'} onClose={() => setModal(null)} text={installText} />
    </SafeAreaView>
  );
}

function InstallSheet({visible, onClose, text}) {
  return (
    <Sheet visible={visible} onClose={onClose} kicker="המוזיאון, תמיד איתכם" title="מקום במסך הבית.">
      <Text style={ui.paragraph}>{text}</Text>
      <PrimaryButton label="הבנתי" onPress={onClose} />
    </Sheet>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.chrome,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
  shell: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    backgroundColor: colors.shell,
  },
  main: {flex: 1, minHeight: 0},
  intro: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: colors.shell,
  },
});
