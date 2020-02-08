type SpyFn = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  calls: any[][];
};

const spyFn = <T extends Function>(f: T): SpyFn & T => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calls: any[][] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spy = (...args: any[]): any => {
    calls.push(args);
    return f(...args);
  };
  Object.defineProperty(spy, "calls", { value: calls });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return spy as any;
};

export { SpyFn, spyFn };
