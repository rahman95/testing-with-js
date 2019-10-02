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

// Test Regex
test("getUserName returns correct username", () => {
  expect(functions.getUserName()).toBe("rahman95");
});

test("getUserName matches lowercase and 0-9 regex", () => {
  expect(functions.getUserName()).toMatch(/^[a-z0-9_\-]+$/);
});

// Comparioson Operators
test("check if 50 is less than 100", () => {
  expect(functions.returnValue(50)).toBeLessThan(100);
});

test("check if 50 is less than or equal to 50", () => {
  expect(functions.returnValue(50)).toBeLessThanOrEqual(50);
});

test("check if 50 is greater than 25", () => {
  expect(functions.returnValue(50)).toBeGreaterThan(25);
});

test("check if 50 is greater than or equal to 25", () => {
  expect(functions.returnValue(50)).toBeGreaterThanOrEqual(25);
});

// Testing asynchronous function - Promise
test("query rahman95 on github", () => {
  expect.assertions(2);
  return functions.getGithubUser().then(data => {
    expect(data.login).toBe("rahman95");
    expect(data.id).toBe(15032635);
  });
});

// Testing asynchronous function - Async/Await
test("query rahman95 on github", async () => {
  expect.assertions(2);
  const data = await functions.getGithubUser();

  expect(data.login).toBe("rahman95");
  expect(data.id).toBe(15032635);
});
