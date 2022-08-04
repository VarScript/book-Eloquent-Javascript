
//La pila de llamadas
function saludar(quien) {
    console.log("Hola " + quien);
}
saludar("Harry");
console.log("Adios");
/*We could show the flow of control schematically like this:
no en una función
en saludar
en console.log
en saludar
no en una función
en console.log
no en una función
*/


//Cuando le hacemos preguntas dificiles a la computadora se puede llenar el espacio de la pila y mostrara mensajes de error:
function gallina() {
    return huevo();
}
function huevo() {
    return gallina();
}
console.log(gallina() + " vino primero.");
// → ??



function cuadrado(x) { return x * x; }
console.log(cuadrado(4, true, "erizo"));
// → 16
//Definimos cuadrado con solo un parámetro. Sin embargo, cuando lo llamamos con tres, el lenguaje no se queja. Este ignora los argumentos extra y calcula el cuadrado del primero.
function menos(a, b) {
if (b === undefined) return -a;
else return a - b;
}
console.log(menos(10));
// → -10
console.log(menos(10, 5));
// → 5


//Si este no es proporcionado o si pasas el valor undefined, este se establecerá en dos y la función se comportará como cuadrado.
function potencia(base, exponente = 2) {
let resultado = 1;
for (let cuenta = 0; cuenta < exponente; cuenta++) {
resultado *= base;
}
return resultado;
}
console.log(potencia(4));
// → 16
console.log(potencia(2, 6));
// → 64

//Cierre
function envolverValor(n) {
let local = n;
return () => local;
}
let envolver1 = envolverValor(1);
let envolver2 = envolverValor(2);
console.log(envolver1());
// → 1
console.log(envolver2());
// → 2

function multiplicador(factor) {
return numero => numero * factor;
}
let duplicar = multiplicador(2);
console.log(duplicar(5));
// → 10

