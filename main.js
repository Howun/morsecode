import {morse} from "./translator.js";

const translateButton = document.getElementById("translateButton");
let textBox = document.getElementById("translateTxt");
let translatedTxt = document.getElementById("translated");

// const splitted = textBox.split(" ");
let inputValues = (textBox.value)
let test1 = "";
test1 = inputValues.toString();


translateButton.addEventListener("click", () => {
  console.log(textBox.value);
  console.log(morse(textBox.value))
  translatedTxt.innerHTML = morse(textBox.value)

})