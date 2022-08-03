for (let num = 0; num <= 12; num = num + 2) {
    console.log(num);
}

let result = 1;
for (let count = 0; count < 10; count = count + 1) {
    result = result * 2;
}
console.log(result);

//Break the cycle

for (let actual = 20; ; actual = actual + 1) {
    if (actual % 7 == 0) {
        console.log(actual);
        break;
    }
}

//Updating bindings sunccintly

contador = contador + 1;
contador += 1;
//*= 2 para duplicar resultado o contador -= 1 para contar hacia abajo

for (let num = 0; num <= 12; num += 2) {
    console.log(num);
}

//Para contador += 1 y contador -= 1, hay incluso equivalentes más cortos:
contador++ , contador --

