const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("set by constructor arguments", () => {
  const name = "Andrea";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("set by constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("set by constructor argument", () => {
  const testValue = "andrea@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("getName()", () => {
  const testValue = "Andrea";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("getEmail()", () => {
  const testValue = "andrea@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Andrea", 1, "andrea@test.com");
  expect(e.getRole()).toBe(testValue);
});
