"use strict";

document.addEventListener("DOMContentLoaded", function () {
  localStorage.setItem("rating", 0);
  document.querySelectorAll(".btn_ratings").forEach(function (btn_ratings) {
    btn_ratings.addEventListener("click", function () {
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        localStorage.setItem("rating", this.dataset.id);
      } else {
        localStorage.setItem("rating", parseInt(this.dataset.id));
      }
    });
  });

  document.querySelector(".submit").addEventListener("click", function () {
    window.location.assign("thanks.html");
  });
});
