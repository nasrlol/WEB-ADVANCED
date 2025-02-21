"use strict";

const redCount = document.getElementById("redCount");
const blueCount = document.getElementById("blueCount");
const greenCount = document.getElementById("greenCount");

let redValue = 0;
let blueValue = 0;
let greenValue = 0;

function updateValue(color) {
	switch (color) {
		case "red":
			redValue++;
			redCount.textContent = redValue;
			break;
		case "blue":
			blueValue++;
			blueCount.textContent = blueValue;
			break;
		case "green":
			greenValue++;
			greenCount.textContent = greenValue;
			break;
	}
}

for (let i = 0; i < 25; i++) {
	let cell = document.createElement("div");
	document.getElementById("grid").appendChild(cell);
	cell.setAttribute("id", "cell");
}

const cells = document.querySelectorAll("#cell");

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener("mouseover", () => (cells[i].style.backgroundColor = "red"), updateValue("red"));
	cells[i].addEventListener("click", () => (cells[i].style.backgroundColor = "blue"), updateValue("blue"));
	cells[i].addEventListener("dblclick", () => (cells[i].style.backgroundColor = "green"), updateValue("green"));
}
