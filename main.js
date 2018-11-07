document.getElementsByClassName('javaS').onmouseover = function() {mouseOver()};
document.getElementsByClassName('javaS').onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementsByClassName('javaS').style.color = "red";
}

function mouseOut() {
    document.getElementsByClassName('javaS').style.color = "black";
}
