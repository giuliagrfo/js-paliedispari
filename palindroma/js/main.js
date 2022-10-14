// Utilizzo prompt() per chiedere all’utente di inserire una parola
const userWord = prompt('Inserisci una parola per verificare se è palindroma')
console.log(userWord); 

// Creo una funzione per capire se la parola inserita è palindroma invertendo l'ordine delle lettere della stringa

function wordReverse(word) {
    
    return word.split('').reverse('').join('');
  
}

const reverseUserWord = wordReverse(userWord)
console.log(reverseUserWord);