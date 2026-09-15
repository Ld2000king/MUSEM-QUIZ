// The moment a puzzle is solved.
//
// Everything here is a pulse away from the resting look and back to it, so a
// room that was solved earlier renders exactly as it always did — only the
// room being solved right now moves.
import {useEffect, useRef, useState} from 'react';
import {AccessibilityInfo, Animated, Easing, Platform} from 'react-native';

// Transform and opacity can run off the JS thread natively; react-native-web
// has no native driver, so asking for one there is meaningless.
const useNative = Platform.OS !== 'web';

// The vanilla build honoured prefers-reduced-motion, so this one does too.
export function useReduceMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    let live = true;
    AccessibilityInfo.isReduceMotionEnabled?.()
      .then(value => {
        if (live) setReduce(!!value);
      })
      .catch(() => {});
    const sub = AccessibilityInfo.addEventListener?.('reduceMotionChanged', value =>
      setReduce(!!value)
    );
    return () => {
      live = false;
      sub?.remove?.();
    };
  }, []);
  return reduce;
}

// Runs 0 → 1 once per new `token`. `active` is true only while it runs, so the
// pieces that only exist during the celebration can mount and unmount with it.
// With reduced motion on, nothing runs and nothing mounts: the answer, the
// coins and the plaque still update, just without the flourish.
export function useCelebration(token, duration = 900) {
  const progress = useRef(new Animated.Value(0)).current;
  const [active, setActive] = useState(false);
  const reduce = useReduceMotion();

  useEffect(() => {
    if (!token || reduce) return undefined;
    progress.setValue(0);
    setActive(true);
    const run = Animated.timing(progress, {
      toValue: 1,
      duration,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: useNative,
    });
    run.start(({finished}) => {
      if (finished) setActive(false);
    });
    return () => {
      run.stop();
      setActive(false);
    };
  }, [token, reduce, duration, progress]);

  return [progress, active];
}

// A quick swell and settle — the shape most of these effects want.
export function pulse(progress, peak, at = 0.32) {
  return progress.interpolate({
    inputRange: [0, at, 1],
    outputRange: [1, peak, 1],
  });
}

// In and back out, for things that only show mid-celebration.
export function flash(progress, peak = 1, at = 0.3) {
  return progress.interpolate({
    inputRange: [0, at, 1],
    outputRange: [0, peak, 0],
  });
}
