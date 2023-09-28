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

  return (
    <CometAnimatedSprite
      accessibilityCaption={alt}
      frameCount={frameCount}
      frameRate={frameRate}
      framesPerCol={framesPerCol}
      framesPerRow={framesPerRow}
      spriteUri={uri}
      {...otherProps}
    />
  );
}
