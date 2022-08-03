let theNumber = Number(prompt("Select Num"));
console.log("Your number is the square root of:  " + theNumber * theNumber);

let theNumber = Number(prompt("Select a num"));
if (!Number .isNaN(theNumber)) {
    console.log("Your number is the square root of: " + theNumber * theNumber)
}

//Con esta modificación, si ingresas la palabra “loro”, no se mostrara ninguna salida.La palabra clave if ejecuta u omite una declaración dependiendo del valor de una expresión booleana. La expresión decisiva se escribe después de la palabra clave, entre paréntesis, seguida de la declaración a ejecutar.La función Number.isNaN es una función estándar de JavaScript que retorna true solo si el argumento que se le da es NaN. Resulta que la función Number devuelve NaN cuando le pasas un string que no representa un número válido. Por lo tanto, la condición se traduce a “a menos que elNumero no sea un número, haz esto”


//if 

let theNumber = Number(prompt("Select a number"));
if (!Number .isNaN(theNumber)) {
    console.log("Your number is the square root of: " + theNumber * theNumber)
} else {
    console.log("Hey, where it's my number?");
}

//if else

let number = Number(prompt("Select a number"));
if (number < 10 ) {
    console.log("Small");
} else if (number < 100) {
    console.log("Medium");
} else {
    console.log("Big");
}

