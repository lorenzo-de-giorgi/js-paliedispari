/* 
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/

// input parola
let parola = prompt('Inserisci una parola');

function palindroma() {
    // array dove conservare le singole lettere
    let parolaArray = []
    // divido le lettere
    let parolaDivisa = parola.split('');
    console.log(parolaDivisa)
    // giro la parola
    let parolaInvertita = parolaDivisa.reverse();
    console.log(parolaInvertita)
    // ri-unisco le lettere
    let palindromaCheck = parolaInvertita.join('');
    // controllo se le due parole sono ugali
    if(parola == palindromaCheck){
        console.log('La parola è palindroma')
    } else {
        console.log('La parola NON è palindroma')
    }
}
console.log(palindroma(parola))

/*
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

// input pari o dispari
let pOdUser = prompt('Scegli pari o dispari');
// input numero
let numUser = parseInt(prompt('Scegli un numero tra 1 e 5'));
// funzione per numeri random
function getRnadomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
// funzione per controllare se è un numero pari o dispari
function evenOrOdd() {
    // controllo la parità
    if(sum % 2 === 0){
        return('pari')
    } else {
        return('dispari')
    }
};
// controllo che il numero non sia superiore a 5 ed inferiore a 1 e 5
if(numUser > 5 || numUser < 1){
    console.log('ERRORE!! Inserisci un numero compreso tra 1 e 5')
} else if(pOdUser !== 'pari' || pOdUser !== 'dispari'){
    console.log('ERRORE!! Assicurati di scegliere PARI o Dispari!')
} else {
    //stampo il numero dell'utente
    console.log(numUser);
    // genero e stampo il numero casuale per il computer
    let numComputer = getRnadomNumber(1, 5);
    console.log(numComputer)
    // definisco la somma dei due numeri
    let sum = numUser + numComputer;
    // controllo i dati inseriti dall'utente e verifico chi ha vinto
    if(pOdUser === 'pari'){
        // controllo se l'utente ha scelto pari e controllo la vittoria
        if(evenOrOdd(sum) === 'pari'){
            console.log(`HAI VINTO! La somma dei numeri era: ${sum} (pari)`)
        } else {
            console.log(`HAI PERSO! La somma dei numeri era: ${sum} (dispari)`)
        }
    } else if(pOdUser === 'dispari'){
        if(evenOrOdd(sum) === 'dispari'){
            console.log(`HAI VINTO! La somma dei numeri era: ${sum} (dispari)`);
        } else {
            console.log(`HAI PERSO! La somma dei numeri era: ${sum} (pari)`);
        }
    }
}