//myJavaScript2

//Div preposti alla stampa risultati
verde = document.getElementById("verde");
rosso = document.getElementById("rosso");

//lista di nomi
var arrayNomi = ["Nicola", "Alessandro", "Linda", "Laura", "Marco"];

//lista di cognomi
var arrayCognomi = ["Storella", "Scolozzi", "Valente", "Fontana", "Campana"];


//genera falsa lista invitati
var falsaLista = [];
  for (var count = 0; count < 5; count++) {
    var nomiCasuali = arrayNomi[Math.floor(Math.random() * arrayNomi.length)];
    var cognomiCasuali = arrayCognomi[Math.floor(Math.random() * arrayCognomi.length)];
    falsaLista.push(nomiCasuali + " " + cognomiCasuali);
    console.log(falsaLista.join(", "))

  }
