"use strict";

const loadingMessage = document.getElementById("loadingMessage");

document.addEventListener("DOMContentLoaded", () => {
	loadingMessage.textContent = "Welcome";
	setTimeout(() => loadingMessage.style.setProperty("display", "none"), 2000);
});
