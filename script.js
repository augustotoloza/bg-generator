var csscode = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value +")";
	csscode.textContent = body.style.background;
}

function getColor() {
	var hexColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	return hexColor;
}

function ranGradient() {
	color1.value = getColor();
	color2.value = getColor();
	setGradient();
}

ranGradient();
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", ranGradient);