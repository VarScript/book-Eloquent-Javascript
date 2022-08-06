//Building an object

let day1 = {
    squirrel: false,
    events: ["work", "i touch a tree", "Pizza", "go for a run"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

let descriptions = {
    work: "i went to work",
    "i touch a tree" : "i touch a tree"
};


//delete operador unario

let anObject = {letf: 1, right: 2}
console.log(anObject.letf);
// → 1

delete anObject.letf;
console.log(anObject.letf);
// → undefined
console.log("letf" in anObject);
// → flase
console.log("right" in anObject);
// → true


//Mostrar propiedades del objeto

console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]


//Copiar propiedades del objeto

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
console.log(typeof[objectA]);
// → object


let daily = [
    {events: ["work", "i touch a tree", "piza", "i went out to run", "tv"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lasagna", "i touch a tree", "i brushed the tooths"],
    squirrel: false},
    {events: ["weekend", "i mounted the bike", "rest", "walnuts", "beer"],
    squirrel: true},
    /* y asi susecivamente*/
];
console.log(daily);
