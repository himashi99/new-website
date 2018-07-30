// Back to Top Scroll
var speed = 10;
var timer;
function scrollToTop(k) {
  if (k>0) {
    k-=speed;
    window.scrollTo(0,k);
    timer = setTimeout(function () {
      scrollToTop(k-=speed);
    },10);
  }else clearTimeout(timer);
}

document.getElementById("scrollup").onclick=function () {
  scrollToTop(document.documentElement.scrollHeight);
}

//Typewrite Text Effect on Greeting
var i = 0;
var text = "Hi I'm Himashi|";

function typing() {
  if (i<text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,120);
  }
}

//Call function once page has loaded

document.addEventListener("DOMContentLoaded", function() {
  typing();
});
// window.onload = function() {
//   typing();
// };
