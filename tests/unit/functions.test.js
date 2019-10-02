const functions = require('./../../src/functions');

//Use of toBe
test('Adding 2 + 3 is equal to 5', () => {
  expect(functions.add(2, 3)).toBe(5);
});

test("Adding -5 + -10 is equal to -15", () => {
  expect(functions.add(-5, -10)).toBe(-15);
});

// Use of not toBe
test("Adding 2 + 2 is not equal to 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Use of toBeNull
test("IsNull function returns null", () => {
  expect(functions.isNull()).toBeNull();
});

// Use of toBeTruthy
test('isTrue function returns true', () => {
  expect(functions.isTrue()).toBeTruthy();
})

// Use of toBeFalsy
test("isFalse function returns false", () => {
  expect(functions.isFalse()).toBeFalsy();
});

// Use of toBeUndefined
test("isUndefined function returns undefined", () => {
  expect(functions.isUndefined()).toBeUndefined();
})

// Use of toBeDefined
test('isDefined function to return something', () => {
  expect(functions.isDefined()).toBeDefined();
})
