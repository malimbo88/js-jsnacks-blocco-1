//myJavaScript

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
var listaInvitati = ["alessandro", "nicola", "marco", "giulia", "stefania"]

//Chiedi all’utente il suo nome.
var nome = prompt("Come ti chiami").toLowerCase();
while (!isNaN(nome) || nome === "") {
  nome = prompt("Errore.Come ti chiami");
}
console.log("Nome utente: " + nome);

//Variabile di appoggio
var trovato = false;

//Verifico se utente é in lista.
var count = 0
while (trovato === false && count < listaInvitati.length ) {
  if (listaInvitati[count] === nome) {
    trovato = true;
  }

  console.log(count + " " + listaInvitati[count])
  count++
}

//Comunicagli se può partecipare o no alla festa.
if (trovato) {
  console.log("Sei in lista. Puoi entrare!");
}else {
  console.log("Non sei in lista. Non puoi entrare");
}
