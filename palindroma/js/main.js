// Utilizzo prompt() per chiedere all’utente di inserire una parola
const userWord = prompt('Inserisci una parola per verificare se è palindroma')
console.log(userWord); 

// Creo una funzione per capire se la parola inserita è palindroma invertendo l'ordine delle lettere della stringa


function reverse(word) {
    // converto la stringa in un array 
    const userWordArr = userWord.split('');
    // inverto l'ordine degli elementi dell'array
    const userWordArrReverse = userWordArr.reverse();
    //  creo una stringa con gli elementi dell'array
    const invertedWord = userWordArrReverse.join('');
    console.log(invertedWord);

    if (word == invertedWord) {
        return true

    } else {
        return false
    }
  
}

// verifico se la parola inserita dall'utente è palindroma o no
if (reverse(userWord)) {
    console.log('la parola è palindroma');

} else {
    console.log('la parola non è palindroma');
}