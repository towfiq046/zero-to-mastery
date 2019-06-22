/* eslint-disable no-console */
var database = [
    {
        username: "user1",
        password: "123"
    },
    {
        username: "user2",
        password: "111"
    },
    {
        username: "user3",
        password: "222"
    }
];

var newsfeed = [{
        username: "user1",
        timeline: "So tired from all that learning!"
    },
    {
        username: "user2",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
];

var username_input = prompt("Enter your username")
var password_input = prompt("Enter your password")

// foreach on database.
function db_items(item, i, arr) {
    if(username_input === arr[i].username) {
        if(password_input === arr[i].password) {
            console.log("Welcome!")
            return true
        }
        else {
            console.log("Wrong username or password!")
        }
    }
    console.log("Wrong username")
}

database.forEach(db_items);
