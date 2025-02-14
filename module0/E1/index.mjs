"use strict";

const button = document.getElementById("knop");
button.addEventListener("click", () => (button.innerText = button.innerText == "Hallo" ? "Tot Ziens" : "Hallo"));
