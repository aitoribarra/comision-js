/*
function solicitarNombre() {
  let nombre = prompt("Ingrese su nombre");
  console.log(`El nombre del usuario es: ${nombre}`);
}

solicitarNombre();

function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
    return resultado;
}

console.log(sumar(1, 3));

*/
/*
let numero1 = Number(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));

function suma(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = suma(numero1, numero2);

console.log(resultado);

function saludar(nombre = "desconocido", apellido = " ") {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar();

*/
/*
let primerNumero = 0;
let segundoNumero = 0;

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
      break;
    case "-":
      return primerNumero - segundoNumero;
      break;
    case "*":
      return primerNumero * segundoNumero;
      break;
    case "/":
      return primerNumero / segundoNumero;
      break;
    default:
      return 0;
      break;
  }
}
console.log(calculadora(20, 30, "*"));

*/

// VARIABLE GLOBAL VS. VARIABLE LOCAL
/*
let mensaje = "Mensaje de prueba";
function crearMensaje() {}

console.log(mensaje);
*/

/*

inciarApp();

function inciarApp() {
  console.log("Iniciando App...");

  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda funcion");

  usuarioAutenticado;
}

function usuarioAutenticado() {
  console.log("Autenticando usuario... Espere...");
  console.log("Usuario autenticado exitosamente");
}

*/

//Funciones flecha
/*
const aprendiendo = () => "Aprendiendo...";

console.log(aprendiendo());

const saludo = function () {
    return "Hola";
};

console.log(saludo());

let producto = function (a, b) {
    return a * b;
};

let resultado = producto(3, 6);

console.log(resultado);
*/
