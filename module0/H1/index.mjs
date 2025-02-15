"use strict";

const body = document.body;
const text = document.querySelectorAll("p");
const links = document.querySelectorAll("a");

document.getElementById("themaKnop").addEventListener("click", () => {
	if (document.getElementById("themaKnop").textContent == "Licht thema") {
		// omzetten naar een donker thema

		document.getElementById("themaKnop").textContent = "Donker thema";

		body.style.setProperty("background-color", "black");
		body.style.setProperty("color", "white");

		text.forEach((element) => {
			element.style.setProperty("color", "wheat");
		});
		links.forEach((element) => {
			element.style.setProperty("color", "red");
		});
	} else if (document.getElementById("themaKnop").textContent == "Donker thema") {
		// omzetten naar licht thema

		document.getElementById("themaKnop").textContent = "Licht thema";

		body.style.setProperty("background-color", "white");
		body.style.setProperty("color", "black");

		text.forEach((element) => {
			element.style.setProperty("color", "purple");
		});
		links.forEach((element) => {
			element.style.setProperty("color", "green");
		});
	}
});
