function calcularDesconto(idade) {
  if (idade < 0 || idade > 120) {
    throw new Error("Idade fora da faixa permitida (0 a 120).");
  }

  if (idade >= 0 && idade <= 17) {
    return 0.10;
  }

  if (idade >= 18 && idade <= 59) {
    return 0.00;
  }

  if (idade >= 60 && idade <= 120) {
    return 0.20;
  }
}

module.exports = {
  calcularDesconto
};
