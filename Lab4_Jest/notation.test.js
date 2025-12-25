const mean = require('./notation');

test('mean should return the correct average', () => {
  expect(mean([10, 12, 14])).toBe(12);
  expect(mean([5, 15, 20])).toBeCloseTo(13.333, 3);
  expect(mean([0, 0, 0])).toBe(0);
});