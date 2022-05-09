// create text area //

(function myFunction() {
  document.body.innerHTML =
    '<textarea class="use-keyboard-input" cols="100" rows="10"></textarea>';
})();

const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
  },

  properties: {
    value: '',
    capsLock: false,
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this._createKeys());

    this.elements.keys =
      this.elements.keysContainer.querySelectorAll('.keyboard__key');

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll('.use-keyboard-input').forEach((element) => {
      element.addEventListener('focus', () => {
        this.open(element.value, (currentValue) => {
          element.value = currentValue;
        });
      });
    });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
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
      'Tab',
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      '[',
      ']',
      '\\',
      'Delete',
      'Caps Lock',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      ';',
      "'",
      'Enter',
      'Shift',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      ',',
      '.',
      '/',
      'Up',
      'Right Shift',
      'Ctrl',
      'Win',
      'Alt',
      'Space',
      'Alt',
      'Ctrl',
      'Left',
      'Down',
      'Right',
    ];

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak =
        ['Backspace', 'Enter', 'Right', 'Right Shift'].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      switch (key) {
        case 'Backspace':
          keyElement.classList.add('keyboard__key-backspace');
          keyElement.innerHTML = createIconHTML('Backspace');

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            this._triggerEvent('oninput');
          });

          break;

        case 'Tab':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = createIconHTML('Tab');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\t';
            this._triggerEvent('oninput');
          });

          break;

        case 'Delete':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = createIconHTML('Delete');

          keyElement.addEventListener('click', () => {
            this._triggerEvent('oninput');
          });

          break;

        case 'Caps Lock':
          keyElement.classList.add('keyboard__key-backspace');
          keyElement.innerHTML = createIconHTML('Caps Lock');

          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle(
              'keyboard__key--active',
              this.properties.capsLock
            );
          });

          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = createIconHTML('Enter');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('oninput');
          });

          break;

        case 'Shift':
        case 'Right Shift':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = createIconHTML('Shift');

          keyElement.addEventListener('click', () => {
            this.properties.value += key.value.toUpperCase();
            this._triggerEvent('oninput');
          });

          break;

        case 'Up':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = createIconHTML('&uarr;');

          keyElement.addEventListener('click', () => {
            this._triggerEvent('oninput');
          });

          break;

        case 'Down':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = createIconHTML('&darr;');

          keyElement.addEventListener('click', () => {
            this._triggerEvent('oninput');
          });

          break;

        case 'Left':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = createIconHTML('&larr;');

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            this._triggerEvent('oninput');
          });

          break;

        case 'Right':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = createIconHTML('&rarr;');

          keyElement.addEventListener('click', () => {
            this._triggerEvent('oninput');
          });

          break;

        case 'Space':
          keyElement.classList.add('keyboard__key-space');
          keyElement.innerHTML = createIconHTML('Space');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this._triggerEvent('oninput');
          });

          break;

        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock
              ? key.toUpperCase()
              : key.toLowerCase();
            this._triggerEvent('oninput');
          });

          break;
      }
			

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  },
	

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  },

  open(initialValue, oninput) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
  },
};

window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});
