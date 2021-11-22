import {morse} from "./translator.js";

const translateButton = document.getElementById("translateButton");
let textBox = document.getElementById("translateTxt");
let translatedTxt = document.getElementById("translated");


translateButton.addEventListener("click", () => {
  console.log(textBox.value);
  console.log(morse(textBox.value))
  translatedTxt.innerHTML = morse(textBox.value)
})