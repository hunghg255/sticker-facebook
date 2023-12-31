//@ts-nocheck
import { useLayoutEffect } from 'react';

import { useInvalidNumberThrowsViolation } from './useInvalidNumberThrowsViolation';
import { CometStyleXSheet } from '@/utils/stylex-theme';

CometStyleXSheet.injectTheme();

// This is used for stylex inject priority
const INJECT_PRIORITY = 0;

function getAnimationName(frameCount: number, framesPerCol: number, framesPerRow: number) {
  return '__DYNAMIC__CometAnimatedSprite_' + frameCount + '_' + framesPerCol + '_' + framesPerRow;
}

function buildCssAnimationString(props: any) {
  const { frameCount, framesPerCol, framesPerRow, step } = props;

  const _c = (step / frameCount) * 100;
  const _f = ((step % framesPerRow) / framesPerRow) * 100;
  const _a = (Math.floor(step / framesPerRow) / framesPerCol) * 100;
  const _e =
    Number.isNaN(_f) ||
    Number.isNaN(_a) ||
    Number.isNaN(_c) ||
    !Number.isFinite(_f) ||
    !Number.isFinite(_a) ||
    !Number.isFinite(_c);
  if (_e === !0) {
    throw new Error('Invalid animation input provided');
  }
  return _c + '% { transform: translate(-' + _f + '%, -' + _a + '%); }';
}

const inject = function (a, c, d = null) {
  CometStyleXSheet.insert(a, c, d);
};

function getAnimationStylex(name: string, c, d, e) {
  const f = [];
  if (!Number.isFinite(c) || Number.isNaN(c)) {
    throw new TypeError('Invalid framecount');
  }
  for (let g = 0; g < c; g++) {
    f.push(
      buildCssAnimationString({
        frameCount: c,
        framesPerCol: d,
        framesPerRow: e,
        step: g,
      }),
    );
  }
  if (f.length <= 0) {
    throw new Error('There were no animation frames to create an animation');
  }
  return '\n  @keyframes ' + name + ' {\n    ' + f.join('\n  ') + '\n  }\n';
}

export function useSpriteAnimation(frameCount: number, framesPerCol: number, framesPerRow: number) {
  useInvalidNumberThrowsViolation(frameCount);
  useInvalidNumberThrowsViolation(framesPerCol);
  useInvalidNumberThrowsViolation(framesPerRow);

  const _animationName = getAnimationName(frameCount, framesPerCol, framesPerRow);

  useLayoutEffect(
    function () {
      inject(
        getAnimationStylex(_animationName, frameCount, framesPerCol, framesPerRow),
        INJECT_PRIORITY,
      );
    },
    [_animationName, frameCount, framesPerCol, framesPerRow],
  );
  return _animationName;
}
