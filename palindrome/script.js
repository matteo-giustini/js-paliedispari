// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function isPalindrome(word){
    let reverseWord = ""
    for(let i = word.length -1 ; i >= 0; i--){
        reverseWord += word[i]
   } if( reverseWord === word){
    return true
   } else {
    return false
   }
}


const userWord = prompt('Inserisci la tua parola')
const checkIsPalindrome = isPalindrome(userWord)

if(checkIsPalindrome){
    alert(`La tua parola: ${userWord}, è palindroma`)
} else{
    alert(`La tua parola: ${userWord}, non è palindroma`)
}