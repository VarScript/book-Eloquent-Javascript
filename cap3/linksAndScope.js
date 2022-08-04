//Vinculaciones y alcances, exsisten dos tipos de vinculaciones, globales y locales, las globales sirven para tood el codigo, las locales solo para la funcion o el ciclo en donde se esta declarando, var se pasa esta regla, pro eso no se usa en las versiones actuales
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
console.log(x + y + z);
// → 60
}
// y no es visible desde aqui
console.log(x + z);
// → 40

// cuando el código dentro de la función dividirEnDos se refiera a numero, estara viendo su propio numero, no el numero en el alcance global.
const dividirEnDos = function(numero) {
return numero / 2;
};
let numero = 10;
console.log(dividirEnDos(100));
// → 50
console.log(numero);
// → 10

//Alcance anidado, JavaScript no solo distingue entre vinculaciones globales y locales. Bloques y funciones pueden ser creados dentro de otros bloques y funciones, produciendo múltiples grados de localidad.

const humus = function(factor) {
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, "Can", "Chickpeas");
    ingredient(0.25, "Cup", "Tahini");
    ingredient(0.25, "Cup", "Juice lemon");
    ingredient(1, "Nail", "Garlic");
    ingredient(2, "Tablespoon", "Olive oil");
    ingredient(0.5, "Teaspoonful", "Cumin");
}

//El código dentro de la función ingrediente puede ver la vinculación factor de la función externa. Pero sus vinculaciones locales, como unidad o cantidadIngrediente , no son visibles para la función externa.