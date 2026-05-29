/*
var: se utiliza para declarar variables globales o locales, y se puede reasignar su valor posteriormente.

let: se utiliza para declarar variables que pueden ser reasignadas, pero no pueden ser redeclaradas dentro del mismo ámbito.

const: se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser reasignado después de su inicialización.
*/

var nombre; //declaracion de variable con var
nombre = "Juan"; //asignacion de valor a la variable nombre

var apellido = "Perez"; //declaracion y asignacion de valor a la variable apellido
var apellido = "Garcia"; //reasignacion de valor a la variable apellido

console.log(nombre); //imprime juan
console.log(apellido); //imprime perez

let edad = 30; //declaracion y asignar variable con let
console.log(edad); //imprime 30

edad = 31; //reasignacion de valor a la variable edad
console.log(edad); //imprime 31

const PI = 3.14; //declarar una costante
console.log(PI); //imprime 3.14