function somme(a, b) {
  return a + b;
}

function estPair(n) {
  return n % 2 === 0;
}

function factorielle(n) {
  if (n < 0) throw new Error("Nombre négatif interdit");
  if (n === 0) return 1;
  return n * factorielle(n - 1);
}

function inverse(chaine) {
  return chaine.split("").reverse().join("");
}

module.exports = { somme, estPair, factorielle, inverse };
