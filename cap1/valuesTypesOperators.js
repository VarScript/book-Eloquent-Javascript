//==========Strings==========


`Debajo en el mar`
"Descansa en el océano"
'Flota en el océano'

"Esta es la primera linea\nY esta es la segunda"

    //Esta es la primera linea
    //Y esta es la segunda

"con" + "cat" + "e" + "nar"

`la mitad de 100 es ${100 / 2}`




//==========Operadores unarios==========

console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

console.log(- (10 - 2))
// → -8


//==========Valores Booleanos==========

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false


//las letras mayúsculas son siempre “menores que” las letras minúsculas, asíque "Z" < "a", y caracteres no alfabéticos (como !, - y demás) son tambiénincluidos en el ordenamiento
console.log("Aardvark" < "Zoroaster")
// → true



//Otros operadores similares son >= (mayor o igual que), <= (menor o igual que), == (igual a), y != (no igual a).
    console.log("Itchy" != "Scratchy")
    // → true
    console.log("Manzana" == "Naranja")
    // → false
    

//Solo hay un valor en JavaScript que no es igual a si mismo, y este es NaN(“no es un número”).
console.log(NaN == NaN)
// → false


//El operador && representa el operador lógico and. Es un operador binario, ysu resultado es verdadero solo si ambos de los valores dados son verdaderos.
console.log(true && false)
// → false
console.log(true && true)
// → true


//El operador || representa el operador lógico or. Lo que produce es verdadero si cualquiera de los valores dados es verdadero.
console.log(false || true)
// → true
console.log(false || false)
// → false


//El ultimo operador lógico que discutiremos no es unario, tampoco binario,sino ternario, esto es, que opera en tres valores. Es escrito con un signo deinterrogación y dos puntos, de esta forma:
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
//Este es llamado el operador condicional (o algunas veces simplemente operador ternario ya que solo existe uno de este tipo). El valor a la izquierda delsigno de interrogación “decide” cual de los otros dos valores sera retornado.Cuando es verdadero, elige el valor de en medio, y cuando es falso, el valor dela derecha.


//JavaScript es débilmente tipado
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("cinco" * 2)
// → NaN
console.log(false == 0)
// → true

//Resumen
//Observamos cuatro tipos de valores de JavaScript en este capítulo: números,textos (strings), Booleanos, y valores indefinidos.Tales valores son creados escribiendo su nombre (true, null) o valor (13,"abc"). Puedes combinar y transformar valores con operadores. Vimos operadores binarios para aritmética (+, -, *, /, y %), concatenación de strings (+),comparaciones (==, !=, ===, !==, <, >, <=, >=), y lógica (&&, ||), así tambiéncomo varios otros operadores unarios (- para negar un número, ! para negarlógicamente, y typeof para saber el valor de un tipo) y un operador ternario(?:) para elegir uno de dos valores basándose en un tercer valor.Esto te dá la información suficiente para usar JavaScript como una calculadora de bolsillo, pero no para mucho más. El próximo capitulo empezará ajuntar estas expresiones para formar programas básicos.