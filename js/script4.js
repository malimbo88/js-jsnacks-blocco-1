//myJavaScript3
var elementoCasuale = 0;
var counterArrayA = Math.floor(Math.random() * 10) + 1;
console.log("counter ArrayA " + counterArrayA)
var counterArrayB = Math.floor(Math.random() * 10) + 1;
console.log("counter ArrayB " + counterArrayB)
//Crea due array che hanno un numero di elementi diversi.
var arrayA = [];
var arrayB = [];

while(arrayA.length < counterArrayA) {
  elementoCasuale = Math.floor(Math.random() * 10) + 1;
  arrayA.push(elementoCasuale);
}

while(arrayB.length < counterArrayB) {
  elementoCasuale = Math.floor(Math.random() * 10) + 1;
  arrayB.push(elementoCasuale);
}

console.log("array A " + arrayA)
console.log("array B " + arrayB)

//Aggiungi elementi casuali all’array che ha meno elementi.
//Fai in modo che i due array.length siaano uguali.


while(arrayA.length < arrayB.length) {
  var elementoCasuale = Math.floor(Math.random() * 10) + 1;
  arrayA.push(elementoCasuale)
}

console.log("Nuovo arrayA " + arrayA)

while(arrayA.length > arrayB.length) {
  var elementoCasuale = Math.floor(Math.random() * 10) + 1;
  arrayB.push(elementoCasuale)
}

console.log("Nuovo arrayB " + arrayB)
