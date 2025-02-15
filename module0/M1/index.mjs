"use strict!";

const input1 = document.getElementById("getal1");
const input2 = document.getElementById("getal2");

let result = document.getElementById("resultaat");

document.getElementById("bereken").addEventListener("click", () => {
	result.textContent = parseInt(input1.value) + parseInt(input2.value);
});
