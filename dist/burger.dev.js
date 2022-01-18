"use strict";

var burger = document.querySelector('.burger');
var header = document.querySelector('.mobile-nav');
burger.addEventListener('click', function () {
  if (header.classList.contains('active')) {
    header.classList.remove("active");
    burger.classList.remove("active");
  } else {
    header.classList.add("active");
    burger.classList.add("active");
  }
});