// 3.a Mostrar los meses 5 y 11
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("3.a) Mes 5:", meses[4]); // Mayo
console.log("3.a) Mes 11:", meses[10]); // Noviembre

// 3.b Ordenar alfabéticamente
var ordenados = [...meses].sort(); 
console.log("3.b) Orden alfabético:", ordenados);

// 3.c Agregar un elemento al principio y al final
var mesesC = [...meses];
mesesC.unshift("Inicio");
mesesC.push("Fin");
console.log("3.c) Agregado al principio y final:", mesesC);

// 3.d Quitar un elemento del principio y del final
var mesesD = [...mesesC];
mesesD.shift();
mesesD.pop();
console.log("3.d) Eliminado principio y final:", mesesD);

// 3.e Invertir el orden del array
var mesesInvertidos = [...meses].reverse();
console.log("3.e) Orden invertido:", mesesInvertidos);

// 3.f Unir todos los elementos con guiones
var unidosConGuion = meses.join(" - ");
console.log("3.f) Meses unidos:", unidosConGuion);

// 3.g Copiar desde Mayo hasta Noviembre
var copia = meses.slice(4, 11); // Mayo = índice 4, Noviembre = índice 10
console.log("3.g) Mayo a Noviembre:", copia);
