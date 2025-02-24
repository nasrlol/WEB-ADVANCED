"use strict";

const H1Count = document.getElementsByTagName("h1");
const H2Count = document.getElementsByTagName("h2");

const NAV = document.getElementById("mainMenu");

for (let i = 0; i < H1Count.length; i++) {
	const H1 = H1Count[i];
	const id = `Hoofdstuk ${[i + 1]}`;
	H1.id = id;

	const clickableLink = document.createElement("a");
	clickableLink.href = `#${H1}`;
	clickableLink.innerText = `Hoofdstuk ${[i + 1]}`;
	NAV.append(clickableLink);

	for (let j = 0; j < H2Count.length; j++) {
		const H2 = H2Count[j];
		const id = `deel-${j + 1}`;
		H2.id = id;

		const clickableLink = document.createElement("a");
		clickableLink.href = `#${H2}`;
		clickableLink.innerText = `Deel ${i + 1}.${j + 1}`;

		NAV.append(clickableLink);
	}
}
