function calcularImc() {
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertendo cm para metros
    const peso = parseFloat(document.getElementById('peso').value);

    if (altura && peso) {
        const imc = peso / (altura * altura);
        document.getElementById('resultado_imc').textContent = `Seu IMC é ${imc.toFixed(2)}.`;
        
        // Adicionando as indicações
        let indicacoes = '';
        if (imc < 18.5) {
            indicacoes = 'Abaixo do peso. É importante manter uma dieta equilibrada e saudável.';
        } else if (imc >= 18.5 && imc < 24.9) {
            indicacoes = 'Peso normal. Continue mantendo hábitos saudáveis!';
        } else if (imc >= 25 && imc < 29.9) {
            indicacoes = 'Sobrepeso. Considere mudanças na dieta e aumento de atividade física.';
        } else {
            indicacoes = 'Obesidade. É recomendável procurar orientação de um profissional de saúde.';
        }
        
        document.getElementById('indicacoes').textContent = indicacoes;
    } else {
        document.getElementById('resultado_imc').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('indicacoes').textContent = ''; // Limpa as indicações se os campos não estão preenchidos
    }
}
