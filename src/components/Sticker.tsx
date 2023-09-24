//@ts-ignore
import { CometAnimatedSticker } from '@/components/CometAnimatedSticker';
import { CometAspectRatioContainer } from '@/components/CometAspectRatioContainer';
import * as React from 'react';

const styles = {
  root: {
    width: 58,
    height: 58,
  },
  sticker: {
    width: '100%',
    height: '100%',
  },
};

interface Props {
  frameCount: number;
  frameRate: number;
  framesPerCol: number;
  framesPerRow: number;
  spriteImg: string;
}

export const Sticker = (props: Props) => {
  const { frameCount, frameRate, framesPerCol, framesPerRow, spriteImg } = props;

  return (
    <div style={styles.root}>
      <CometAspectRatioContainer aspectRatio={1}>
        <CometAnimatedSticker
          //@ts-ignore
          animationTriggers={{
            hover: true,
            load: false,
          }}
          cursorEnabled={true}
          frameCount={frameCount}
          frameRate={frameRate}
          framesPerCol={framesPerCol}
          framesPerRow={framesPerRow}
          overlayEnabled={true}
          showFocusOverlay={true}
          showHoverOverlay={true}
          uri={spriteImg}
          style={styles.sticker}
        />
      </CometAspectRatioContainer>
    </div>
  );
};
