var assert = require('assert');

describe('ready', () => {
    it('return true after 3sec', () => {
      // should set the timeout of this test to 1000 ms; instead will fail
      this.timeout(3000);
      assert.ok(true);
    });
  });
