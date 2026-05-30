//Operadores Matemáticos

let a, b ;
let c, d;

let suma, resta, multiplicacion, division, residuo, potencia;

//Obtener los datos atraves del usuario
a = prompt("Ingrese un numero: ");
b = prompt("Ingrese otro numero: ");

//Resultado de las operaciones
suma = a + b; // Aqui la operacion da un error debido a que se concadenan los datos.
document.write("La suma es: ", suma, "<br>");
console.log("La suma es: ", suma);

resta = a - b;
document.write("La resta es: ", resta, "<br>");
console.log("La resta es: ", resta);

multiplicacion = a * b;
document.write("La multiplicacion es: ", multiplicacion, "<br>");
console.log("La multiplicacion es: ", multiplicacion);

division = a / b;
document.write("La division es: ", division, "<br>");
console.log("La division es: ", division);

residuo = a % b;
document.write("El residuo es: ", residuo, "<br>");
console.log("El residuo es: ", residuo);

potencia = a ** b;
document.write("La potencia es: ", potencia, "<br>");
console.log("La potencia es: ", potencia);


//Obtener los datos a traves del usuario
c = parseInt(prompt("Ingrese un numero: "));
d = parseFloat(prompt("Ingrese otro numero: "));

suma = c + d
resta = c - d
multiplicacion = c * d
division = c / d
residuo = c % d
potencia = c ** d

document.writeln("Los resultados de las operaciones son: ", 
  "suma: ", suma, "<br>",
  " resta: ", resta, "<br>",
  " multiplicacion: ", multiplicacion, "<br>",
  " division: ", division, "<br>",
  " residuo: ", residuo, "<br>",
  " potencia: ", potencia, "<br>"
);