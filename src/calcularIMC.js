// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

peso = 54
altura = 1.63


function calcularIMC(peso, altura) {
  // TODO: implementar função
formula: peso/ (altura * altura)
 if(formular< 18.6){
  console.log(`Abaixo do peso.`)
 }

 if(formula == 18.6 && 24.9){
  console.log(`Peso normal`)
 }

if(formula == 25 && 29.9){
  console.log(`Sobrepeso`)
}

if(formula >= 30){
  console.log(`Obesidade`)
}

else{
  console.log(`Error`)
}
  return
}


calcularIMC(peso,altura)

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };