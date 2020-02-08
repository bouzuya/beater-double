import assert from "assert";
import { spyFn } from "../src/spy-fn";
import { Test, test } from "./helper";

const tests: Test[] = [
  test("default call with args", async () => {
    const spyF = spyFn((...ns: number[]) => JSON.stringify(ns));
    assert.deepStrictEqual(spyF(123), "[123]");
    assert.deepStrictEqual(spyF(456, 789), "[456,789]");
    assert.deepStrictEqual(spyF.calls, [[123], [456, 789]]);
  }),

  test("SpyFn & OriginalFn", async () => {
    const f = (n: number): string => n.toString();
    const g = (f: (n: number) => string): string => f(123);
    const spyF = spyFn(f);
    g(spyF); // type match
    assert.deepStrictEqual(spyF.calls, [[123]]);
  })
];

export { tests };
