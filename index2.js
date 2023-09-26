let year= prompt("Introduce un año",0);

function esBisiesto(year) {
  if((year%4===0 && year%100!==0) || (year%400===0)){
    return true
  }
  return false
}

  







function contarCaracteres(arrayPalabras, caracter) {
  // Tu código aquí
  let contador = 0;
  for (let i = 0; i < arrayPalabras.length; i++) {
    for (let j = 0; j < arrayPalabras[i].length; j++) {
      if (arrayPalabras[i][j] === caracter) {
        contador++;
      }
    }
  }
  return contador;
}

contarCaracteres(["hola", "mama", "papa"], "a");



function contarCaracteres2(arrayPalabras2, caracter2) {
  let contador2 = 0;
    // Tu código aquí
    arrayPalabras2 = arrayPalabras2.join("");
    for (let i = 0; i < arrayPalabras2.length - 1; i++) {
      if (arrayPalabras2[i] === caracter2) {
        contador2 = contador2 + 1;
      }
    }
    return contador2;
  }
 
  
  

contarCaracteres2(["hola", "mama", "papa"], "a");