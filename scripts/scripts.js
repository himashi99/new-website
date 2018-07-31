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
    setTimeout(erase,1000); //1s delay before erasing starts
  }
}


  // $('<img/>').attr('src', '../images/image-himashi-sized.jpg').on('load', function() {
  //   $(this).remove();
  //   $('body').css('background-image', url('../images/image-himashi-sized.jpg'));
  //
  //   alert("hi");
  // })

// Start Typing for first time
setTimeout(typing,2000); // 700ms delay before typing starts first time

// Erase function
function erase() {
  if (i >= 0) {
    let temp = greeting.substring(0, i); //extracts substring between 0 and i-th position
    document.getElementById("greeting").innerHTML = temp;
    i--;
    setTimeout(erase,90);
  } else {
    setTimeout(typing,700); //700ms delay before typing starts again
  }
}


//Call function once page has loaded

// document.addEventListener("DOMContentLoaded", function() {
//   typing();
// });


// window.onload = function() {
//   typing();
// };
