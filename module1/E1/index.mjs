let naam = prompt("Wat is je naam?");
let resultaat = 0;

prompt("Javascript is hetzelfde als java?").toLowerCase() == "nee" ? (alert("Goed gedaan"), resultaat++) : alert("juist antwoord: nee");

prompt("Python is dichter bij machine code dan C?").toLowerCase() == "nee" ? (alert("Goed gedaan"), resultaat++) : alert("juist antwoord: nee");

prompt("Javascript is stom?").toLowerCase() == "ja" ? (alert("Goed gedaan"), resultaat++) : alert("juist antwoord: ja");

alert(`score: ${resultaat}`);
