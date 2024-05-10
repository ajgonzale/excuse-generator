/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function randomNumber(max = 1) {
    return Math.floor(Math.random() * max);
  }
  const excuse = document.getElementById("excuse");

  excuse.innerText =
    who[randomNumber(3)] +
    " " +
    action[randomNumber(3)] +
    " " +
    what[randomNumber(2)] +
    " " +
    when[randomNumber(4)];
};
