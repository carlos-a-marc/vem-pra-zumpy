
const entrada = ['ABC', 'BCE', 'CG', 'DAF', 'EF', 'FH'];

function retornaDependencias() {
    let saida = []

    for (let i = 0; i < entrada.length; i++) {
        let token = entrada[i][0];
        saida[token] = entrada[i].slice(1);
    }

    for (let i = 0; i < entrada.length; i++) {
        let linhaAtual = entrada[i];

        for (let x = 1; x < linhaAtual.length; x++) {
            let token = linhaAtual[0];
            let letraAtual = linhaAtual[x];  // recebe elementos da chaveValor excuindo token
            let chaves = Object.keys(saida); //criando array com tokens do conjunto chave-valor de saída

            if (chaves.indexOf(letraAtual) > -1) {
                let depLetraAtual = saida[letraAtual];
                saida[token] = limpa_repeticao(saida[token], depLetraAtual);
                saida[token] = saida[token].split('').sort().join('');
            }
        }
    }

    let valores = Object.entries(saida);

    //Completa a lista de dependêcias transitivas
    for (let i = 0; i < valores.length; i++) {
        let chaveValor = valores[i];
        let token = chaveValor[0];
        let depValores = chaveValor[1];

        for (let x = 0; x < depValores.length; x++) {
            let letraAtual = depValores[x];
            let chaves = Object.keys(saida);

            if (chaves.indexOf(letraAtual) > -1) {
                let depLetraAtual = saida[letraAtual];
                saida[token] = limpa_repeticao(saida[token], depLetraAtual);
                saida[token] = saida[token].split('').sort().join('');
            }
        }
    }
    return saida;
}

// recebe as depNovas dependecias de uma chave e concatena com os valores existentes excuindo as letras repetidas.
function limpa_repeticao(depExistente, depNova) {
    for (let i = 0; i < depNova.length; i++) {
        if (depExistente.indexOf(depNova[i]) <= -1) {
            depExistente += depNova[i];
        }
    }
    return depExistente;
}

/*#################################################################################################

Nome: Carlos Alberto
Email: carlos.alberto.marc@gmail.com

###################################################################################################*/

let saida = retornaDependencias();
console.log('Lista de dependências - Carlos Alberto');
console.log(saida);