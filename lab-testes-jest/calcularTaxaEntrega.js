function calcularTaxa(dist) {
  if (dist >= 1 && dist <= 10) {
    return 5.00;
  }

  if (dist >= 11 && dist <= 50) {
    return 15.00;
  }

  if (dist >= 51 && dist <= 100) {
    return 30.00;
  }

  throw new Error("DistanciaInvalidaException");
}

module.exports = {
  calcularTaxa
};
