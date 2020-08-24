import { TEST } from './constants';

export function doTest(test) {
    return {
      type: TEST,
      data: test
    };
}
