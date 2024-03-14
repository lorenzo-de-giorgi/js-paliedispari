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
    // giro la parola
    let palindromaCheck = parolaDivisa.reverse();
}