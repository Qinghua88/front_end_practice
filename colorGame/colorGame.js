var numSquares = 6;
var colors = [];
var pickedColor = pickColor();
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {	
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;			reset();
		});
	}
	resetButton.addEventListener("click", function(){
		reset();
	});

	for (var i = 0 ; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				resetButton.textContent = "Play Again?";
				messageDisplay.textContent = "Correct";
				changeColor(clickedColor);
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
	reset();
}


function reset() {
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "new colors";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}




function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColor(num) {
	// make an array
	var arr = []
	// add num random colors to arr
	for (var i = 0; i < num; i++) {
		// get random color and push into arr
		arr[i] = randomColor();
	}
	//return arr
	return arr;
}

function randomColor() {
	// pick a "red" from 0-255
	var red = Math.floor(Math.random() * 256)
	// pick a "green" from 0-255
	var green = Math.floor(Math.random() * 256)
	// pick a "blue" from 0-255
	var blue = Math.floor(Math.random() * 256)
	return "rgb(" + red +", " + green +", " + blue + ")";
}