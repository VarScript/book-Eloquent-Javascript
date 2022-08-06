//values functions

let ouch = "Ouch";
console.log(typeof ouch.toUpperCase);
// → function
console.log(ouch.toUpperCase());
// → OUCH
console.log(ouch.toLowerCase());
// → ouch


//dos métodos que puedes usar para manipular arrays:

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]
