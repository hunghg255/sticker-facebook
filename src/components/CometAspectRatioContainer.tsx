//@ts-nocheck
import * as React from 'react';

let i = {
  container: {
    height: 0,
    position: 'relative',
    width: '100%',
  },
  content: {
    alignItems: 'stretch',
    borderStyle: 'solid',
    borderWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    zIndex: 0,
    bottom: 0,
    boxSizing: 'border-box',
    right: 0,
    position: 'absolute',
    left: 0,
    top: 0,
  },
};

// SHARE version
export function CometAspectRatioContainer(a) {
  var c = a.aspectRatio,
    d = a.children,
    e = a.style;

  if (c <= 0) throw new Error('Aspect ratio must be a non-zero, positive number: ' + c);

  return (
    <div
      style={{
        ...i.container,
        ...Object.assign({}, e, {
          paddingTop: 100 / c + '%',
        }),
      }}
      data-testid={undefined}
    >
      {d != null && <div style={{ ...i.content }}>{d}</div>}
    </div>
  );
}
