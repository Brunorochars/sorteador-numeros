function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }
    if(quantidade > (ate - de + 1)){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do numero" ate o campo "Ate o numero". Verifique! ');
        return;
    }  

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){ //includes devolve um booleano, verificara se ja tem o numero incluido, se tiver, retornara um true e sera sorteado um novo numero.
         numero = obterNumeroAleatorio(de, ate);
         alert('Tentando obter numero inedito');   
        }

        sorteados.push(numero); //Coloca o numero aleatorio na array
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    alterarStatusBotao();
}


function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){ 
    let botao = document.getElementById('btn-reiniciar'); //Agora, dentro do bloco, será necessário declarar uma variável que irá corresponder ao botão “reiniciar”.

    if(botao.classList.contains('container__botao-desabilitado')){ //Feito isso, precisaremos criar um bloco if/else, que irá verificar 
        botao.classList.remove('container__botao-desabilitado');   //qual a classe que está presente no elemento. Se estiver desabilitado, 
        botao.classList.add('container__botao');                   //precisaremos remover e incluir a classe comum do botão. Caso contrário, 
    }else{                                                         //removeremos a classe de botão comum e incluiremos a de desabilitado:
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}