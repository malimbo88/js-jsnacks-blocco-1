//myJavaScript3
//btn
var btn = document.getElementById("button_gen");
//stampare
rosso = document.getElementById("rosso");
verde = document.getElementById("verde");

//Crea due array che hanno un numero di elementi diversi.
var arrayA = []
var arrayB = []
var counterStart = 1;
var counterRange = 10;
//Aggiungi elementi casuali all’array che ha meno elementi.
//Fai in modo che i due array.length siaano uguali.

//Creo evento input_btn
//Stampo a schermo in seguito a evento btn
btn.addEventListener("click",
function(){
  //creo i due array tramite la funzione precedentemente creata
  //STAMPA DUE ARRAY DI DIVERSE DIMENSIONI
  verde.innerHTML = "[" + arrayRandom(arrayA, 1, 10, 1, 10) + "]" + " - " + "[" + arrayRandom(arrayB, 1, 10, 1, 10) + "]";

  //STAMPA ARRAY FINALE CON INDENTICHE DIMENSIONI
  rosso.innerHTML = arrayLength(arrayA, arrayB);
}
);

//FUNZIONI
//genera numeri casuali da rangeMin a rangeMax
//bisogna inserire come argomenti rangeMin e rangeMax del numero
//ritorna un numero
function generateElement(rangeMinElement, rangeMaxElement) {
  elementoCasuale = Math.floor(Math.random() * rangeMaxElement) + rangeMinElement;
  return elementoCasuale
}

//crea un array con un numero casuale di elementi
//attraverso un argomento stabilisco il range numerico per array.length(counterRange)
//ritorna un array che abbia .length casuale e popolato da numeri casuali
function arrayRandom(array, rangeMinCounter, rangeMaxCounter) {
  //determino una lunghezza casuale da assegnare a un array
  var arrayLength = Math.floor(Math.random() * counterRange) + rangeMinCounter;
  // console.log("Range MIN lunghezza array: " + rangeMinCounter)
  // console.log("Range MAX lunghezza array: " + rangeMaxCounter)
  // console.log("lunghezza array: " + arrayLength)

  //popolo l'array di numeri casuali
  var counter = 0;
  while(counter < arrayLength) {
    var randomNumber = generateElement(1, 10);
     //console.log("counter: " + counter)
     //console.log("elemento casuale Prima: " + elementoCasuale)

    //se il numero generato NON e' gia' presente in array faccio push in array
    if (!array.includes(randomNumber)) {
    array.push(randomNumber);
    //console.log("array Counter: " + array[counter])
    //console.log("Faccio PUSH: " + elementoCasuale)
    counter++
  }else {
    //console.log("NON Faccio PUSH: " + elementoCasuale)
  }

  }

   //console.log("array: " + array)

   return array
}

//confronto la lunghezza di due array
//se il primo e' piu' lungo aggiungo quanti elementi servono al secondo array per uguagliare la lunghezza del primo
//se il secondo e' piu' lungo aggiungo quanti elementi servono al primo array per uguagliare la lunghezza del secondo
//ritorna due array
function arrayLength (arrayPrimo, arraySecondo) {
  var randomNumber = 0;
  while(arrayPrimo.length > arraySecondo.length) {
    randomNumber = generateElement(1, 10);

    if (!arraySecondo.includes(randomNumber)) {
    arraySecondo.push(randomNumber)
    //console.log("PUSH array secondo: " + randomNumber)
    }
  }

  while(arrayPrimo.length < arraySecondo.length) {
    randomNumber = generateElement(1, 10)

    if (!arrayPrimo.includes(randomNumber)) {
    arrayPrimo.push(randomNumber)
    //console.log("PUSH array primo: " + randomNumber)
    }
  }

  return "[" + arrayPrimo + "]" + " - " + "[" + arraySecondo + "]";
}
