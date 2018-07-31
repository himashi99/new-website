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

// Typewrite Text Effect on Greeting


// Empty the string from
document.getElementById("greeting").innerHTML = '';

let i = 0;
let greeting = "Hi I'm Himashi";

function typing() {
  if (i < greeting.length) {
    document.getElementById("greeting").innerHTML += greeting.charAt(i);
    i++;
    setTimeout(typing,120); //call this function again to type all letters
  } else {
    setTimeout(erase,90);
  }
}

// Start Typing
setTimeout(typing,120);

// Erase function
function erase() {
  if (i >= 0) {
    let temp = greeting.substring(0, i); //extracts substring between 0 and i-th position
    document.getElementById("greeting").innerHTML = temp;
    i--;
    setTimeout(erase,90);
  } else {
    setTimeout(typing,120);
  }
}


//Call function once page has loaded

// document.addEventListener("DOMContentLoaded", function() {
//   typing();
// });


// window.onload = function() {
//   typing();
// };
