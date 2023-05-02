"use strict";

const input = document.getElementById("input");
const output = document.getElementById("output");
const translateBtm = document.getElementById("btn-translate");
const url = `https://api.funtranslations.com/translate/minion.json?text=`;

const translate = (input) => {
  try {
    fetch(url + input)
      .then((response) => response.json())
      .then((data) => {
        output.innerHTML = data.contents.translated;
      });
  } catch (error) {
    console.log(error);
    alert("Error occurred");
  }
};
translateBtm.addEventListener("click", () => {
  const user = input.value;
  user ? translate(user) : alert("Input Is Mandatory");
  input.value = null;
});
