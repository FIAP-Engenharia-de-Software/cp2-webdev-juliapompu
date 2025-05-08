// ## Jogo de Adivinhação (1 ponto)

// **Enunciado:**

// Implemente a função adivinharNumero, que receba um número máximo e um palpite. A função deve gerar um número aleatório entre 0 e `max`. A função deve:

// - Retornar `"Acertou!"` se o número gerado for igual ao `palpite`;
// - Retornar `"Errou! Tente novamente!"` se o palpite estiver incorreto.

max = 10
palpite = (1,10)

function adivinharNumero(max, palpite) {
  // TODO: implementar função
  if(max>palpite){
    console.log(`Errou`)
  }

  if(max<palpite){
    console.log(`Erro`)
  }

  if(max==palpite){
    console.log(`Acertou`)
  }
return
}

console(adivinharNumero);

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { adivinharNumero };