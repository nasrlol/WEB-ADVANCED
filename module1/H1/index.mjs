"use strict";

const H1Count = document.getElementsByTagName("h1");
const H2Count = document.getElementsByTagName("h2");

const NAV = document.getElementById("mainMenu");

for (let i = 0; i < H1Count.length; i++) {
	for (let j = 0; j < H2Count.length; j++) {
		const H2 = H2Count[i];
		const id = `deel-${i + 1}`;
		H2.id = id;

		const clickableLink = document.createElement("a");
		clickableLink.href = `#${id}`;
		clickableLink.innerText = `Deel ${j}.${i + 1}`;

		NAV.append(clickableLink);
	}
}
