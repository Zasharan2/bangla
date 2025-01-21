// getting canvas and context
var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");

// key event listeners
window.addEventListener("keydown", this.keyPressed, false);
window.addEventListener("keyup", this.keyReleased, false);
 
// define keys list
var keys = [];
 
// key functions
function keyPressed(event){
    keys[event.keyCode] = true;
}
function keyReleased(event){
    keys[event.keyCode] = false;
}
 
// mouse vars
var mX;
var mY;
 
// mouse event listener
window.addEventListener("mousemove", function(event) {
    mX = event.clientX - c.getBoundingClientRect().left;
    mY = event.clientY - c.getBoundingClientRect().top;
});
 
// click var
var mouseDown;
var mouseButton;
 
// click event listeners
window.addEventListener("mousedown", function(event){
    mouseDown = true;
    mouseButton = event.button;
});
window.addEventListener("mouseup", function(){
    mouseDown = false;
});

// screen var
var screen = 0;

// Bangla to English list
var BtE = {"অ":"/ɔ/","আ":"/a/","ই":"/i/","ঈ":"/i/","উ":"/u/","ঊ":"/u/","ঋ":"/ri/","এ":"/e/","ঐ":"/oi/","ও":"/o/","ঔ":"/ou/","ক":"/kɔ/","খ":"/kʰɔ/","গ":"/gɔ/","ঘ":"/ɡʱɔ/","ঙ":"/ŋɔ/","চ":"/tʃɔ/","ছ":"/tʃʰɔ/","জ":"/dʒɔ/","ঝ":"/dʒʰɔ/","ঞ":"/nɔ/","ট":"/tɔ/","ঠ":"/tʰɔ/","ড":"/dɔ/","ঢ":"/dʰɔ/","ণ":"/nɔ/","ত":"/t̪ɔ/","থ":"/t̪ʰɔ/","দ":"/d̪ɔ/","ধ":"/d̪ʱɔ/","ন":"/nɔ/","প":"/pɔ/","ফ":"/pʱɔ/","ব":"/bɔ/","ভ":"/bʱɔ/","ম":"/mɔ/","য":"/dʒɔ/","র":"/rɔ/","ল":"/lɔ/","শ":"/ʃɔ/","ষ":"/ʃɔ/","স":"/ʃɔ~sɔ/","হ":"/hɔ/","ড়":"/ɽɔ/","ঢ়":"/ɽʱɔ/","য়":"/jɔ/"};

var options = [0, 0, 0, 0];
var optionsDetermined = false;
var question = 0;
var questionDetermined = false;

