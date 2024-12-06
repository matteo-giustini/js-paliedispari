// // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) +min)
}

function isEvenOrOdd(num){
    if(num % 2 === 0) {
        return true
    } else{
        return false
    }
}

const EvenOrOdd = prompt('Inserisci "pari o "dispari')
const userNum = Number(prompt('inserisci un numero da 1 a 5'))
const cpuNum = getRndInteger(1,5)
const sum = userNum + cpuNum

if((isEvenOrOdd(sum) && EvenOrOdd === "pari") || (!isEvenOrOdd(sum) && EvenOrOdd === "dispari")){
    alert(`Hai vinto! il numero CPU era: ${cpuNum}`)
}
else{
    alert(`Hai perso! il numero CPU era ${cpuNum}`)
}

