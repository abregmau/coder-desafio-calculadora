//Se definen variables
var mem = 0;
var operando = 0;
var operador = "";

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var coma = document.getElementById('coma');
}

//Eventos de click
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
coma.onclick = function(e){
    if(resultado.textContent.lastIndexOf('.')==-1)
        resultado.textContent = resultado.textContent  + ".";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operando = resultado.textContent;
    resolver();
    operador = "+";
    limpiar();
}
resta.onclick = function(e){
    operando = resultado.textContent;
    resolver();
    operador = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operando = resultado.textContent;
    resolver();
    operador = "*";
    limpiar();
}
division.onclick = function(e){
    operando = resultado.textContent;
    resolver();
    operador = "/";
    limpiar();
}
igual.onclick = function(e){
    operando = resultado.textContent;
    resolver();
    resultado.textContent = mem;
    operador = "";
}

//Se definen las funciones

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    mem = 0;
    operando = 0;
    operador = "";
}

function resolver(){
    var res = 0;
    switch(operador){
    case "+":
        res = parseFloat(mem) + parseFloat(operando);
        break;
    case "-":
        res = parseFloat(mem) - parseFloat(operando);
        break;
    case "*":
        res = parseFloat(mem) * parseFloat(operando);
        break;
    case "/":
        res = parseFloat(mem) / parseFloat(operando);
        break;
    case "":
        res = parseFloat(operando)
        break;
    }
    mem = res;
}