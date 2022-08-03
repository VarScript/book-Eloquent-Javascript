//Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

//My Exercise
let nmr = "#";
for (let count = 0; count <= 6; count++) {
    if(count == 0){
        console.log(nmr);
    } else {
        nmr += "#";
        console.log(nmr);
    } 
}

//Book
let abc = "abc";
console.log(abc.length);
// → 3


for (let line = "#"; line.length < 8; line = line + "#")
  console.log(line);


//Me

for (let n = "#"; n.length <= 7; n +="#")
console.log(n);


//Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.


//My Exercise
for (let num = 1; num <= 100; num++){
    if (num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz");
    }else if (num % 3 == 0){
        console.log("Fizz");   
    } else if (num % 5 == 0) {
        console.log("Buzz");
    }else if(!(num % 3 == 0 && num % 5 == 0)) {
        console.log(num);
    }
}

//Book

for (let n = 1; n <= 20; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz"
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n)
}

//Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.

let tamano = 8;
let junta = "";

for (let x=0; x<tamano; x++){
    for (let y=0; y<tamano; y++){
        if((x+y) % 2 == 0){
            junta += " ";
        } else {
            junta += "#"
        }
    }
    junta += "\n";
}

console.log(junta);



let size = 8;
let board = ""

for (let x = 0; x < size; x++){
    for (let y = 0; y < size; y++){
        if ((x + y) % 2 == 0) {
           board += "a"
        } else {
            board += "B"
        }
    }
    board += "\n";
}

console.log(board);

