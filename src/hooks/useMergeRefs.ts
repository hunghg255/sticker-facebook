//@ts-nocheck
import * as React from 'react';

import { mergeRefs } from '../utils/mergeRefs';

export function useMergeRefs(...args: any[]) {
  const a = arguments.length;
  const c = new Array(a);
  for (let d = 0; d < a; d++) {
    c[d] = arguments[d];
  }
  return React.useMemo(function () {
    return mergeRefs.apply(void 0, c);
  }, [c].flat());
}
