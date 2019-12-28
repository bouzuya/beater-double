import { Test, run } from './helper';
import { tests as spyFnTests } from './spy-fn';

const tests: Test[] = [
  ...spyFnTests
];

run(tests).catch((_) => process.exit(1));