// main function
function main() {
    switch (screen) {
        // title
        case 0: {
            // background
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 106, 78)";
            ctx.fillRect(0, 0, 600, 600);
            ctx.beginPath();
            ctx.fillStyle = "rgba(244, 42, 65)";
            ctx.font = "60px Verdana";
            ctx.fillText("Bangla Characters", 20, 80);

            // practice button
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 53, 39)";
            ctx.fillRect(20, 120, 200, 60);
            if (mX > 20 && mX < 220 && mY > 120 && mY < 180) {
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 255, 255)";
                ctx.font = "40px Verdana";
                ctx.fillText("Practice", 40, 165);
                if (mouseDown && mouseButton == 0) {
                    screen = 1;
                }
            } else {
                ctx.beginPath();
                ctx.fillStyle = "rgba(244, 42, 65)";
                ctx.font = "40px Verdana";
                ctx.fillText("Practice", 40, 165);
            }

            break;
        }

        // practice
        case 1: {
            // background
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 106, 78)";
            ctx.fillRect(0, 0, 600, 600);

            if (!questionDetermined) {
                question = Object.keys(BtE)[Object.keys(BtE).length * Math.random() << 0];
                questionDetermined = true;
            }

            drawQuestion(0, question);

            break;
        }

        // practice.success
        case 1.1: {
            // background
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 106, 78)";
            ctx.fillRect(0, 0, 600, 600);

            ctx.beginPath();
            ctx.fillStyle = "rgba(244, 42, 65)";
            ctx.font = "bolder 60px Verdana";
            ctx.fillText("Correct!", 20, 80);

            // proceed button
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 53, 39)";
            ctx.fillRect(20, 110, 200, 60);
            if (mX > 20 && mX < 220 && mY > 110 && mY < 170) {
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 255, 255)";
                ctx.font = "40px Verdana";
                ctx.fillText("Proceed", 40, 155);
                if (mouseDown && mouseButton == 0) {
                    optionsDetermined = false;
                    questionDetermined = false;
                    screen = 1;
                }
            } else {
                ctx.beginPath();
                ctx.fillStyle = "rgba(244, 42, 65)";
                ctx.font = "40px Verdana";
                ctx.fillText("Proceed", 40, 155);
            }

            break;
        }

        // practice.fail
        case 1.2: {
            // background
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 106, 78)";
            ctx.fillRect(0, 0, 600, 600);

            ctx.beginPath();
            ctx.fillStyle = "rgba(244, 42, 65)";
            ctx.font = "bolder 60px Verdana";
            ctx.fillText("Incorrect.", 20, 80);

            ctx.beginPath();
            ctx.fillStyle = "rgba(244, 42, 65)";
            ctx.font = "bolder 40px Arial";
            ctx.fillText("Correct answer: " + BtE[question], 20, 220);

            // proceed button
            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 53, 39)";
            ctx.fillRect(20, 110, 200, 60);
            if (mX > 20 && mX < 220 && mY > 110 && mY < 170) {
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 255, 255)";
                ctx.font = "40px Verdana";
                ctx.fillText("Proceed", 40, 155);
                if (mouseDown && mouseButton == 0) {
                    optionsDetermined = false;
                    questionDetermined = false;
                    screen = 1;
                }
            } else {
                ctx.beginPath();
                ctx.fillStyle = "rgba(244, 42, 65)";
                ctx.font = "40px Verdana";
                ctx.fillText("Proceed", 40, 155);
            }

            break;
        }

        default: {
            break;
        }
    }
}

function drawQuestion(type, letter) {
    switch (type) {
        // single character
        case 0: {
            // letter
            ctx.beginPath();
            ctx.fillStyle = "rgba(244, 42, 65)";
            ctx.font = "180px Verdana";
            ctx.fillText(letter, 220, 205);

            // create options if not already existing
            if (!optionsDetermined) {
                j = Math.floor(Math.random() * 4);
                options[j] = BtE[letter];
                for (var i = 0; i < 4; i++) {
                    if (i != j) {
                        options[i] = (BtE[Object.keys(BtE)[Object.keys(BtE).length * Math.random() << 0]]);
                    }
                }
                checkRepeats();
                optionsDetermined = true;
            }

            // draw options
            for (var i = 0; i < 4; i++) {
                ctx.beginPath();
                ctx.fillStyle = "rgba(0, 53, 39)";
                ctx.fillRect(100, 280 + (80 * i), 400, 60);
                if (mX > 100 && mX < 500 && mY > 280 + (80 * i) && mY < 340 + (80 * i)) {
                    ctx.beginPath();
                    ctx.fillStyle = "rgba(255, 255, 255)";
                    ctx.font = "40px Arial";
                    ctx.fillText(options[i], 120, 325 + (80 * i));
                    if (mouseDown && mouseButton == 0) {
                        if (BtE[letter] == options[i]) {
                            screen = 1.1;
                        } else {
                            screen = 1.2;
                        }
                    }
                } else {
                    ctx.beginPath();
                    ctx.fillStyle = "rgba(244, 42, 65)";
                    ctx.font = "40px Arial";
                    ctx.fillText(options[i], 120, 325 + (80 * i));
                }
            }

            break;
        }
        default: {
            break;
        }
    }
}

// check repeats in options
function checkRepeats() {
    l = false;
    for (var i = 0; i < 4; i++) {
        for (var k = 0; k < 4; k++) {
            if (options[i] == options[k] && i != k) {
                options[i] = (BtE[Object.keys(BtE)[Object.keys(BtE).length * Math.random() << 0]]);
                l = true;
            }
        }
    }
    if (l) {
        checkRepeats();
    }
}

// run function
function run() {
    main();
    window.requestAnimationFrame(run);
}
window.requestAnimationFrame(run);