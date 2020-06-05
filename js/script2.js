//myJavaScript
//bottone
var btn = document.getElementById("button_gen")

//input Utente
var inputUtente = document.getElementById("numero_utente")

// numero di array che racchiudero in array risultato
var n = 0;

//div preposti a stampare a schermo
var verde = document.getElementById("verde");
var rosso = document.getElementById("rosso");

//Button gen
btn.addEventListener ("click",
function() {

  //Fai inserire un numero, che chiameremo N, all’utente.
  n = parseInt(inputUtente.value);
  console.log("Numero inserito da Utente: " + n)

  //Risultato da stampare
  var risultato = "";

  //Genera N * (numero scelto da utente tramite prompt) array, ognuno formato da 10 numeri casuali tra 1 e 10.
  for(var count = 0; count < n; count++) {
    var nArray = generaArray();
    risultato += nArray + " ";
  }


  //Stampo il risultato a console
  console.log("n array genearti in base a numero Utente: " + risultato)
  verde.innerHTML = n;
  rosso.innerHTML = risultato;

}
);


//FUNZIONE
//Genera array con dentro 10 numeri casuali da a 10
//Ritorna array popolato da 10 numeri casuali
function generaArray () {
  var array = []

  for (var count = 0; count < 10; count++ ) {
  var numeroCasuale = Math.floor(Math.random() * 9) + 1;
  array.push(numeroCasuale);
}
  return array.join("")
}
