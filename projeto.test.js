const { validarTitulo, calcularDesconto, verificarEstoque } = require("./funcoes");

test('Validação de título', () => {
  expect(validarTitulo("Teste de Testes Unitários")). toBe(true);
});

test('Reitar título incorreto', () => {
  expect(validarTitulo("Título Errado")). toBe(false);
});

test('Calcular desconto de 10%', () => {
  expect(calcularDesconto(100)).toBe(90);
});

test('O valor do desconto não pode ser negativo', () => {
  expect(calcularDesconto(10)).toBeGreaterThan(0);
});

test('Validar se o desconto de zero é zero', () => {
  expect(calcularDesconto(0)).toBe(0);
});

test('Retorna "disponível" quando houver itens no estoque', () => {
    expect(verificarEstoque(10)).toBe("Item disponível");
});

test('Retorna "esgotado" quando a quantidade for zero', () => {
    expect(verificarEstoque(0)).toBe("Esgotado");
});