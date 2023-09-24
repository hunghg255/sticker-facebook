//@ts-nocheck
import * as React from 'react';

import { CometAnimatedSprite } from './CometAnimatedSprite';

interface Props {
  alt?: string;
  frameCount: number;
  frameRate: number;
  framesPerCol: number;
  framesPerRow: number;
  uri: string;
}

export function CometAnimatedSticker(props: Props) {
  const { alt, frameCount, frameRate, framesPerCol, framesPerRow, uri, ...otherProps } = props;

  return React.createElement(
    CometAnimatedSprite,
    Object.assign({}, otherProps, {
      accessibilityCaption: alt,
      frameCount,
      frameRate,
      framesPerCol,
      framesPerRow,
      spriteUri: uri,
    }),
  );
}
