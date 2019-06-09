function check_driver_age() {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    }
    else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    }
    else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

// check_driver_age()

var check_driver_age_2 = function(age) {
    //console.log;

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    }
    else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    }
    else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
