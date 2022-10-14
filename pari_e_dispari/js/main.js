// L’utente sceglie pari o dispari
const userPariDispari = prompt('Scegli pari o dispari');

// l'utente inserisce un numero da 1 a 5
const userNumber = Number(prompt('Inserisci un numero da 1 a 5'));

// generare un numero random da 1 a 5 per il computer usando function

function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }


  const pcRandomNumber = getRandomIntInclusive(1,5)
  console.log(pcRandomNumber);
  
// sommare i due numeri


// stabilire se la somma dei due numeri è pari o dispari usando function


// dichiarare chi ha vinto