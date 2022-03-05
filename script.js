var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset_button = document.querySelector("#reset");
var mode_select = document.querySelectorAll(".mode");
var easy = document.querySelector(".mode");

init();

function init() {
    colorDisplay.textContent = pickedColor;
    setupSquares();
    setupMode();
    reset();
}

reset_button.addEventListener("click", function () {
    reset();
});

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                message.textContent = "Correct";
                reset_button.textContent = "Play Again";
                changeColors(pickedColor);
            }
            else {
                this.style.backgroundColor = "#202020";
                message.textContent = "try again";
            }
        });
    }
}

function setupMode() {
    for (var i = 0; i < mode_select.length; i++) {
        mode_select[i].addEventListener("click", function () {
            for (var i = 0; i < mode_select.length; i++) {
                mode_select[i].classList.remove("selected");
            }
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            }
            else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function reset() {
    colors = genRandomColors(numSquares);
    pickedColor = chooseColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#2C8E99";
    reset_button.textContent = "New Colors";
    message.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

function chooseColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(makeColor());
    }
    return arr;
}

function makeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}




