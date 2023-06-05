// npm run test -- --watch jest-matchers.test.js

// Matchers más comunes

test("asignación de un objeto", () => {
  const datos = { uno: 1 };
  datos["dos"] = 2;
  expect(datos).toEqual({ uno: 1, dos: 2 });
});

// Veracidad

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("cero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Números

test("dos mas dos", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe y toEqual son equivalentes para números
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Cadenas de Texto

test("no hay I en Team", () => {
  expect("team").not.toMatch(/I/);
});

test('hay "stop" en Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// Arregls e iterables

const listaDeCompras = ["tomate", "pasta", "arroz", "bananas", "leche"];

test("la leche se encuentra en la lista de compras", () => {
  expect(listaDeCompras).toContain("leche");
  expect(new Set(listaDeCompras)).toContain("leche");
});

// Excepciones

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});

// Más matchers:  https://jestjs.io/es-ES/docs/expect
