//este código define cuadrado para referirse a una función que produce el cuadrado de un número dado:
//palabra clave function
//parametro x
const cuadrado = function(x) {
    return x * x;
};
console.log(cuadrado(12));
// → 144

//Una función puede tener múltiples parámetros o ningún parámetro en absoluto. En el siguiente ejemplo, hacerSonido no lista ningún nombre de parámetro, mientras que potencia enumera dos:
const doSound = function() {
    console.log("Pling!");
};

doSound();
// → Pling!

const power = function(base, exponent) {
    let result = 1;
    for (let acount = 0; acount < exponent; acount++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));
// → 1024






















