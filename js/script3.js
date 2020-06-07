//myJavaScript2

//btn
var btnGenerate = document.getElementById("button_gen");

//Div preposti alla stampa risultati
verde = document.getElementById("verde");
rosso = document.getElementById("rosso");

//lista di nomi
var arrayNomi = ["Nicola", "Alessandro", "Linda", "Laura", "Marco"];

//lista di cognomi
var arrayCognomi = ["Storella", "Scolozzi", "Valente", "Fontana", "Campana"];


btnGenerate.addEventListener("click",
function() {
  //genera falsa lista invitati
  var falsaLista = [];
    for (var count = 0; falsaLista.length < 10; count++) {

      //genero un nome casuale
      var nomiCasuali = elementArray(arrayNomi);
      //console.log("Nome generato: " + nomiCasuali + " - count: " + count)

      //genero un cognome casuale
      var cognomiCasuali = elementArray(arrayCognomi);
      //console.log("Nome generato: " + cognomiCasuali + " - count: " + count)

      //verifico se un nome e` gia in lista
      var pushNomi = verificaArray(falsaLista, nomiCasuali);
      //console.log("falsaLista contiene: " + nomiCasuali + "? " + pushNomi)

      //verifico se un cognome e` gia in lista
      var pushCognomi = verificaArray(falsaLista, cognomiCasuali);
      //console.log("falsaLista contiene: " + cognomiCasuali + "? " + pushCognomi)

      //inserisco dentro array falsaLista i nomi e i cognomi casuali generati
      if (!verificaArray(falsaLista, nomiCasuali) && !verificaArray(falsaLista, cognomiCasuali)) {
        falsaLista.push(nomiCasuali);
        falsaLista.push(cognomiCasuali);
        //console.log("FACCIO PUSH di: " + nomiCasuali + cognomiCasuali)

      }else {
        //console.log("NON FACCIO PUSH")
      }

    }

    rosso.innerHTML = falsaLista.join(" ");
}
);

//FUNZIONI
//Prendere un elemento casuale da array
//Bisogna assegnare un argomento che indentifichi l'array in cui cercare
//Torna un elemento casuale prelevato da array
function elementArray(array) {

  //Cerco un elemento casuale in un array
    var nRandom = Math.floor(Math.random() * arrayNomi.length);
    var elementoCasuale = array[nRandom];
  return elementoCasuale

}

//Controllare se un elemento e' incluso dentro un array
//Bisogna assegnare un argomento che indentifichi l'array in cui cercare
//Bisogna assegnare un argomento l'elemento da cercare nell'array
//Ritorna un valore booleano
function verificaArray (array, elementoArray) {
  var count = 0;
  var inclusoArray = false;
  while (count < array.length && inclusoArray === false) {
    if (array[count] === elementoArray) {
      inclusoArray = true
    }
    count ++
  }

  return inclusoArray
}

//Unire due elementi vicini di un array
//Ritorna una stringa formato da due elementi di un array
