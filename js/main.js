/*
STEPS:
1) Genero delle variabili con valore inserito dall utente con prompt
2) Stampo  a schermo le variabili inserite tramite queryselector e innterhtml
3) Tramite l' interpolazione unisco i valori inseriti dall' utentre 
4) Stampo  a schermo e console la stringa ottenuta dall' interpolazione 
*/ 
// --------------------------------------------
// 1)
const InputName = prompt('Inserisci il tuo nome');
const LastNameInput = prompt('Inserisci il tuo cognome');
const FavColorInput = prompt('Inserisci il tuo colore preferito');
// 2)
document.querySelector('#NameInput').innerHTML = InputName;
document.querySelector('#LastNameInput').innerHTML = LastNameInput;
document.querySelector('#FavColorInput').innerHTML = FavColorInput;
// 3)
const Password = `${InputName}${LastNameInput}${FavColorInput}89`;
// 4)
document.querySelector('#Psw').innerHTML = Password;
console.log(Password);
