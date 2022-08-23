/*
if (condicion) {
  //bloque verdadero
} else {
  //bloque falso
}
*/

/* OPERADORES LOGICOS
== Es igual a...
> Mayor a...
>= Mayor o igual a...
< Menor a...
<= Menor o igual a...
|| OR --> una u otra condicion
&& AND --> una y otra condicion
!== Distinto

*/
/*
const puntaje = "1000";

if (puntaje === "1000") {
  console.log("Es igual");
} else {
  console.log("No es igual");
}

const dinero = 600;
const totalAPagar = 500;

if (dinero >= totalAPagar) {
  console.log("Podemos pagar");
} else {
  console.log("Fondos insuficientes");
}


const dinero = 300;
const totalAPagar = 800;
const tarjeta = false;

if (dinero > totalAPagar) {
  console.log("Podemos pagar");
} else if (tarjeta) {
  console.log("Puedo abonar porque tengo tarjeta");
} else {
  console.log("Fondos insuficientes");
}
*/
/*
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalAPagar = 600;

if (
  efectivo > totalAPagar ||
  credito > totalAPagar ||
  disponible > totalAPagar
) {
  console.log("Podemos comprar");
} else {
  console.log("Fondos insuficientes");
}

let precio = prompt("Ingrese el precio del producto: ");

if (precio >= 100) {
  alert("El producto es muy costoso");
} else if (precio >= 50) alert("El producto es caro");
else {
  alert("El precio del producto es accesible");
}

let nombreAlumno = prompt("Ingrese el nombre del alumno");
let apellidoAlumno = prompt("Ingrese el apellido del alumno");

if (nombreAlumno !== " " && apellidoAlumno !== " ") {
  alert("Nombre del alumno: " + nombreAlumno + " Apellido: " + apellidoAlumno);
} else {
  alert("No ingreso datos");
}
*/

/*
Tabla de Verdad del operador &&

X | Y | X&&Y  
t | t | t
t | f | f
f | t | f
f | f | f

Tabla de Verdad del operador || OR

X | Y | X||Y
t | t | t
t | f | t
f | t | t
f | f | f

*/
