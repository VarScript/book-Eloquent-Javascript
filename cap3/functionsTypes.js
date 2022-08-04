//A las funciones se les puede asignar nuevo valor, asi:
let lanzarMisiles = function() {
    sistemaDeMisiles.lanzar("ahora");
    };
    if (modoSeguro) {
    lanzarMisiles = function() {/* no hacer nada */};
    }


//forma sencilla de nombrar una funcion
function cuadrado(x) {
return x * x;
}
console.log(cuadrado(4));
//Esta es una declaración de función


//Este código funciona, aunque la función esté definida debajo del código que lo usa
console.log("El futuro dice:", futuro());
function futuro() {
return "Nunca tendran autos voladores";
}


//Funciones de flecha
const potencia = (base, exponente) => {
        let resultado = 1;
        for (let cuenta = 0; cuenta < exponente; cuenta++) {
            resultado *= base;
        }
        return resultado;
    };
    
// estas dos definiciones de cuadrado hacen la misma cosa:
const cuadrado1 = (x) => { return x * x; };
const cuadrado2 = x => x * x;

//Cuando no tiene parametros
const bocina = () => {
    console.log("Toot!")
}
