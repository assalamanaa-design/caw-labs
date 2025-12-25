const { first, last, concatStrings, chunk } = require('./exercise2');

test('first: returns the first n elements of an array', () => {
    expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    expect(first([1, 2, 3])).toBe(1);
    expect(first(null, 2)).toEqual([]);
    expect(first([1, 2], 0)).toEqual([]);
});

test('last: returns the last n elements of an array', () => {
    expect(last([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
    expect(last([1, 2, 3])).toBe(3);
    expect(last(null, 2)).toEqual([]);
});

test('concatStrings: concatenates all elements of an array of strings', () => {
    expect(concatStrings(["Red", "Green", "White", "Black"])).toBe("RedGreenWhiteBlack");
});

test('chunk: divides an array into sub-arrays of a given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
});
