/* 
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/

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