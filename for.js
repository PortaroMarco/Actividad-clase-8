// 5.a Recorrer un array de 5 palabras y mostrar alertas
var palabras = ["profe", "por", "favor", "aprobame", "gracias"];
for (var i = 0; i < palabras.length; i++) {
  alert("5.a) Palabra: " + palabras[i]);
}

// 5.b Convertir la primera letra en mayúscula y mostrar alerta
for (var i = 0; i < palabras.length; i++) {
  var palabra = palabras[i];
  var capitalizada = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  alert("5.b) Capitalizada: " + capitalizada);
}

// 5.c Unir todas las palabras en una sola cadena
var sentence = "";
for (var i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
alert("5.c) Frase completa: " + sentence.trim());

// 5.d Crear array vacío y llenarlo del 0 al 9
var numeros = [];
for (var i = 0; i < 10; i++) {
  numeros.push(i);
}
console.log("5.d) Array con números del 0 al 9:", numeros);
