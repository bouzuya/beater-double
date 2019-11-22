type SpyFn = {
  calls: any[][];
};

const spyFn = <T extends Function>(f: T): SpyFn & T => {
  const calls: any[][] = [];
  const spy = (...args: any[]): any => {
    calls.push(args);
    return f.apply(null, args);
  };
  Object.defineProperty(spy, 'calls', { value: calls });
  return spy as any;
};

export { SpyFn, spyFn };
