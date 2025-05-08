// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.


nota=(1,10)

function classificarNota(nota) {
  // TODO: implementar função
  if(nota>= 6){
    console.log(`Aprovado`)
  }

  if(nota<6){
    console.log(`Reprovada`)
  }
  else(nota != Int);{
    console.log(`Nota inválida`)
  }

  return
}

classificarNota(nota);

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };