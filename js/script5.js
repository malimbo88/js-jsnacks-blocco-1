//myJavaScript4

//Crea un array di numeri.
var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//Crea due ID HTML uno rosso e uno verde.
var rosso = document.getElementById("rosso");
var verde = document.getElementById("verde");

//Distingui i numeri pari da quelli dispari contenuti in array
for (var count = 0; count < array.length; count++) {

  //stampiamo in ID rosso i numeri dispari.
  //Stampiamo in ID verde i numeri pari.
  if (array[count] % 2 === 0) {
  console.log(array[count] + " pari")
  verde.innerHTML += " " + array[count];
 }else {
  console.log(array[count] + " dispari")
  rosso.innerHTML += " " + array [count];
  }

}

 //stampiamo in ID rosso i numeri dispari.
 //Stampiamo in ID verde i numeri pari.
