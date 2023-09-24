//@ts-nocheck
import * as React from 'react';

import { cometAnimationStateReducer } from '../state/cometAnimationStateReducer';

export function useCometAnimationStateReducer(a) {
  const c = a.frameCount;
  const d = a.frameRate;
  const e = a.iterationLimit;
  a = React.useReducer(
    cometAnimationStateReducer.reducer,
    null,
    cometAnimationStateReducer.getInitialState,
  );
  const f = a[0];
  const g = a[1];
  const i = f.shouldAnimate && !f.hasAnimated;
  const j = d * c;
  return React.useMemo(
    function () {
      return {
        canAnimate: i,
        duration: j,
        nextAnimationIteration: function () {
          g({
            iterationLimit: e,
            type: 'NEXT_ITERATION',
          });
        },
        startAnimation: function () {
          g({
            type: 'START_ANIMATION',
          });
        },
      };
    },
    [i, j, e],
  );
}
