// 6.a Función suma básica
function suma(a, b) {
  return a + b;
}
var resultadoA = suma(10, 5);
console.log("6.a) Resultado suma:", resultadoA);

// 6.b Validar si los parámetros son números
function sumaValidada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("6.b) Error: uno de los parámetros no es un número");
    return NaN;
  }
  return a + b;
}
var resultadoB = sumaValidada(10, "x");
console.log("6.b) Resultado validado:", resultadoB);

// 6.c Validar si es entero
function validateInteger(n) {
  return Number.isInteger(n);
}
console.log("6.c) ¿5 es entero?", validateInteger(5)); // true
console.log("6.c) ¿5.5 es entero?", validateInteger(5.5)); // false

// 6.d Suma con validación de enteros (redondeo)
function sumaConEnteros(a, b) {
  if (!validateInteger(a)) {
    alert("6.d) Error: a no es entero. Se redondea.");
    a = Math.round(a);
  }
  if (!validateInteger(b)) {
    alert("6.d) Error: b no es entero. Se redondea.");
    b = Math.round(b);
  }
  return a + b;
}
var resultadoD = sumaConEnteros(10.7, 3.2);
console.log("6.d) Suma con enteros:", resultadoD);

// 6.e Validación separada
function corregirDecimal(n) {
  if (!validateInteger(n)) {
    alert("6.e) Número con decimales detectado. Se redondea.");
    return Math.round(n);
  }
  return n;
}

function sumaFinal(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("6.e) Error: uno de los parámetros no es un número");
    return NaN;
  }
  a = corregirDecimal(a);
  b = corregirDecimal(b);
  return a + b;
}

var resultadoE = sumaFinal(4.4, "hola");
console.log("6.e) Resultado final:", resultadoE);
