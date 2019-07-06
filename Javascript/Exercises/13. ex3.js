// let + const
let a = "test";
let b = true;
let c = 789;
a = "test2";

// Destructuring
let person = {
    first_name : "John",
    last_name  : "Doe",
    age        : 50,
    eye_color  : "blue"
};

let {first_name, last_name, age, eye_color} = person;

// Object properties
const a = "test";
const b = true;
const c = 789;

const obj = {a, b, c};

// Template strings
var message = `Hello ${person.first_name} you are looking like ${person.age - 5}`

// default arguments
let is_valid_age = (age = 10) => age;

// Symbol
let sym = Symbol("This is my first Symbol");

// Arrow functions
let where_am_i = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost";
    }
} 