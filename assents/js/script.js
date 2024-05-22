function calcular(operacao) {
    const num1Str = document.getElementById('num1').value;
    const num2Str = document.getElementById('num2').value;

    // Verificação de campos em branco
    if (num1Str === '' || num2Str === '') {
        document.getElementById('resultado').innerText = "Resultado: Dados em branco, favor digitar algo!";
        return;
    }

    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);
    let resultado;

    // Verificação se os valores são números válidos
    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira números válidos.";
    } else {
        switch (operacao) {
            case 'somar':
                resultado = num1 + num2;
                break;
            case 'subtrair':
                resultado = num1 - num2;
                break;
            case 'multiplicar':
                resultado = num1 * num2;
                break;
            case 'dividir':
                if (num2 === 0) {
                    resultado = "Não há divisão por zero.";
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = "Operação desconhecida.";
        }
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

// Adicionar eventos aos botões
document.getElementById('somar').addEventListener('click', function() {
    calcular('somar');
});
document.getElementById('subtrair').addEventListener('click', function() {
    calcular('subtrair');
});
document.getElementById('multiplicar').addEventListener('click', function() {
    calcular('multiplicar');
});
document.getElementById('dividir').addEventListener('click', function() {
    calcular('dividir');
});