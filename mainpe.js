let nombre = prompt("Ingresar nombre");
alert("Bienvenido " + nombre + " Ahora ingresa tu edad para continuar");

let edad = prompt("Ingresar edad");
if(edad >=18 && edad <=50) {
    if(confirm("Has cumplido con las 2 condiciones necesarias. Deseas iniciar el juego?")) {
        alert("Preparate para comenzar a jugar")
    }
    else {
        alert("Más confianza para la próxima")
    }
}
else {
    alert("No puedes jugar a este juego")
}

alert("Primer juego");
const respuesta1 = "Banana";

alert("Pista 1: La planta que da este fruto pertenece a las herbácea rizomatosa")
alert("Pista 2: Es rica en nutrientes como vitaminas A, B, C y E, y minerales como potasio, magnesio, selenio, calcio y hierro")
alert("Pista 3: Mientras m´+as negra posee más azucar, mientras más blanca más vitaminas")

let respuestajuego1 = prompt("Ingresa tu respuesta");

while(respuestajuego1 != respuesta1) {
    respuestajuego1 = prompt("La respuesta es incorrecta, vuelve a intentarlo")
}

console.log("suma 10 puntos del primer juego");

alert("Segundo juego");

const usuarios = [
    {nombre1: "Ana", Edad: 18},
    {nombre: "Carlos", Edad: 20},
    {nombre: "Soledad", Edad: 19},
    {nombre: "Juan", Edad: 21},
]

alert("Pista 1: Ana es mayor que Soledad")
alert("Pista 2: Ana es mayor de edad y menor que Carlos")
alert("Pista 3: Carlos es el primo menor de Juan")
alert("Afirmación 1 falsa, afirmación 2 verdadera, afirmación 3 verdadera")

for (let i = 0; i < usuarios.length; i++ ) {
    if(usuarios[i].Edad >= 18 && usuarios[i].nombre1 == prompt("ingrese el nombre")) {
        console.log("suma 10 puntos del segundo juego");
        break;
    }

    else{
        console.log("Pasa al siguiente nivel pero sin sumar puntos");
    }
}

alert("Tercer juego");

alert("¿Cuál es la velocidad de la luz? 1.28000km/h 2.300000km/s 3.28000m/s");

const desafio3 = ["28000km/h", "300000km/s", "28000m/s"];
let respuestajuego3 = parseInt(prompt("Ingresa tu respuesta: 0, 1, 2"));

if(desafio3[respuestajuego3] === "300000km/s") {
    console.log("Suma 10 puntos del tercer desafio")
}

else {
    console.log("No suma puntos del tercer desafio")
}

alert("Terminaste el juego");

/*DESARROLLAR LA SUMA DE LOS PUNTOS TOTALES. LOS INTENTOS NO FUNCIONAN

let resultado = sumar(10, 10, 10);
console.log("El resultado total es " + resultado);
alert("El resultado es " + resultado);

let respuestacorrecta = 10;
let respuestaincorrecta = 0;
let resultado = ()

function sumar(a, b, c) {
    return a+b+c;
}
*/