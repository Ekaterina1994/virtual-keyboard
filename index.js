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
let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

let textarea = document.createElement('textarea');
textarea.className = 'textarea';
wrapper.append(textarea);
textarea.focus();

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(keyboard);

let langText = document.createElement('div');
langText.className = 'lang-text';
wrapper.append(langText);
langText.innerHTML = 'For change language: left Alt + Shift';

// создание ключей для клавиатуры
for (let i = 0; i < 5; i++) {
  let keyboard__keys = document.createElement('div');
  keyboard__keys.classList.add('keyboard__keys');
  keyboard.append(keyboard__keys);

  for (let j = 0; j < rusKeys[i].length; j++) {
    let key = document.createElement('div');
    key.classList.add('key');
    key.classList.add(codesKeys[i][j]);
    keyboard__keys.append(key);

    let span = document.createElement('span');
    span.classList.add('ru');
    span.classList.add('on');
    key.append(span);
    span.innerHTML = rusKeys[i][j];

    span = document.createElement('span');
    span.classList.add('en');
    span.classList.add('off');
    key.append(span);
    span.innerHTML = enKeys[i][j];
  }
}

