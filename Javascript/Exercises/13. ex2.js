var experience_points = function() {
    return (win_battle() ? 10 : 1);
}

function is_logged_in() {
    return true;
}

function profile_view() {
    var show;
    switch (is_logged_in()) {
        case true:
            show = "This is your profile, enjoy!";
            break;
        case false:
            show = "Please log in first.";
            break;
        default:
            show = "Some error occured";
    }
    return show;
}