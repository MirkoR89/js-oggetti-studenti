//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  "nome": "Mirko",
  "cognome": "Rinelli",
  "età": "31"
}
/*console.log(studente);
console.log(studente.nome);
console.log(studente["cognome"]);*/

for (var key in studente) {
  //console.log(studente[key]);
}

//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
var listaStudenti = [
{
  "nome": "Mirko",
  "cognome": "Rinelli",
  "età": 31
},
{
  "nome": "Mario",
  "cognome": "Rossi",
  "età": 25

},
{
  "nome": "Luigia",
  "cognome": "Bianchi",
  "età": 65
},
];

//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoStudente = {
  "nome": prompt("Inserisci il nome"),
  "cognome": prompt("Inserisci il cognome"),
  "età": Number(prompt("Inserisci l'età"))
}
listaStudenti.push(nuovoStudente);

for (var key in listaStudenti) {
  console.log( listaStudenti[key].nome, listaStudenti[key].cognome);
  document.getElementById("student_list").innerHTML += "NOME: " + listaStudenti[key].nome + " " + "COGNOME: " + listaStudenti[key].cognome + "<br>";
}
