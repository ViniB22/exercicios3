let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let res3 = document.getElementById('res3')
let res4 = document.getElementById('res4')
let res5 = document.getElementById('res5')

function calcularAreaQ() {
    let ladoQ = Number(document.getElementById('ladoQ').value)

    if (isNaN(ladoQ) || ladoQ <= 0) {
        alert("Por favor, insira um valor numérico positivo para o lado da base.")
        return
    }

    let areaBase = ladoQ * ladoQ

    res1.innerHTML = `A área da base da pirâmide é: ${areaBase.toFixed(2)}.`
}
function calcularAreaT() {
    let base = Number(document.getElementById('base').value)
    let alturaTriangulo = Number(document.getElementById('alturaTriangulo').value)

    if (isNaN(base) || base <= 0 || isNaN(alturaTriangulo) || alturaTriangulo <= 0) {
        alert("Por favor, insira valores numéricos positivos para a base e a altura do triângulo.")
        return
    }

    let areaBase = (base * alturaTriangulo) / 2

    res2.innerHTML = `A área da base da pirâmide é: ${areaBase.toFixed(2)}`
}
function calcularVolume() {
    let raio = Number(document.getElementById('raio').value)
    let altura = Number(document.getElementById('altura').value)
    let frascosPorHora = Number(document.getElementById('frascosPorHora').value)
    let horasPorDia = Number(document.getElementById('horasPorDia').value)
    let dias = Number(document.getElementById('dias').value)

    if (isNaN(raio) || raio <= 0 || isNaN(altura) || altura <= 0 || isNaN(frascosPorHora) || frascosPorHora <= 0 || isNaN(horasPorDia) || horasPorDia <= 0 || isNaN(dias) || dias <= 0) {
        alert("Por favor, insira valores numéricos positivos.")
        return
    }

    let pi = Math.PI
    let volumeFrasco = pi * raio * raio * altura

    let totalFrascos = frascosPorHora * horasPorDia * dias

    let volumeTotal = volumeFrasco * totalFrascos

   res3.innerHTML = `O volume total de detergente produzido no mês é: ${volumeTotal.toFixed(2)} cm³`
}
function calcular() {
    let pesosString = document.getElementById("pesos").value;
    let pesosArray = pesosString.split(',').map(peso => parseFloat(peso))

    let mediaPeso = pesosArray.reduce((acc, peso) => acc + peso) / pesosArray.length

    let precoPorKg = 14.95

    let refeicoesEm3h = 3 * 60 / 15

    let receita3h = mediaPeso * refeicoesEm3h * precoPorKg

    let horasFuncionamentoMes = 22 * 8

    let refeicoesMes = horasFuncionamentoMes * 60 / 15

    let receitaMes = mediaPeso * refeicoesMes * precoPorKg

    let pesoTotalMes = mediaPeso * refeicoesMes

    document.getElementById("mediaPeso").innerHTML = mediaPeso.toFixed(3) + " kg"
    document.getElementById("receita3h").innerHTML = "R$ " + receita3h.toFixed(2)
    document.getElementById("receitaMes").innerHTML = "R$ " + receitaMes.toFixed(2)
    document.getElementById("pesoTotalMes").innerHTML = pesoTotalMes.toFixed(3) + " kg"
}
function converter() {
    let fahrenheit = Number(document.getElementById("fahrenheit").value)

    let celsius = (fahrenheit - 32) * 5 / 9

    res5.innerHTML = celsius.toFixed(2) + "°C"
}