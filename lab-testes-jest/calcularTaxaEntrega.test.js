const { calcularTaxa } = require("./calcularTaxaEntrega");

describe("Calcular Taxa de Entrega (ISO/IEC/IEEE 29119-4)", () => {
  describe("Faixa 1: 1 a 10 Km", () => {
    test("CT-01: Limite inferior", () => {
      expect(calcularTaxa(1)).toBe(5.00);
    });

    test("CT-02: Valor intermediário", () => {
      expect(calcularTaxa(5)).toBe(5.00);
    });

    test("CT-03: Limite superior", () => {
      expect(calcularTaxa(10)).toBe(5.00);
    });
  });

  describe("Faixa 2: 11 a 50 Km", () => {
    test("CT-04: Limite inferior", () => {
      expect(calcularTaxa(11)).toBe(15.00);
    });

    test("CT-05: Limite intermediário", () => {
      expect(calcularTaxa(30)).toBe(15.00);
    });

    test("CT-06: Limite superior", () => {
      expect(calcularTaxa(50)).toBe(15.00);
    });
  });

  describe("Faixa 3: 51 a 100 Km", () => {
    test("CT-07: Limite inferior", () => {
      expect(calcularTaxa(51)).toBe(30.00);
    });

    test("CT-08: Valor intermediário", () => {
      expect(calcularTaxa(75)).toBe(30.00);
    });

    test("CT-09: Limite superior", () => {
      expect(calcularTaxa(100)).toBe(30.00);
    });
  });

  describe("Entradas Inválidas (DistanciaInvalidaException)", () => {
    test("CT-10: Distância igual a zero", () => {
      expect(() => calcularTaxa(0)).toThrow("DistanciaInvalidaException");
    });

    test("CT-11: Distância negativa", () => {
      expect(() => calcularTaxa(-5)).toThrow("DistanciaInvalidaException");
    });

    test("CT-12: Distância acima de 100 Km", () => {
      expect(() => calcularTaxa(121)).toThrow("DistanciaInvalidaException");
    });
  });
});
