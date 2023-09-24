//@ts-nocheck
import * as React from 'react';

import { areEqual } from '../utils';

const j = 0;

export function useMemoByObjectVariables(a) {
  const _ref = React.useRef(j);
  const [state, setState] = React.useState(a);

  const _areEqual = !areEqual(a, state);
  if (_areEqual) {
    _ref.current += 1;
    setState(a);
  }

  const f = React.useMemo(
    function () {
      return a;
    },
    [_ref.current],
  );

  return React.useMemo(
    function () {
      return [f, _ref.current];
    },
    [f],
  );
}
