// Lógica para calcular economia de água na irrigação
function calcularEconomia() {
    const areaInput = document.getElementById('area').value;
    const resultadoDiv = document.getElementById('resultado');

    if (areaInput === '' || areaInput <= 0) {
        resultadoDiv.style.display = 'block';
        resultadoDiv.style.borderColor = 'red';
        resultadoDiv.innerHTML = '<span style="color: red; font-weight: bold;">Por favor, insira um tamanho de área válido!</span>';
        return;
    }

    // Base de cálculo fictícia: Economia média de 20.000 litros de água por hectare/mês com gotejamento eficiente
    const economiaPorHectare = 20000;
    const totalEconomizado = areaInput * economiaPorHectare;

    resultadoDiv.style.display = 'block';
    resultadoDiv.style.borderColor = '#FF6600';
    resultadoDiv.innerHTML = `
        <h3 style="color: #FF6600; margin-bottom: 0.5rem;">🎉 Resultado Incrível!</h3>
        <p>Ao adotar a irrigação por gotejamento inteligente em sua área de <strong>${areaInput} hectares</strong>, você pode economizar cerca de <strong>${totalEconomizado.toLocaleString('pt-BR')} litros</strong> de água por mês!</p>
        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">*Dados baseados em médias de eficiência tecnológica rural.</p>
    `;
}

// Sistema de dicas aleatórias sobre o Agro Sustentável
const dicasAgro = [
    "A rotação de culturas melhora a saúde do solo e reduz a necessidade de fertilizantes químicos!",
    "O uso de drones ajuda a identificar pragas no início, evitando o desperdício de defensivos agrícolas.",
    "Preservar as matas ciliares nas bordas dos rios protege a água que abastece toda a sua propriedade.",
    "A energia solar no campo pode alimentar sistemas de irrigação inteiros com custo zero de energia limpa!",
    "Adubação orgânica melhora a retenção de água no solo e nutre as plantas de forma natural."
];

function exibirDicaAleatoria() {
    const dicaElemento = document.getElementById('dica-campo');
    const indiceAleatorio = Math.floor(Math.random() * dicasAgro.length);
    dicaElemento.textContent = dicasAgro[indiceAleatorio];
}

// Executa a função de dica assim que a página carrega
window.onload = exibirDicaAleatoria;
