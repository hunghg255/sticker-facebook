//@ts-nocheck
import * as React from 'react';

import { useMergeRefs } from '../hooks/useMergeRefs';

const styles = {
  innerSprite: {
    animationDelay: '0s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationPlayState: 'running',
    animationTimingFunction: 'steps(1)',
    position: 'absolute',
    start: 0,
    top: 0,
  },
  spriteButton: {
    overflow: 'hidden',
    position: 'relative',
    ':active': {
      transform: 'none',
    },
  },
};

interface Props {
  accessibilityCaption?: string;
  animationStyle?: React.CSSProperties;
  containerRef?: any;
  cursorEnabled?: boolean;
  imgHeight?: number;
  imgWidth?: number;
  imgRef?: any;
  linkProps?: any;
  onHoverIn?: () => void;
  onPress?: () => void;
  overlayEnabled?: boolean;
  pressableRef?: any;
  showFocusOverlay?: boolean;
  src?: string;
  style?: React.CSSProperties;
  any;
}

export function CometSpriteBase(props: Props) {
  const {
    accessibilityCaption,
    animationStyle,
    containerRef,
    cursorEnabled = false,
    imgHeight,
    imgWidth,
    imgRef,
    linkProps,
    onHoverIn,
    onPress,
    overlayEnabled = false,
    pressableRef,
    showFocusOverlay = false,
    src,
    style,
  } = props;

  const _mergeRefs = useMergeRefs(pressableRef, containerRef);

  const styleImg = {
    ...Object.assign({
      height: imgHeight,
      width: imgWidth,
    }),
  };

  const animation = React.useMemo(() => {
    if (!animationStyle) return 'auto ease 0s 1 normal none running none';

    const { animationDuration, animationName, animation } = animationStyle();

    if (animation === 'none') return 'auto ease 0s 1 normal none running none';

    const {
      animationDelay,
      animationFillMode,
      animationIterationCount,
      animationPlayState,
      animationTimingFunction,
    } = styles.innerSprite;

    return `${animationName} ${animationDuration} ${animationTimingFunction} ${animationDelay} ${animationIterationCount} ${animationFillMode} ${animationPlayState}`;
  }, [animationStyle]);

  const { start, top } = styles.innerSprite;

  return (
    <div ref={_mergeRefs} onMouseOver={onHoverIn} style={{ ...style, ...styles.spriteButton }}>
      <img
        src={src}
        alt={accessibilityCaption}
        draggable={false}
        ref={imgRef}
        style={{
          ...styleImg,
          start,
          top,
          animation,
        }}
      />
    </div>
  );
}
