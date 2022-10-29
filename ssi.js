function viewDiv() {
    document.getElementById("div1").style.display = "block";    
}

function dontView() {
    document.getElementById("div1").style.display = "none";
    
}

function onClickMenuButton() {
    var state = document.getElementById("div1").style.display
    var button = "menuButton"
    switch (state) {
        case "block": dontView();
        //rotateButton(90, button);
        rotateButtonNow(0, button)
        break;
        case "none": viewDiv();
        //rotateButton(-90, button, 500);
        rotateButtonNow(-90, button)
        break;
        default: viewDiv();
        //rotateButton(-90, button, 500);
        rotateButtonNow(-90, button)
        break;
    }
}

let menuButtonTimer

function rotateButton(angle, button, time) {
    var delayTime = Math.floor(time / angle)

    menuButtonTimer = setInterval(rotateButtonNow, delayTime, Math.sign(angle), button)
    
}

function rotateButtonNow(angle, button) {
    /*var currentAngle = Number(document.getElementById(button).style.rotate)
    if (!Number.isInteger(currentAngle)) {
        currentAngle = 0
    }*/
    document.getElementById(button).style.rotate = (/*currentAngle + */angle) + "deg"
}