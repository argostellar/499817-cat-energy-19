"use strict";

// mobile-menu.js - скрипт управления открытием и
// закрытием главного меню на мобильной версии
(function () {
  var mainHeader = document.querySelector(".main-header");
  var mainNav = mainHeader.querySelector(".main-header__nav");
  var navToggle = mainHeader.querySelector(".main-header__toggle-btn");
  var navClose = mainHeader.querySelector(".main-header__close-btn");

  mainNav.classList.remove("nav--nojs");
  mainNav.classList.remove("nav--opened");
  mainNav.classList.add("nav--closed");
  navToggle.classList.remove("main-header__toggle-btn--nojs");
  navClose.classList.remove("main-header__close-btn--nojs");
  navClose.classList.add("main-header__close-btn--hidden");

  navToggle.addEventListener("click", function() {
    if (mainNav.classList.contains("nav--closed")) {
      mainNav.classList.remove("nav--closed");
      mainNav.classList.add("nav--opened");
      navToggle.classList.add("main-header__toggle-btn--hidden");
      navClose.classList.remove("main-header__close-btn--hidden");
    }
  });

  navClose.addEventListener("click", function() {
    if (mainNav.classList.contains("nav--opened")) {
      mainNav.classList.remove("nav--opened");
      mainNav.classList.add("nav--closed");
      navToggle.classList.remove("main-header__toggle-btn--hidden");
      navClose.classList.add("main-header__close-btn--hidden");
    }
  });

})();
