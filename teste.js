// Questão 2
let numero = prompt("Digite um número para verificar se pertence à sequência de Fibonacci:");

// Define as variáveis para a sequência de Fibonacci
let a = 0;
let b = 1;
let c = a + b;
let pertence = false;

// Calcula a sequência de Fibonacci até o número informado
while (c <= numero) {
    if (c == numero) {
        pertence = true;
        break;
    }
    a = b;
    b = c;
    c = a + b;
}

// Imprime a mensagem informando se o número pertence ou não à sequência
if (pertence) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}



// Questão 3
let faturamentoDiario = [1500, 1800, 1200, 2000, 900, 2200, 1700, 1400, 1900, 1100, 2100, 1300];

// Calcula o menor valor de faturamento diário
let menorValor = faturamentoDiario[0];
for (let i = 1; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] < menorValor) {
        menorValor = faturamentoDiario[i];
    }
}
console.log("O menor valor de faturamento ocorrido em um dia do mês foi: " + menorValor);

// Calcula o maior valor de faturamento diário
let maiorValor = faturamentoDiario[0];
for (let i = 1; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > maiorValor) {
        maiorValor = faturamentoDiario[i];
    }
}
console.log("O maior valor de faturamento ocorrido em um dia do mês foi: " + maiorValor);

// Calcula a média mensal de faturamento diário
let soma = 0;
let diasComFaturamento = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > 0) {
        soma += faturamentoDiario[i];
        diasComFaturamento++;
    }
}
let mediaMensal = soma / diasComFaturamento;

// Calcula o número de dias no mês em que o valor de faturamento diário foi superior à média mensal
let diasAcimaDaMedia = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > mediaMensal) {
        diasAcimaDaMedia++;
    }
}
console.log("O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi: " + diasAcimaDaMedia);

//Questão 4
const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamentoMensal).reduce((acc, curr) => acc + curr, 0);

const percentuais = {};

for (const [estado, faturamento] of Object.entries(faturamentoMensal)) {
    const percentual = (faturamento / totalFaturamento) * 100;
    percentuais[estado] = percentual.toFixed(2);
}

console.log(percentuais);



//  Questão 5
let string = "Hello, world!";

// Converte a string em uma array de caracteres
let caracteres = string.split("");

// Inverte a ordem dos caracteres na array
let caracteres_reversos = [];
for (let i = caracteres.length - 1; i >= 0; i--) {
    caracteres_reversos.push(caracteres[i]);
}

// Converte a array de caracteres de volta para uma string
let string_reversa = caracteres_reversos.join("");

// Imprime a string reversa
console.log(string_reversa);


