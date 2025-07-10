// 4.a Número aleatorio entre 0 y 1 y mostrar alerta
var numeroAleatorio = Math.random();
if (numeroAleatorio >= 0.5) {
  alert("4.a) Greater than 0.5");
} else {
  alert("4.a) Lower than 0.5");
}
console.log("4.a) Número generado:", numeroAleatorio);

// 4.b Clasificación por edad
var age = Math.floor(Math.random() * 101); 

if (age < 2) {
  alert("4.b) Edad: " + age + " → Bebé");
} else if (age < 13) {
  alert("4.b) Edad: " + age + " → Niño");
} else if (age < 20) {
  alert("4.b) Edad: " + age + " → Adolescente");
} else if (age < 31) {
  alert("4.b) Edad: " + age + " → Joven");
} else if (age < 61) {
  alert("4.b) Edad: " + age + " → Adulto");
} else if (age < 76) {
  alert("4.b) Edad: " + age + " → Adulto mayor");
} else {
  alert("4.b) Edad: " + age + " → Anciano");
}
