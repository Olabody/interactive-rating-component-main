"use strict";

const rating_count = localStorage.getItem("rating");
document.querySelector(
  "p"
).innerHTML = `You have selected ${rating_count} out of 5 `;
