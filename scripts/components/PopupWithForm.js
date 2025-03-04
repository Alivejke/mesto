import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._inputList = this._element.querySelectorAll('.popup__input')
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })
        return this._formValues;
    }
    setEventListeners = () => {
        super._setEventListener();
        this._form = this._element.querySelector('.popup__container')
        this._form.addEventListener('submit', () => {
            this._handleFormSubmit(this._getInputValues());
            this.close()
        })
    }
    close() {
        super.close()
        this._form.reset()
    }
}