"use strict";

const H1Count = document.getElementsByTagName("h1");
const H2Count = document.getElementsByTagName("h2");

const NAV = document.getElementById("mainMenu");

for (let i = 0; i < H1Count.length; i++) {
	const H1 = H1Count[i];
	const id = `hoofdstuk${i + 1}`;
	H1.id = id;

	const clickableLink = document.createElement("a");
	clickableLink.href = `#${id}`;
	clickableLink.innerText = `Hoofdstuk ${i + 1}`;

	NAV.append(clickableLink);
}

for (let i = 0; i < H2Count.length; i++) {
	const H2 = H2Count[i];
	const id = `deel-${i + 1}`;
	H2.id = id;

	const clickableLink = document.createElement("a");
	clickableLink.href = `#${id}`;
	clickableLink.innerText = `Deel 1.${i + 1}`;

	NAV.append(clickableLink);
}
