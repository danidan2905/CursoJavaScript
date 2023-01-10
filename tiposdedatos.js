// Tipos de datos

// Numérico: entero o decimal (integer o float)

var edad = 19;
var promedio = 18.56;

// String: cadena de texto

var nombre = "<b>Heisenberg</b>";
var apellido = "the man who <b>knocks</b><br>";

var texto = "I am " + nombre + ", " + apellido;

document.write(texto);

// Arreglos: colección de varios elementos de diferentes tipos

var paises = ["España", "Alemania", "Portugal", "Inglaterra", 19, 20];

document.write(paises[4] + "<br>");

// Objetos: variables con propiedades (según yo xd)

var objeto1 = {
    sexo: "hombre",
    edad: 22,
}

var objeto2 = {sexo:"mujer", edad:20}
// Son como los diccionarios en python

// Booleano: Sólo almacenan dos valores, true o false

var a = true;
var b = false;

// Undefined: variable que no posee valor

var z;

document.write(z + "<br>");

// Null: cuando se desea borrar el valor a una variable

var x = 10;
var x = null;

// NaN: para valores inválidos

var c = "Hola";
document.write(c * 2);