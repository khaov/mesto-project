export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._closePopupByEsc = (evt) => {
      if (evt.key === "Escape") {
        this.closePopup();
      }
    };
  }

  openPopup() {
    this._popup.classList.add("popup_opened");
    window.addEventListener("keydown", this._closePopupByEsc);
  }

  closePopup() {
    this._popup.classList.remove("popup_opened");
    window.removeEventListener("keydown", this._closePopupByEsc);
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.closePopup();
      }

      if (evt.target.classList.contains("popup__close-button")) {
        this.closePopup();
      }
    });
  }
}
