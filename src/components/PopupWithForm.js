import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selector, handleFormSubmit }) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector(".form");
    this._inputList = this._formElement.querySelectorAll(".form__item");
    this._submitButton = this._formElement.querySelector(".form__save-button");
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  getFormElement() {
    return this._formElement;
  }

  _renderLoading() {
    this._submitButton.initValue = this._submitButton.textContent;
    this._submitButton.textContent = "Сохранение...";
  }

  setDefaultText() {
    this._submitButton.textContent = this._submitButton.initValue;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._getInputValues();
      this._renderLoading();
      this._handleFormSubmit(this._formValues);
    });
  }

  closePopup() {
    super.closePopup();
    this._formElement.reset();
  }
}
