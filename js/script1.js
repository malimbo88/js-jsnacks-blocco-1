//myJavaScript
//Chiedi un numero di 4 cifre all’utente.
var numero = prompt("Dimmi un numero di 4 cifre")
numero = numero.trim();

while (numero.length !== 4 || isNaN(numero)) {
  numero = prompt("Errore. Dimmi un numero di non piú di 4 cifre")
  numero = numero.trim();
}


//Calcola la somma di tutte le cifre che compongono il numero.
  console.log("La somma di:")
var somma = 0;
for (count = 0; count < numero.length; count++) {
  somma += parseInt(numero[count]);
  console.log(numero[count])
}

console.log("Produce il risultato di: " + somma);
