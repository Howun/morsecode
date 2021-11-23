import {morse} from "./translator.js";

const translateButton = document.getElementById("translateButton");
let textBox = document.getElementById("translateTxt");
let translatedTxt = document.getElementById("translated");

translateButton.addEventListener("click", () => {

  let toArr = textBox.value.split(" ");

  for (let i = 0; i < toArr.length; i++){
    const translated = toArr.map(values => {
      return morse(values)
    })

    translatedTxt.innerHTML = translated.join("");
  }
})                                          