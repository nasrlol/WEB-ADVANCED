"use strict";

let scoreVerzameling = [];
const scoreLijst = document.getElementById("scoreList");

function updateScore() {
	let score = document.getElementById("score").value;
	scoreVerzameling.push(parseInt(score));
	let li = document.createElement("li");
	li.textContent = score;
	scoreLijst.appendChild(li);
}

function berekenGemiddelde() {
	let totaal = 0;
	if (scoreVerzameling.length >= 2) {
		for (let i = 0; i < scoreVerzameling.length; i++) {
			totaal += scoreVerzameling[i];
			console.log(totaal);
		}
	}
	return totaal / (scoreVerzameling.length - 1);
}

function vindHoogsteScore() {
	let hoogste = 0;
	for (let i = 0; i < scoreVerzameling.length; i++) {
		if (scoreVerzameling[i] > hoogste) {
			hoogste = scoreVerzameling[i];
		}
	}
	return hoogste;
}

document.getElementById("addScore").addEventListener("click", () => {
	updateScore();
	document.getElementById("average").textContent = berekenGemiddelde();
	document.getElementById("highest").textContent = vindHoogsteScore();
});

console.log(scoreVerzameling);
