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