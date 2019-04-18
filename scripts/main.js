var myHeading = document.querySelector('h1');
myHeading.textContent = 'מתקדם קרב';
var appbtn = document.getElementById("dinoApp");
var debrief = document.getElementById("dinoBot");
//document.getElementById("answer").innerHTML = 'insert numbers';
appbtn.onclick = function() {
    window.open("https://dino-fly.com/", '_blank');
  }
debrief.onclick = function() {
    window.open("http://debrief.site/#/list", '_blank');
}
document.getElementById('answer').innerHTML = Date();