let nome;
nome = prompt("Qual è il tuo nome?");

let cognome;
cognome = prompt("Qual è il tuo cognome?");

let colore;
colore = prompt("Qual è il tuo colore preferito?");

document.getElementById("password").innerHTML =
    `Nome: ${nome} <br>
    Cognome: ${cognome} <br>
    Colore preferito: ${colore} <br>
    <br>
    Nuova Password: ${nome}${cognome}${colore}13`
    ;