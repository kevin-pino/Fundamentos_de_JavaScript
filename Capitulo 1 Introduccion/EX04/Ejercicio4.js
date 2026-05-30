let nombre, edad, direccion, telefono, email; //Se pueden declarar varias variables en una sola línea mientras sean del mismo tipo de dato.

//prompt es una palabra reservada en js que despliega una funcion y sale un mensaje de tipo alert para el usuario.

nombre = prompt("Escriba su nombre:"); //Pedir datos al usuario.
document.write("Bienvenido: ", nombre, "<br>"); //Escribir en el documento.
console.log("Bienvenido: ", nombre); 

edad = prompt("Escriba su edad:"); //Pedir datos al usuario.
document.write("Tu Edad: ", edad , "<br>");
console.log("Tu Edad: ", edad); 

direccion = prompt("Escriba su dirección:"); //Pedir datos al usuario.
document.write("Tu Dirección: ", direccion, "<br>");
console.log("Tu Dirección: ", direccion); 

telefono = prompt("Escriba su teléfono:"); //Pedir datos al usuario.
document.write("Tu Teléfono: ", telefono, "<br>");
console.log("Tu Teléfono: ", telefono); 

email = prompt("Escriba su email:"); //Pedir datos al usuario.
document.write("Tu Email: ", email, "<br>");
console.log("Tu Email: ", email);