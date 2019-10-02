const toBeType = require("jest-tobetype");
const functions = require("./../../src/functions");

expect.extend(toBeType);

//Use of toBe
test("Adding 2 + 3 is equal to 5", () => {
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
test("isTrue function returns true", () => {
  expect(functions.isTrue()).toBeTruthy();
});

// Use of toBeFalsy
test("isFalse function returns false", () => {
  expect(functions.isFalse()).toBeFalsy();
});

// Use of toBeUndefined
test("isUndefined function returns undefined", () => {
  expect(functions.isUndefined()).toBeUndefined();
});

// Use of toBeDefined
test("isDefined function to return something", () => {
  expect(functions.isDefined()).toBeDefined();
});

// Test arrays
test("getUsers contains admin", () => {
  expect(functions.getUsers()).toContain("admin");
});

test("getUsers contains user1", () => {
  expect(functions.getUsers()).toContain("user1");
});

test("getUsers returns array", () => {
  expect(functions.getUsers()).toBeType("array");
});

// Test objects
test("getSelf returns object", () => {
  expect(functions.getSelf()).toBeType("object");
});

test("getSelf returns correct user", () => {
  const user = {
    firstName: "Rahman",
    lastName: "Younus",
    userName: "rahman95"
  };

  expect(functions.getSelf()).toEqual(user);
});

test("getSelf contains firstName", () => {
  expect(functions.getSelf()).toHaveProperty("firstName", "Rahman");
});
