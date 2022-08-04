//Recursion,Está perfectamente bien que una función se llame a sí misma, siempre que no lo haga tanto que desborde la pila
function potencia(base, exponente) {
    if (exponente == 0) {
    return 1;
    } else {
    return base * potencia(base, exponente - 1);
    }
    }
    console.log(potencia(3, 3));
    // → 8
//esta implementación tiene un problema: en las implementaciones típicas de JavaScript, es aproximadamente 3 veces más lenta que la versión que usa un ciclo.




function encontrarSolucion(objetivo) {
    function encontrar(actual, historia) {
        if (actual == objetivo) {
            return historia;
        } else if (actual > objetivo) {
            return null;
        } else {
         return encontrar(actual + 5, `(${historia} + 5)`) ||
         encontrar(actual * 3, `(${historia} * 3)`);
        }
    }
    return encontrar(1, "1");
}
        console.log(encontrarSolucion(13));
        // → (((1 * 3) + 5) * 3)



//Dos ejemplo mas sencillo de recursion
let cuentaAtras = numero => {
    //base case
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 1);
};
console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1

//segundo
let parImpar = (numero) => {
    if (numero === 0) {
        return 'Par';
    } else if (numero === 1) {
        return 'Impar';
    } else {
        return parImpar(numero - 2);
    }
};
console.log(parImpar(20)) // Par
console.log(parImpar(75)) // Impar
console.log(parImpar(98)) // Par
console.log(parImpar(113)) // Impar
