var color1Text = document.getElementById("color1Text");
var color2Text = document.getElementById("color2Text");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randColrButton = document.getElementById("randColrButton");

function setGradient()
{
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	color1Text.textContent = "Color Box 1 Hex Value: " + color1.value;
	color2Text.textContent = "Color Box 2 Hex Value: " + color2.value;
	randColrButton.style.background = "linear-gradient(to left, " + color1.value + ", " + color2.value + ")";
}

function genRandColorCombo()
{
	var letters = "0123456789ABCDEF";

	var color = '#';

	for (var i=0; i<6; i++)
	{
		color += letters[(Math.floor(Math.random() * 16))];
	}

	return color;
}

function changeColorBoxValues()
{
	color1.value = genRandColorCombo();
	color2.value = genRandColorCombo();
	setGradient();
}

// function onRandColorButtonPress()
// {
// 	changeColorBoxValues();
// 	setGradient();
// }

changeColorBoxValues();

color1.addEventListener("input", setGradient);
// color1.addEventListener("change", setGradient);

color2.addEventListener("input", setGradient);
// color2.addEventListener("change", setGradient);

randColrButton.addEventListener("click", changeColorBoxValues);