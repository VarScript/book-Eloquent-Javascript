//aunque dos objetos le apunten al mismo valor, tienen vidas separadas :'(

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

//lso contenidos de const pueden cambiar

const punctuacion = {visitors: 0, locals: 0};
// → this is right
punctuacion.visitors = 1;
// this is'n permitted
punctuacion = {visitors: 1, locals: 1};