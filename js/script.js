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
let pOd = prompt('Scegli pari o dispari');
// input numero
let num = parseInt(prompt('Scegli un numero tra uno e 5'));
