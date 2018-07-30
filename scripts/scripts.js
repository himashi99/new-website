// Back to Top Scroll
let speed = 10;
let timer;
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
let i = 0;
let text = "Hi I'm Himashi|";

function typing() {
  if (i<text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,120);
  }
}


//Call function once page has loaded

// document.addEventListener("DOMContentLoaded", function() {
//   typing();
// });


window.onload = function() {
  typing();
};
