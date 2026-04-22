function validarTitulo(titulo) {
    return titulo === "Teste de Testes Unitários";
}

function calcularDesconto(valor) {
    return valor * 0.9;
}

function verificarEstoque(quantidade) {
    if (quantidade > 0) {
        return "Item disponível";
    }
    return "Esgotado";
}

module.exports = { validarTitulo, calcularDesconto, verificarEstoque };
