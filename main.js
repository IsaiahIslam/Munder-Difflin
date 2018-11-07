document.getElementsByClassName("javaS").onmouseover = function() {mouseOver()};
document.getElementsByClassName("javaS").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementsByClassName("javaS").style.color = "#800000";
}

function mouseOut() {
    document.getElementsByClassName("javaS").style.color = "black";
}
