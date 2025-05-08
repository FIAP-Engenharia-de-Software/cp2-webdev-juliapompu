// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

num1 = 40
num2 = 20
operador(`+,-,*,/`)


function calcular(num1, num2, operador) {
  // TODO: implementar função
  if(operador != `+,-,*,/`){
    console.log(`Erro:Operação Invalida`)
  }

  if(`/` && num1, num2 == 0){
    console.log(`Error: divisão por 0`)
  }

  if(num1== int && num2 == int){
    console.log(`Erro: paramêtro invalido`)
  }
  return
}

calcular(num1,num2,operador);


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };