//While
let num = 0;
while (num <= 12) {
    console.log(num);
    num = num + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

//Do

let yourName;
do {
    yourName = prompt("Who are you");
} while (!yourName);
console.log(yourName);

//Identacion del codigo, hacer que el codigo destaque abriendo nuevos bloque para que su estuctura sea sencilla de leer

if (false != true) {
    console.log("That haves sense");
    if (1 < 2) {
        console.log("No surprice there");
    }
}