import { Test, run } from 'beater';
import { tests as spyFnTests } from './spy-fn';

const tests: Test[] = [
  ...spyFnTests
];

run(tests).catch((_) => process.exit(1));
