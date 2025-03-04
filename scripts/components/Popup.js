import { EscCode } from '../utils/constants.js';
export default class Popup {
    constructor(popupSelector) {
        this._element = document.querySelector(popupSelector);
    }
    open() {
        this._element.classList.add('overlay_opened')
        document.addEventListener('keydown', this._handleEscClose.bind(this))
    }

    close() {
        this._element.classList.remove('overlay_opened')
        document.removeEventListener('keydown', this._handleEscClose.bind(this))
    }
    _handleEscClose(evt) {
        if (evt.keyCode === EscCode) {
            this.close();
        }
    }

    setEventListeners() {
        const closeButton = this._element.querySelector('.popup__close')
        closeButton.addEventListener('click', () => {
            this.close(this._element)
        });
        this._element.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('overlay_opened')) {
                this.close(this._element);
            }
        })
    }
}