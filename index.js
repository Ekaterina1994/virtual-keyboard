const rusKeys = [
  [
    'Ё',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
  ],
  [
    'Tab',
    'Й',
    'Ц',
    'У',
    'К',
    'Е',
    'Н',
    'Г',
    'Ш',
    'Щ',
    'З',
    'Х',
    'Ъ',
    '\\',
    'Del',
  ],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  [
    'Shift',
    'Я',
    'Ч',
    'С',
    'М',
    'И',
    'Т',
    'Ь',
    'Б',
    'Ю',
    '.',
    '&uarr;',
    'Shift',
  ],
  ['Ctrl', 'Cmd', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;'],
];

const codesKeys = [
  [
    'Backquote',
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
    'Backspace',
  ],
  [
    'Tab',
    'KeyQ',
    'KeyW',
    'KeyE',
    'KeyR',
    'KeyT',
    'KeyY',
    'KeyU',
    'KeyI',
    'KeyO',
    'KeyP',
    'BracketLeft',
    'BracketRight',
    'Backslash',
    'Delete',
  ],
  [
    'CapsLock',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL',
    'Semicolon',
    'Quote',
    'Enter',
  ],
  [
    'ShiftLeft',
    'KeyZ',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
    'KeyM',
    'Comma',
    'Period',
    'Slash',
    'ArrowUp',
    'ShiftRight',
  ],
  [
    'ControlLeft',
    'MetaLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
  ],
];

const enKeys = [
  [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
  ],
  [
    'Tab',
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    '[',
    ']',
    '\\',
    'Del',
  ],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  [
    'Shift',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    ',',
    '.',
    '/',
    '&uarr;',
    'Shift',
  ],
  ['Ctrl', 'Cmd', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;'],
];

// создание элементов для html документов
let wrapper = document.createElement("div");
wrapper.className = "wrapper";
document.body.append(wrapper);

let textarea = document.createElement("textarea");
textarea.className = "textarea";
wrapper.append(textarea);
textarea.focus();

let keyboard = document.createElement("div");
keyboard.className = "keyboard";
wrapper.append(keyboard);

let langText = document.createElement("div");
langText.className = "lang-text";
wrapper.append(langText);
langText.innerHTML =
  "For change language: left Alt + Shift";

// создание ключей для клавиатуры
for (let i = 0; i < 5; i++) {
  let keyboard_keys = document.createElement("div");
  keyboard_keys.classList.add("keyboard_keys");
  keyboard.append(keyboard_keys);

  for (let j = 0; j < rusKeys[i].length; j++) {
    let keyboard_key = document.createElement("div");
    keyboard_key.classList.add("keyboard_key");
    keyboard_key.classList.add(codesKeys[i][j]);
    keyboard_keys.append(keyboard_key);

    let span = document.createElement("span");
    span.classList.add("ru");
    span.classList.add("on");
    keyboard_key.append(span);
    span.innerHTML = rusKeys[i][j];

    span = document.createElement("span");
    span.classList.add("en");
    span.classList.add("off");
    keyboard_key.append(span);
    span.innerHTML = enKeys[i][j];
  }

	
}

// слушатель при нажатии клавиши клавиатуры
document.addEventListener("keydown", function (event) {
  event.preventDefault();
  let pressedKey = document.querySelector("." + event.code);

  if (pressedKey.classList.contains("CapsLock")) {
    pressedKey.classList.toggle("pressed");
  } else {
    pressedKey.classList.add("pressed");
  }

  let pressedAll = document.querySelectorAll(".pressed");

  if (pressedAll.length > 1) {
    for (let i = 0; i < pressedAll.length; i++) {
      if (
        pressedAll[i].classList.contains("CapsLock") ||
        pressedAll[i].classList.contains("ShiftLeft") ||
        pressedAll[i].classList.contains("ShiftRight")
      ) {
        if (
          !(
            pressedKey.classList.contains("ControlLeft") ||
            pressedKey.classList.contains("AltLeft") ||
            pressedKey.classList.contains("MetaLeft") ||
            pressedKey.classList.contains("Space") ||
            pressedKey.classList.contains("ShiftLeft") ||
            pressedKey.classList.contains("CapsLock") ||
            pressedKey.classList.contains("Tab") ||
            pressedKey.classList.contains("Backspace") ||
            pressedKey.classList.contains("Delete") ||
            pressedKey.classList.contains("Enter") ||
            pressedKey.classList.contains("ControlRight") ||
            pressedKey.classList.contains("AltRight") ||
            pressedKey.classList.contains("ShiftRight")
          )
        ) {
          textarea.value += pressedKey.querySelector(".on").innerHTML;
          return;
        }
      }
    }
  } else if (
    !(
      pressedKey.classList.contains("ControlLeft") ||
      pressedKey.classList.contains("AltLeft") ||
      pressedKey.classList.contains("MetaLeft") ||
      pressedKey.classList.contains("ShiftLeft") ||
      pressedKey.classList.contains("CapsLock") ||
      pressedKey.classList.contains("Tab") ||
      pressedKey.classList.contains("Backspace") ||
      pressedKey.classList.contains("Delete") ||
      pressedKey.classList.contains("Enter") ||
      pressedKey.classList.contains("ControlRight") ||
      pressedKey.classList.contains("AltRight") ||
      pressedKey.classList.contains("ShiftRight")
    )
  ) {
    textarea.value += pressedKey.querySelector(".on").innerHTML.toLowerCase();
  }

  if (pressedKey.classList.contains("Backspace")) {
    let data = textarea.value;
    textarea.value = "";
    for (let i = 0; i < data.length - 1; i++) {
      textarea.value += data[i];
    }
  }

  // Смена языка
  let changeLang = 0;
  for (let i = 0; i < pressedAll.length; i++) {
    if (pressedAll[i].classList.contains("AltLeft")) {
      changeLang++;
    }
    if (pressedAll[i].classList.contains("ShiftLeft")) {
      changeLang++;
    }

    if (changeLang === 2) {
      let on = document.querySelectorAll(".on");
      let off = document.querySelectorAll(".off");

      on.forEach((element) => {
        element.classList.remove("on");
        element.classList.add("off");
      });

      off.forEach((element) => {
        element.classList.remove("off");
        element.classList.add("on");
      });
    }
  }
});

localStorage.setItem('language', 'on');
console.log(localStorage.getItem('language'));
    


// слушатель события при нажатии клавиши на клавиатуре
document.addEventListener("keyup", function (event) {
  let unpressedKey = document.querySelector("." + event.code);
  if (!unpressedKey.classList.contains("CapsLock")) {
    unpressedKey.classList.remove("pressed");
  }
});
// слушатель при нажатии клавиши при помощи мыши
document.addEventListener("mousedown", function (event) {
  let addClass = event.target.classList;

  if (addClass.contains("textarea")) {
    return;
  }
  if (addClass.contains("CapsLock")) {
    addClass.toggle("pressed_key");
  }

  if (addClass.contains("key")) {
    addClass.add("pressed_key");

    if (
      !(
        addClass.contains("ControlLeft") ||
        addClass.contains("AltLeft") ||
        addClass.contains("MetaLeft") ||
        addClass.contains("ShiftLeft") ||
        addClass.contains("CapsLock") ||
        addClass.contains("Tab") ||
        addClass.contains("Backspace") ||
        addClass.contains("Delete") ||
        addClass.contains("Enter") ||
        addClass.contains("ControlRight") ||
        addClass.contains("AltRight") ||
        addClass.contains("ShiftRight")
      )
    ) {
      textarea.value += event.target.firstChild.innerHTML.toLowerCase();
    }
  } else {
    if (addClass.contains("on")) {
      if (event.target.closest("div").classList.contains("CapsLock")) {
        event.target.closest("div").classList.toggle("pressed_key");
      } else {
        event.target.closest("div").classList.add("pressed_key");

        if (
          !(
            event.target.closest("div").classList.contains("ControlLeft") ||
            event.target.closest("div").classList.contains("AltLeft") ||
            event.target.closest("div").classList.contains("MetaLeft") ||
            event.target.closest("div").classList.contains("ShiftLeft") ||
            event.target.closest("div").classList.contains("CapsLock") ||
            event.target.closest("div").classList.contains("Tab") ||
            event.target.closest("div").classList.contains("Backspace") ||
            event.target.closest("div").classList.contains("Delete") ||
            event.target.closest("div").classList.contains("Enter") ||
            event.target.closest("div").classList.contains("ControlRight") ||
            event.target.closest("div").classList.contains("AltRight") ||
            event.target.closest("div").classList.contains("ShiftRight")
          )
        ) {
          textarea.value += event.target.innerHTML.toLowerCase();
        }
      }
    }
  }
});

document.addEventListener("mouseup", function (event) {
  if (!event.target.classList.contains("CapsLock")) {
    if (event.target.classList.contains("on")) {
      event.target.closest("div").classList.remove("pressed_key");
    } else {
      event.target.classList.remove("pressed_key");
    }
  }
});