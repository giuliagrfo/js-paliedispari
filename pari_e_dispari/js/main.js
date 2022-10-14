// L’utente sceglie pari o dispari
const userPariDispari = prompt('Scegli pari o dispari');
console.log(userPariDispari);

// l'utente inserisce un numero da 1 a 5
const userNumber = Number(prompt('Inserisci un numero da 1 a 5'));
console.log(userNumber);

// generare un numero random da 1 a 5 per il computer usando function

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }


  const pcRandomNumber = getRandomIntInclusive(1,5)
  console.log(pcRandomNumber);

// sommare i due numeri
let sum = pcRandomNumber + userNumber
console.log(sum);

// stabilire se la somma dei due numeri è pari o dispari usando function
function sumPariDispari(number) {
    if (number % 2 == 0) {
        
        return true
        
    } else {
        return false
        
    }
}

let even = 'pari';

if (sumPariDispari(sum)) {
    console.log('La somma dei due numeri è pari');
} else {
    console.log('La somma dei due numeri è dispari');
}

// dichiarare chi ha vinto

if (userPariDispari == even) {
    console.log('Hai vinto!');

} else {
    console.log('Hai perso');
}