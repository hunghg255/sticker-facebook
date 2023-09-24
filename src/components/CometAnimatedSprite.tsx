//@ts-nocheck
import * as React from 'react';

// NOTE: this is not available for SHARE version
// import {useVisibilityObserver} from '@ladifire-internal-ui/observer-intersection';

import { CometSpriteBase } from '@/components/CometSpriteBase';
import { useCometAnimationTrigger } from '@/hooks/useCometAnimationTrigger';
import { useInvalidNumberThrowsViolation } from '@/hooks/useInvalidNumberThrowsViolation';

import { useSpriteAnimation } from '../hooks/useSpriteAnimation';

interface Props {
  animationTriggers?: any;
  frameCount: number;
  frameRate: number;
  framesPerCol: number;
  framesPerRow: number;
  repeatNumber?: number;
  spriteUri: string;
}

export function CometAnimatedSprite(props: Props) {
  const {
    animationTriggers,
    frameCount,
    frameRate,
    framesPerCol,
    framesPerRow,
    repeatNumber = 3,
    spriteUri,
    ...otherProps
  } = props;

  let k = React.useState(undefined);
  const l: any = k[0];
  k = k[1];

  let c = useCometAnimationTrigger({
    animationTriggers,
    frameCount,
    frameRate,
    iterationLimit: repeatNumber,
  });

  const m = c.duration;
  const n = c.getShouldAnimate;
  const e = c.onHoverIn;
  const i = c.onLoad;
  const o = c.onNextAnimationIteration;
  const p = useSpriteAnimation(frameCount, framesPerCol, framesPerRow);
  c = useInvalidNumberThrowsViolation(framesPerCol * 100);
  const d = useInvalidNumberThrowsViolation(framesPerRow * 100);

  // NOTE: This is not available for SHARE version
  // f = useVisibilityObserver({
  //     onVisible: i
  // });

  React.useEffect(() => {
    const a = l;
    if (a != undefined) {
      a.addEventListener('animationiteration', o);
      return function () {
        a.removeEventListener('animationiteration', o);
      };
    }
  }, [l, o]);

  return React.createElement(
    CometSpriteBase,
    Object.assign({}, otherProps, {
      animationStyle: function (a) {
        return n(a)
          ? {
              animationDuration: m + 'ms',
              animationName: p,
            }
          : {
              animation: 'none',
            };
      },
      // containerRef: f, // NOTE: not available for SHARE version
      imgHeight: c + '%',
      imgRef: k,
      imgWidth: d + '%',
      onHoverIn: e,
      src: spriteUri,
    }),
  );
}
