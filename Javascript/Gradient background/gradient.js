/* eslint-disable no-console */
var body = document.querySelector("body");
var h3 = document.querySelector("h3")

function set_gradient(event=null) {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background + ";";
    
    if (event.target.tagName === "BUTTON") {
        color1.value = get_random_color();
        color2.value = get_random_color();
        body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    }
}

// Random color generation.
function get_random_color() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var color1 = document.querySelector("#color1");
color1.addEventListener("input", set_gradient);

var color2 = document.querySelector("#color2");
color2.addEventListener("input", set_gradient);

var btn = document.querySelector("button");
btn.addEventListener("click", set_gradient);
