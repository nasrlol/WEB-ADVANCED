"use strict";

const H1Count = document.getElementsByTagName("h1");
const H2Count = document.getElementsByTagName("h2");

const NAV = document.getElementById("mainMenu");

for (let i = 0; i < H1Count.length; i++) {
	const H1 = document.createElement("h1");
	const clickableLink = document.createElement("a");
	const clickableH1 = clickableLink.appendChild(H1);

	NAV.append(clickableH1);
	clickableH1.innerText = `Hoofdstuk ${i}`;
}

for (let i = 0; i < H2Count.length; i++) {
	const H2 = document.createElement("h2");
	const clickableLink = document.createElement("a");
	const clickableH2 = clickableLink.appendChild(H2);

	NAV.append(clickableH2);
	clickableH2.innerText = `Deel 1.${i}`;
}
