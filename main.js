let carouselImg = document.querySelector(".img-container");
let numOfImg = document.querySelectorAll(".img-container img").length;
const leftBtn = document.querySelector("#previous");
const rightBtn = document.querySelector("#next");

rightBtn.addEventListener("click", function () {
  var carousel = document.getElementById("carousel").firstElementChild;
  carouselImg.appendChild(carousel);
});

leftBtn.addEventListener("click", function () {
  var firstChild = document.getElementById("carousel").firstElementChild;
  var carousel = document.getElementById("carousel").lastElementChild;
  carouselImg.appendChild(carousel);
  carouselImg.insertBefore(carousel, firstChild);
});