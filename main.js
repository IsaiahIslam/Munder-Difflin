let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');

button1.addEventListener("mouseover", colorChangeIn);
button2.addEventListener("mouseover", colorChangeIn);
button3.addEventListener("mouseover", colorChangeIn);
button4.addEventListener("mouseover", colorChangeIn);

button1.addEventListener("mouseout", colorChangeOut);
button2.addEventListener("mouseout", colorChangeOut);
button3.addEventListener("mouseout", colorChangeOut);
button4.addEventListener("mouseout", colorChangeOut);

function colorChangeIn(){
  this.style.background = 'aqua',
  this.style.color = 'black'
}

function colorChangeOut(){
  this.style.background = 'black',
  this.style.color = 'white'
}
