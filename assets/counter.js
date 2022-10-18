let home = 0
let guest = 0

let home_score = document.getElementById("h-score");
let guest_score = document.getElementById("g-score");

function highlight() {
    if (home > guest) {
        document.getElementById("home").style.color = "#0ea5e9";
        document.getElementById("guest").style.color = "#9AABD8";
    } else if (guest > home) {

        document.getElementById("home").style.color = "#9AABD8";
        document.getElementById("guest").style.color = "#0ea5e9";
    } else {
        document.getElementById("home").style.color = "#9AABD8";
        document.getElementById("guest").style.color = "#9AABD8";
    }
}

function Hp1() {
    home += 1;
    home_score.textContent = home;
    highlight()

}
function Hp2() {
    home += 2;
    home_score.textContent = home;
    highlight()
}
function Hp3() {
    home += 3;
    home_score.textContent = home;
    highlight()
}

function Gp1() {
    guest += 1;
    guest_score.textContent = guest;
    highlight()
}
function Gp2() {
    guest += 2;
    guest_score.textContent = guest;
    highlight()
}
function Gp3() {
    guest += 3;
    guest_score.textContent = guest;
    highlight()
}
function new_game() {
    home = 0;
    guest = 0
    guest_score.textContent = guest;
    home_score.textContent = home;
    highlight()
}

