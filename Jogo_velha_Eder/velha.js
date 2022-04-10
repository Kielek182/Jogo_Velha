var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById(elementid = 'jogador-selecionado');
var vencedorSelecionado = document.getElementById(elementid = 'vencedor-selecionado');
var quadrado =document.getElementsByClassName('quadrado')
mudar_jogador(valor = 'X');

function escolher_quadrado(id){
    if (vencedor !== null) {
        return;
    }
    var quadrado = document.getElementById(id);//seleciona pelo id
    if (quadrado.innerHTML !== '-'){
        return;
    }
    
    quadrado.innerHTML = jogador; // .innerHTML=todo html
    quadrado.style.color = "#FAC04B";

    if (jogador === 'X'){
        jogador = 'O';        
    }
    else{
        jogador = 'X';
    }

    mudar_jogador(jogador);
    Vencedor();//função vencedor
}

function mudar_jogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function Vencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (Velha (quadrado1, quadrado2, quadrado3)){
        muda_corQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (Velha (quadrado4, quadrado5, quadrado6)){
        muda_corQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (Velha (quadrado7, quadrado8, quadrado9)){
        muda_corQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (Velha (quadrado1, quadrado4, quadrado7)){
        muda_corQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (Velha (quadrado2, quadrado5, quadrado8)){
        muda_corQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (Velha (quadrado3, quadrado6, quadrado9)){
        muda_corQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (Velha (quadrado1, quadrado5, quadrado9)){
        muda_corQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if (Velha (quadrado3, quadrado5, quadrado7)){
        muda_corQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        //ultima ñ precisa return pq não tem mais depois
    }
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function muda_corQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#4B8EFA';
    quadrado2.style.background = '#4B8EFA';
    quadrado3.style.background = '#4B8EFA';
}

function Velha(quadrado1, quadrado2, quadrado3){
    var Eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        Eigual = true;
    }
    return Eigual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';// '' = null

    for (var i = 1; i <= 9; i++){//enquanto for <= 9 quadrados
        var quadrado = document.getElementById(i);// faz quadrado = i
        quadrado.style.background = "#AD7A11";
        quadrado.style.color = "#AD7A11";
        quadrado.innerHTML = "-";
    }

    mudar_jogador(X);
}