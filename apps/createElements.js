const bodyElement = document.querySelector("body");
const mainSection = document.createElement("main");
const titleSection = document.createElement("section");
const titleElementP = document.createElement("p");
const textareaSection = document.createElement("section");
const textareaElement = document.createElement("textarea");
const keyboardSection = document.createElement("section");
const keyboardDiv = document.createElement("div");
const informationTextSection = document.createElement("section");
const descriptionElementP = document.createElement("p");
const languageElementP = document.createElement("p");

bodyElement.appendChild(mainSection);
mainSection.appendChild(titleSection);
titleSection.appendChild(titleElementP);
mainSection.appendChild(textareaSection);
textareaSection.appendChild(textareaElement);
mainSection.appendChild(keyboardSection);
keyboardSection.appendChild(keyboardDiv);
mainSection.appendChild(informationTextSection);
informationTextSection.appendChild(descriptionElementP);
informationTextSection.appendChild(languageElementP);

bodyElement.classList.add("body");
mainSection.classList.add("main-section");
titleSection.classList.add("title__section");
titleElementP.classList.add("title");
titleElementP.textContent = "Virtual Keyboard";
descriptionElementP.classList.add("description");
descriptionElementP.textContent = "Keyboard created in Windows system";
languageElementP.classList.add("language");
languageElementP.textContent = "To switch the language, use the combination: left shift + left alt";

textareaSection.classList.add("textarea__section");
textareaElement.classList.add("textarea");
textareaElement.setAttribute("id", "textarea");
textareaElement.setAttribute("rows", "5");
textareaElement.setAttribute("cols", "10");
keyboardSection.classList.add("keyboard__section");
keyboardDiv.classList.add("keyboard");
keyboardDiv.setAttribute("id", "keyboard");
informationTextSection.classList.add("information-text__section");


const keyBoardButtons = [
  { value: "`", code: "Backquote" },
  { value: "1", code: "Digit1" },
  { value: "2", code: "Digit2" },
  { value: "3", code: "Digit3" },
  { value: "4", code: "Digit4" },
  { value: "5", code: "Digit5" },
  { value: "6", code: "Digit6" },
  { value: "7", code: "Digit7" },
  { value: "8", code: "Digit8" },
  { value: "9", code: "Digit9" },
  { value: "0", code: "Digit0" },
  { value: "-", code: "Minus" },
  { value: "=", code: "Equal" },
  { value: "Backspace", code: "Backspace" },
  { value: "Tab", code: "Tab" },
  { value: "q", code: "KeyQ" },
  { value: "w", code: "KeyW" },
  { value: "e", code: "KeyE" },
  { value: "r", code: "KeyR" },
  { value: "t", code: "KeyT" },
  { value: "y", code: "KeyY" },
  { value: "u", code: "KeyU" },
  { value: "i", code: "KeyI" },
  { value: "o", code: "KeyO" },
  { value: "p", code: "KeyP" },
  { value: "[", code: "BracketLeft" },
  { value: "]", code: "BracketRight" },
  { value: "\\", code: "Backslash" },
  { value: "Del", code: "Delete" },
  { value: "CapsLock", code: "CapsLock" },
  { value: "a", code: "KeyA" },
  { value: "s", code: "KeyS" },
  { value: "d", code: "KeyD" },
  { value: "f", code: "KeyF" },
  { value: "g", code: "KeyG" },
  { value: "h", code: "KeyH" },
  { value: "j", code: "KeyJ" },
  { value: "k", code: "KeyK" },
  { value: "l", code: "KeyL" },
  { value: ";", code: "Semicolon" },
  { value: "'", code: "Quote" },
  { value: "Enter", code: "Enter" },
  { value: "Shift", code: "ShiftLeft" },
  { value: "z", code: "KeyZ" },
  { value: "x", code: "KeyX" },
  { value: "c", code: "KeyC" },
  { value: "v", code: "KeyV" },
  { value: "b", code: "KeyB" },
  { value: "n", code: "KeyN" },
  { value: "m", code: "KeyM" },
  { value: ",", code: "Comma" },
  { value: ".", code: "Period" },
  { value: "/", code: "Slash" },
  { value: "▲", code: "ArrowUp" },
  { value: "Shift", code: "ShiftRight" },
  { value: "Ctrl", code: "ControlLeft" },
  { value: "Win", code: "MetaLeft" },
  { value: "Alt", code: "AltLeft" },
  { value: "Space", code: "Space" },
  { value: "Alt", code: "AltRight" },
  { value: "◄", code: "ArrowLeft" },
  { value: "▼", code: "ArrowDown" },
  { value: "►", code: "ArrowRight" },
  { value: "Ctrl", code: "ControlRight" }
];

// Создаем кнопки клавиатуры
keyBoardButtons.forEach(button => {
  const keyButton = document.createElement("button");
  keyButton.classList.add("keyboard-key__button");
  keyButton.textContent = button.value;
  keyButton.classList.add(button.code);

  // Добавляем кнопку на клавиатуру
  keyboard.appendChild(keyButton);

  // Анимация кнопки
  keyButton.addEventListener("mousedown", () => {
    console.log(`Кнопка ${button.value} (${button.code}) была нажата`);
    keyButton.classList.add("button-press-animation");
  });

  keyButton.addEventListener("mouseup", () => {
    keyButton.classList.remove("button-press-animation");
  });
});