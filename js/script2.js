//myJavaScript
//bottone
var btn = document.getElementById("button_gen")

//input Utente
var inputUtente = document.getElementById("numero_utente")

// numero di array che racchiudero in array risultato
var n = 0;

// risultato finale array
var risultato = [];

//Button gen
btn.addEventListener ("click",
function() {

  //Fai inserire un numero, che chiameremo N, all’utente.
  n = parseInt(inputUtente.value);
  console.log("Numero inserito da Utente: " + n)

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


  //Genera N * (numero scelto da utente tramite prompt) array, ognuno formato da 10 numeri casuali tra 1 e 10.
  for(var count = 0; count < n; count++) {
    risultato.push(generaArray());
  }

  console.log("Array popolato da numeri casuali tra 1 e 10: " + generaArray())

  console.log("n array genearti in base a numero Utente: " + risultato.join(" - "))
  //Ogni volta che ne crei uno, stampalo a schermo.

}
);
