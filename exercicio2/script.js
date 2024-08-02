let res2 = document.getElementById('res2')
let res3 = document.getElementById('res3')
let res4 = document.getElementById('res4')
let res5 = document.getElementById('res5')
let res6 = document.getElementById('res6')
let res7 = document.getElementById('res7')
let res8 = document.getElementById('res8')
let res9 = document.getElementById('res9')
let res10 = document.getElementById('res10')
  
function verificar(){
    let resul = ``;
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)

    if((idade >= 0) && (idade < 16)){
        resul = `Voto impossibilitado`
    }else if((idade >= 16) && (idade < 18)){
        resul = `Voto facultativo`
    }else if((idade >= 18) && (idade < 70)){
        resul =  `Voto obrigatório`
    }else if((idade >= 70) && (idade < 130)){
        resul =  `Voto facultativo`
    }else{
        resul = `Valor invalido, digite novamente`
    }

    res2.innerHTML = `${resul} para o(a) ${nome} `
}
function calcular(){
    let tomate = Number(document.getElementById('tomate').value)
    let cebola = Number(document.getElementById('cebola').value)
    let aipim = Number(document.getElementById('aipim').value)
    let batata = Number(document.getElementById('batata').value)
    let cenoura = Number(document.getElementById('cenoura').value)
    let chuchu = Number(document.getElementById('chuchu').value)

    let conta = (tomate * 5.35) + (cebola * 3.32) + (aipim * 2.87) + (batata * 4.43) + (cenoura * 3.59) + (chuchu * 1.79)

    res3.innerHTML = `o resutado de sua compra deu R$ ${conta.toFixed(2)}`
}

function calcular() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value) 

    let operacao = document.getElementById('oparation').value
    let resultado = ""
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado = 'Por favor, insira números válidos.'
    } else {
      switch (operacao) {
        case 'A':
          resultado = `${num1} + ${num2} = ${num1 + num2}`
          break;
        case 'S':
          resultado = `${num1} - ${num2} = ${num1 - num2}`
          break;
        case 'M':
          resultado = `${num1} * ${num2} = ${num1 * num2}`
          break;
        case 'D':
          if (num2 === 0) {
            resultado = 'Divisão por zero não é permitida.'
          } else {
            resultado = `${num1} / ${num2} = ${num1 / num2}`
          }
          break;
        default:
          resultado = 'Operação inválida.'
        }
    }
  
    document.getElementById('res4').textContent = resultado
}
function encontrarMaiorEMenor() {  
  // Captura os valores dos inputs e converte para número  
  let nume1 = Number(document.getElementById('nume1').value)
  let nume2 = Number(document.getElementById('nume2').value)  
  let nume3 = Number(document.getElementById('nume3').value)

  // Inicializa 'maior' e 'menor' com o primeiro número  
  let maior = nume1
  let menor = nume1

  // Verifica se os números são diferentes  
  if (nume1 === nume2 || nume1 === nume3 || nume2 === nume3) {  
  res5.innerHTML = 'Os valores devem ser diferentes.'
      return
  }  
  
  if (nume2 > maior) {  
      maior = nume2;  
  }  
  if (nume3 > maior) {  
      maior = nume3;  
  }  
  if (nume2 < menor) {  
      menor = nume2;  
  }  
  if (nume3 < menor) {  
      menor = nume3;  
  }  

  res5.innerHTML = `O maior número é: ${maior} e o menor é: $
  {menor}` 
} 

function calcularPreco() {
  let custoFabrica = Number(document.getElementById('custoFabrica').value)
  let perDistri = Number(document.getElementById('perDistri').value);

  let imposto = 0.15

  let valorDistribuidor = custoFabrica * (perDistri / 100);
  let valorImposto = custoFabrica * imposto

  let precoFinal = custoFabrica + valorDistribuidor + valorImposto

  res6.innerHTML = `O preço final do carro é: R$ ${precoFinal.toFixed(2)}`
}
function calcularPreco() {
  let precoAquisiçao = Number(document.getElementById('precoAquisiçao').value)

  let percentualLucro
  if (precoAquisiçao < 50) {
      percentualLucro = 0.35
  } else if (precoAquisiçao < 100) {
      percentualLucro = 0.25
  } else {
      percentualLucro = 0.15
  }
  let precoVenda = precoAquisiçao * (1 + percentualLucro)

  res7.innerHTML = `O preço de venda é: R$ ${precoVenda.toFixed(2)}`
}
function calcularCusto() {
  let numMensagens = Number(document.getElementById('numMensagens').value);

  let taxaBasica = 5.00;
  let limiteGratuito = 75;
  let limitePrimeiraFaixa = 240;
  let taxaAdicional1 = 0.05;
  let taxaAdicional2 = 0.10;

  let custoTotal = taxaBasica;
  if (numMensagens > limiteGratuito) {
      let mensagensExcedentes1 = Math.min(numMensagens - limiteGratuito, limitePrimeiraFaixa - limiteGratuito)
      let mensagensExcedentes2 = Math.max(numMensagens - limitePrimeiraFaixa, 0);
      custoTotal += mensagensExcedentes1 * taxaAdicional1 + mensagensExcedentes2 * taxaAdicional2
  }

  res8.innerHTML = `O custo total é: R$ ${custoTotal.toFixed(2)}`
}
function calcularSalario() {
  let vendas = Number(document.getElementById('vendas').value)

  let salarioFixo = 1800
  let comissao1 = 0.03
  let comissao2 = 0.05
  let comissao3 = 0.08

  let comissao = 0
  if (vendas <= 10000) {
      comissao = vendas * comissao1
  } else if (vendas <= 30000) {
      comissao = vendas * comissao2
  } else {
      comissao = vendas * comissao3
  }

  let salarioTotal = salarioFixo + comissao

  res9.innerHTML = `O salário total é: R$ ${salarioTotal.toFixed(2)}`
}
function calcularValor() {
  let tipoCombustivel = document.getElementById('tipoCombustivel').value
  let litros = Number(document.getElementById('litros').value)
  let precoLitro = Number(document.getElementById('precoLitro').value)

  let desconto = 0;
  if (tipoCombustivel === 'A') {
      desconto = litros <= 20 ? 0.02 : 0.04
  } else if (tipoCombustivel === 'G') {
      desconto = litros <= 20 ? 0.03 : 0.05
  } else {
      alert("Tipo de combustível inválido. Use 'A' para Álcool ou 'G' para Gasolina.")
      return
  }

  let valorTotal = litros * precoLitro * (1 - desconto);

  res10.innerHTML = `O valor a ser pago por ${litros} litros de ${tipoCombustivel} é: R$ ${valorTotal.toFixed(2)}`;
}