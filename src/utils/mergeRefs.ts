//@ts-nocheck
export function mergeRefs(...args: any[]) {
  let a = arguments.length,
    c = new Array(a);
  for (let d = 0; d < a; d++) c[d] = arguments[d];
  return function (a) {
    c.forEach(function (c) {
      if (c == null) return;
      if (typeof c === 'function') {
        c(a);
        return;
      }
      if (typeof c === 'object') {
        c.current = a;
        return;
      }
      console.warn(
        'mergeRefs cannot handle Refs of type boolean, number or string, received ref ' + String(c),
        'comet_ui',
      );
    });
  };
}
