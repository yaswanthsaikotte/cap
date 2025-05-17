const { absoluteValue } = require('./absoluteValue');

test('absolute value of positive number', () => {
	expect(absoluteValue(5)).toBe(5);
});

test('absolute value of negative number', () => {
	expect(absoluteValue(-5)).toBe(5);
});

test('absolute value of zero', () => {
	expect(absoluteValue(0)).toBe(0);
});