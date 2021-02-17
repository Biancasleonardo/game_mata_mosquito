
// Ajuste do tamanho da tela
let altura = 0;
let largura = 0;
// controle de vidas
let vidas = 1;
// controle de tempo
let tempo = 50;

// tempo inicial que os mosquitos aparecem
let criaMosquitoTempo = 1500;

// Recupera a URL(search) para definir o nível do jogo
let nivel = window.location.search
// altera o resultado retirando o caracter '?'
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    // 1500
    criaMosquitoTempo = 1500;

} else if (nivel === 'dificil') {
    // 1000
    criaMosquitoTempo = 1000;
    
} else if (nivel === 'chucknorris') {
    // 750
    criaMosquitoTempo = 750;
}


function ajustaTamanhoPalcoJogo() {
    // Pega o tamanho da tela 
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);

}

ajustaTamanhoPalcoJogo();

// cria a contagem de tempo do jogo
let cronometro = setInterval(function()  {

    if (tempo <= 0) {
        clearInterval(cronometro)
        clearInterval(cria_mosca)
        window.location.href='vitoria.html'
    } else {
        tempo-=1

        // innerHTML (adiciona o cronometro dentro do local onde foi criado o ID -> span)
        document.getElementById('cronometro').innerHTML = tempo;
    }

    
    
}, 1000);

function posicaoRandomica() {

    // remove o mosquito anterior caso exista
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        // no momentos que o mosquito for removido automaticamente perde uma vida
        if (vidas > 3) {
            
            window.location.href='fim_de_jogo.html'

        } else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas++
        }

    }

    // Ajusta a posição do mosquito na tela de forma randomica
    // Math.floor arrendonta para baixo as posições X e Y
    // subtrai 90 para que o px da imagem não saia da tela
    let posicaoX = Math.floor(Math.random()*largura) - 90;
    let posicaoY = Math.floor(Math.random()*altura) - 90;

    // verifica se o valor de x e y é menor que 0
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    // criar o elemento HTML
    let mosquito = document.createElement('img');
    // acessa o atributo mosquito e add o local da img
    mosquito.src = 'imagens/mosquito.png';
    // atribuindo a classe obtida na função tamanhoAleatorio e concatena com a função ladoAleatorio
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    // atribuindo ao elemento a posicao randomica em px -> pixel
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    // atribuindo ao elemento o valor absoluto
    mosquito.style.position = 'absolute';
    // atribui o elemento mosquito ao id mosquito
    mosquito.id = 'mosquito'
    // Cria o evento de click e atribui a uma função
    mosquito.onclick = function () {
        // Ao elemento ser clicado remove o mosquito
        this.remove()
    }

    // add o elemento no body da página
    document.body.appendChild(mosquito);

    console.log(ladoAleatorio())
}

// Função que cria o tamanho aleatório do mosquito
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);
    console.log(classe);

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// Função que altera os lados do mosquito
function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2 )

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}




