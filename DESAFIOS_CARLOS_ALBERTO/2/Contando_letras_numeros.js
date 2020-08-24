
const numSimples = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
const dezenas = ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"];
const centenas = ["cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
const milhar = ["mil"];

/*função principal - a partir dela são chamadas as funções que testam casas de unidades, dezenas, etc.*/
function retornaExtenso() {
    let numExtenso = '';
    let soma = 0;

    for (let num = 0; num < 1001; num++) {
        if (num >= 0 && num < 20) {
            numExtenso = testaNumSimples(num);

        } else if (num >= 20 && num < 100) {
            numExtenso = testaDezenas(num);

        } else if (num >= 100 && num < 999) {
            numExtenso = testaCentenas(num);

        } else if (num === 1000) {
            numExtenso = testaMilhar(num);
        }
        soma += numExtenso.split(' ').join('').length;
    }
    return soma;
}

/* Se receber valor entre 0 e 19, retorna o mesmo escrito por extenso, de acordo com o vetor definido no início do script*/
function testaNumSimples(num) {
    return `${numSimples[num]}`;
}

/* Se receber valor entre 20 e 99, retorna o mesmo escrito por extenso, de acordo com o vetor definido no início do script*/
function testaDezenas(num) {
    let nDezena = parseInt(num / 10);
    let nUnidade = num % 10;

    if (nUnidade === 0) {
        return `${dezenas[nDezena - 1]}`;
    } else {
        return `${dezenas[nDezena - 1]} e ${numSimples[nUnidade]}`;
    }
}

/* Se receber valor entre 100 e 99, retorna o mesmo escrito por extenso, de acordo com o vetor definido no início do script*/
function testaCentenas(num) {
    let nCentena = parseInt(num / 100);
    let resto = num % 100;

    if (resto >= 0 && resto < 20) {
        let retorno = '';
        if (resto === 0) {
            retorno = `${centenas[nCentena - 1]}`;
        } else if (resto !== 0 && nCentena === 1) {
            retorno = `cento e ${testaNumSimples(resto)}`;
        } else {
            retorno = `${centenas[nCentena - 1]} e ${testaNumSimples(resto)}`;
        }
        return retorno;
    } else if (resto >= 20 && resto < 100) {
        return `${centenas[nCentena - 1]} e ${testaDezenas(resto)}`;
    }
}

function testaMilhar(num) {
    let nMilhar = parseInt(num / 1000);
    let resto = num % 1000;

    return `${milhar[nMilhar - 1]}`;
}


/*#################################################################################################

Nome: Carlos Alberto
Email: carlos.alberto.marc@gmail.com

###################################################################################################*/


let soma = retornaExtenso();
console.log('O cálculo considera o conector "e" e desconsidera os espaços existentes entre cada palavra que compoem os valores entre 0 e 1000 (ex: noventa e nove = noventaenove).');
console.log('')
console.log(`Quantidade de letras de 0 a 1000 = ${soma}`);