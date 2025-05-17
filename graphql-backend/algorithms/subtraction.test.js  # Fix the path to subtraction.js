const assert = require('assert');
const subtract = require('./subtraction');

describe('Subtraction Algorithm', () => {
    it('should return the correct difference for positive numbers', () => {
        assert.strictEqual(subtract(5, 3), 2);
    });
});