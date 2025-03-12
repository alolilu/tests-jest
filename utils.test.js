const { somme, estPair, factorielle } = require("./utils");

test("somme de 2 et 3 doit être 5", () => {
  expect(somme(2, 3)).toBe(5);
});

test("estPair(4) doit retourner true", () => {
  expect(estPair(4)).toBe(true);
});

test("estPair(5) doit retourner false", () => {
  expect(estPair(5)).toBe(false);
});

test("factorielle de 5 doit être 120", () => {
  expect(factorielle(5)).toBe(120);
});

test("factorielle de 0 doit être 1", () => {
  expect(factorielle(0)).toBe(1);
});

test("factorielle d'un nombre négatif doit lever une erreur", () => {
  expect(() => factorielle(-1)).toThrow("Nombre négatif interdit");
});

test("Vérifier si somme est appelée avec les bons arguments", () => {
  const mockSomme = jest.fn(somme);

  mockSomme(2, 3);

  expect(mockSomme).toHaveBeenCalled();
  expect(mockSomme).toHaveBeenCalledWith(2, 3);
});
