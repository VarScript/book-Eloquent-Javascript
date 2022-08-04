//El capítulo anterior introdujo la función estándar Math.min que devuelve su argumento más pequeño. Nosotros podemos construir algo como eso ahora. Escribe una función min que tome dos argumentos y retorne su mínimo.

function min(a,b) {
    if (a<b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(4,5));

//Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.

function esPar(num) {
    if (num < 0) {
        return esPar(-num);
    } else if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else {
        return esPar(num - 2);
    }
}

console.log(esPar(50));
console.log(esPar(75));
console.log(esPar(-1));

//otra forma 

function esPar(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return esPar(-n)
    else return esPar(n - 2)
}

console.log(esPar(50));
console.log(esPar(75));
console.log(esPar(-1));

//Escribe una función contarFs que tome un string como su único argumento y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya en el string.

function string(letr) {
    return letr[1];
}
console.log(string("holi"));

let string = "cuantos";
console.log(string.length);


//exercise
let countC = "";
let count = 0;
let string = "LocAs"
let mayus = "ABCDFGHIJKLMNOPQRSTUVWXYX"
function contarFs () {
    for (i = 0; i < string.length; i++) {
        for (x = 0; x < mayus.length; x++ ) {
            if (string[i] === mayus[x]){
                count += 1;
            }
        }
    }
    return count;
}

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

console.log(countChar("Holaaa", "a"));
console.log(contarFs());

//Book

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBCITA"));
console.log(countChar("kkkaroto", "k"));