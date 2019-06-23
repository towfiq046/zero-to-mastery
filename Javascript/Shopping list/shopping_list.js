/* eslint-disable no-console */

// Returns str length as number.
function str_length() {
    return input.value.length;
}

// Create & attach li element to ul.
var ul = document.querySelector("ul");

function create_li() {
    var new_li = document.createElement("li");
    new_li.appendChild(document.createTextNode(input.value));

    var new_button = document.createElement("button");
    new_button.appendChild(document.createTextNode("Delete"));

    new_li.appendChild(new_button);
    ul.appendChild(new_li);
    input.value = "";
}

// Mouse click event.
function add_list_after_click() {
    if (str_length() > 0) {
        create_li();
    }
}

var button = document.getElementById("add_item");
button.addEventListener("click", add_list_after_click);


// Enter key press event.
function add_list_after_enter(event) {
    if (str_length() > 0 && event.keyCode === 13) {
        create_li();
    }
}

var input = document.getElementById("item");
input.addEventListener("keypress", add_list_after_enter);


// Toggle class click event.
ul.addEventListener("click", toggle_class);

function toggle_class(event) {
    var target = event.target;
    if (target.tagName === "LI") {
        target.classList.toggle("done");
    }
}


// Delete list items.
ul.addEventListener("click", delete_list_item);

function delete_list_item(event) {
    var target = event.target;
    if (target.tagName === "BUTTON") {
        target.parentElement.remove();
    }
}