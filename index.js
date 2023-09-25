//1
const arrayVacio = [];
//2
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3
const arrayNumerosPares = [0, 2, 4, 6, 8];
//4
const arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];
//5
function suma(a, b) {
  return a + b;
}
//6
function potenciacion(a, b) {
  return a ** b;
}
//const potenciacion = (a, b) => c**d;

//7 VER
let myArray = [];
function separarPalabras(str) {
  return myArray.push[str.split("")];
}
console.log(separarPalabras("hola mundo"));

//8
// function repetir

/* Este problema fue planteado por Apple. Dada una lista ordenada de números enteros, eleva al cuadrado los elementos y proporciona el resultado en orden.
Por ejemplo, dado [-9, -2, 0, 2, 3], devuelve [0, 4, 4, 9, 81].
 */

/* let array1=[9,8,7,6,4];
let array2=[]
for(let i=0; i<= array1.length-1;i++){
    array2.push(array1[i]**2);
    array2.sort((a,b)=>a-b);
}
console.log(array2)

// Crea una función que pida un número por teclado y devuelva su tabla de multiplicar en un array.
// Ejemplo --> Tabla del 3 --> ["3x1=3","3x2=6","3x3=9","3x4=12","3x5=15","3x6=18","3x7=21","3x8=24","3x9=27","3x10=30"]

let numero = prompt("Introduce un numero",0);
let arrayTabla=[];

function tabla(num){
    for(let i=1; i<=10;i++){
    arrayTabla.push(`${numero} X ${[i]} = ${numero*[i]}`);
    }
    return arrayTabla;
}

 */

// tabla();
// console.log(arrayTabla);
