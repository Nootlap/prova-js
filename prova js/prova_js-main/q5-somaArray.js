// Questão 5: somaArray(arr)
// Receba um array de números e retorne a soma de todos os elementos.
// Um array vazio deve resultar em 0.

function somaArray(arr) {
  // escreva sua solução aqui
    return arr.reduce((acumulador, atual) => acumulador + atual, 0);
}


// Testes (não altere esta parte)
console.log(somaArray([1, 2, 3, 4]) === 10 ? "OK" : "ERRO");
console.log(somaArray([]) === 0 ? "OK" : "ERRO");
