//myJavaScript
//bottone
var btn = document.getElementById("button_gen")

//input Utente
var inputUtente = document.getElementById("numero_utente")

// numero di array che racchiudero in array risultato
var n = 0;

//div preposti a stampare a schermo
var verde = document.getElementById("numero_utente")

//Button gen
btn.addEventListener ("click",
function() {

  // risultato finale array
  var risultato = [];

  //Fai inserire un numero, che chiameremo N, all’utente.
  n = parseInt(inputUtente.value);
  console.log("Numero inserito da Utente: " + n)

  //Genera N * (numero scelto da utente tramite prompt) array, ognuno formato da 10 numeri casuali tra 1 e 10.
  for(var count = 0; count < n; count++) {
    risultato.push(generaArray());
  }

  //Stampo il risultato a console
  console.log("Array popolato da numeri casuali tra 1 e 10: " + generaArray())

  //Stampo il risultato a console
  console.log("n array genearti in base a numero Utente: " + risultato.join(" - "))


}
);


//FUNZIONE
//Genera array con dentro 10 numeri casuali da a 10
//Ritorna array popolato da 10 numeri casuali
function generaArray () {
  var array = []

  for (var count = 0; count < 10; count++ ) {
  var numeroCasuale = Math.floor(Math.random() * 10) + 1;
  array.push(numeroCasuale);
}
  return array.join("")
}
