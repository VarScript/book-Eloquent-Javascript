//Funciones crecientes, programa que calcula el numero de vacas y de pollos
function printFramInventory (cows, chickens) {
    let stringCow = String(cows);
    while (stringCow.length < 3) {
        stringCow = "0" + stringCow;
    }
    console.log(`${stringCow} Cows`)
    let stringChicken = String(chickens) 
    while (stringChicken.length < 3) {
        stringChicken = "0" + stringChicken;
    }
    console.log(`${stringChicken} Chickens`);
}
printFramInventory(7,11)
//ahora quieren agregar cerdos y queremos hacer mejor el programa
function printPaddedLabelWithZeros (num, label) {
    let stringNumber = String(num);
    while(stringNumber.length < 3) {
        stringNumber = "0" + stringNumber;
    }
    console.log(`${stringNumber} ${label}`);
}

function printFarmInventory (cows, chickens, pigs) {
    printPaddedLabelWithZeros(cows, "Cows");
    printPaddedLabelWithZeros(chickens, "Chickens");
    printPaddedLabelWithZeros(pigs, "Pigs");
}
printFarmInventory(7, 11, 3);

//pero se puede mejorar aun mas

function paddedWithZeros (num, amplitude) {
    let string = String (num);
    while (string.length < amplitude) {
        string = "0" + string;
    }
    return string;
}
function printFarmInventory (cows, chickens, pigs) {
    console.log(`${paddedWithZeros(cows, 3)} Cows`);
    console.log(`${paddedWithZeros(chickens, 3)} Chickens`);
    console.log(`${paddedWithZeros(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);

//Las funciones se pueden dividir aproximadamente en aquellas que se llaman por su efectos secundarios y aquellas que son llamadas por su valor de retorno.