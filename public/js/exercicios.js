var reset = false;

function inserir(valor) {
    var valores = document.getElementById('visor').innerHTML;
    if(valores == "Nada para resolver :("){
        document.getElementById('visor').innerHTML = "" + valor;
    }else{
        document.getElementById('visor').innerHTML = valores + valor;
    }
    if(reset == true){
        if(valor == "+" || valor == "-" || valor == "*" || valor == "/"){
            document.getElementById('visor').innerHTML = valores + valor;
            reset = false;
        }else{
        reset = false;
        document.getElementById('visor').innerHTML = "" + valor;
        }
    }
}

function excluir() {
    document.getElementById('visor').innerHTML = "";
    document.getElementById('miniVisor').innerHTML = "";
}

function deletar() {
    var result = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = result.substring(0, result.length - 1);
}

function resultado(sinal) {
    if(sinal == "="){
        reset = true;
        document.getElementById('miniVisor').innerHTML = document.getElementById('visor').innerHTML + "=";
    }
    var resultado = document.getElementById('visor').innerHTML;
    if (resultado) {
        document.getElementById('visor').innerHTML = eval(resultado);
    } else {
        document.getElementById('visor').innerHTML = "Nada para resolver :(";
    }
}

function mudar() {
    var mudar = document.getElementById('visor').innerHTML;
    if (mudar) {
        document.getElementById('visor').innerHTML = mudar * (-1);
    } else {
        document.getElementById('visor').innerHTML = "Nada para resolver :(";
    }
}

function dobro() {
    var dobrar = document.getElementById('visor').innerHTML;
    if (dobrar) {
        document.getElementById('visor').innerHTML = dobrar * dobrar;
    } else {
        document.getElementById('visor').innerHTML = "Nada para dobrar :(";
    }
}

function triplo() {
    var triplicar = document.getElementById('visor').innerHTML;
    if (triplicar) {
        document.getElementById('visor').innerHTML = triplicar * triplicar * triplicar;
    } else {
        document.getElementById('visor').innerHTML = "Nada para triplicar :(";
    }
}

function divisorUm() {
    var divisor = document.getElementById('visor').innerHTML;
    if (divisor) {
        document.getElementById('visor').innerHTML = 1 / (divisor);
    } else {
        document.getElementById('visor').innerHTML = "Nada para resolver :(";
    }
}

function raiz() {
    var raiz = document.getElementById('visor').innerHTML;
    if (raiz) {
        document.getElementById('visor').innerHTML = Math.sqrt(raiz);
    } else {
        document.getElementById('visor').innerHTML = "Nada para resolver :(";
    }
}

function multiplicar(){
    var vUm = parseInt(document.getElementById('valorUmM').value);    
    var vDois = parseInt(document.getElementById('valorDoisM').value);
    var mult = 0;

    for(var i=0; i<vDois; i++){
        mult += vUm;
    }

    document.getElementById('resposta').innerHTML = "RESPOSTA <br>"+ mult;

}

function potencia(){
    var vUm = parseInt(document.getElementById('valorUmP').value);    
    var vDois = parseInt(document.getElementById('valorDoisP').value);   
    var potencia = 1;
    var potenSoma = 1;
    var i = 0;

    while (i<vDois){
        potencia *= vUm;
        i++;
    }

    document.getElementById('resposta').innerHTML = "RESPOSTA <br>"+ potencia;
}

function reverso(){
    var palavra = document.getElementById('palavra').value;
    var aux;

    aux = palavra.split('').reverse().join('');
   
    document.getElementById('resposta').innerHTML = "RESPOSTA <br>"+ aux;    
}


function mostradiv(div) {
    var list = document.getElementsByClassName('exercicio')
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    }
    if (div == 'calculadora')
        document.getElementById('calculadora').style.display = 'block';
    if (div == 'multiplicacaoCSoma')
        document.getElementById('multiplicacaoCSoma').style.display = 'block';
        document.getElementById('resposta').innerHTML = "";
    if (div == 'potencia')
        document.getElementById('potencia').style.display = 'block';
        document.getElementById('resposta').innerHTML = ""
    if (div == 'reverso')
        document.getElementById('reverso').style.display = 'block';
        document.getElementById('resposta').innerHTML = ""
}