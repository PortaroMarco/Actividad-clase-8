// 2.a Convertir texto a mayúsculas
var textoA = "actividad clase 8";
console.log("2.a) Mayúsculas:", textoA.toUpperCase());

// 2.b Primeros 5 caracteres
var textoB = "desarrollo web";
var primerosCinco = textoB.substring(0, 5);
console.log("2.b) Primeros 5 caracteres:", primerosCinco);

// 2.c Últimos 3 caracteres
var textoC = "desarrollo web";
var ultimosTres = textoC.substring(textoC.length - 3);
console.log("2.c) Últimos 3 caracteres:", ultimosTres);

// 2.d Primera letra mayúscula, resto minúsculas
var textoD = "mARCO";
var resultadoD = textoD.substring(0,1).toUpperCase() + textoD.substring(1).toLowerCase();
console.log("2.d) Primera mayúscula:", resultadoD);

// 2.e Posición del primer espacio
var textoE = "lenguaje script";
var espacio = textoE.indexOf(" ");
console.log("2.e) Posición del espacio:", espacio);

// 2.f Dos palabras: primera letra mayúscula en ambas
var textoF = "marco portaro";
var espacioF = textoF.indexOf(" ");
var palabra1 = textoF.substring(0, espacioF);
var palabra2 = textoF.substring(espacioF + 1);

var resultadoF = palabra1.charAt(0).toUpperCase() + palabra1.slice(1).toLowerCase()
               + " " +
               palabra2.charAt(0).toUpperCase() + palabra2.slice(1).toLowerCase();

console.log("2.f) Ambas palabras capitalizadas:", resultadoF);
