import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._photoPicture = this._popup.querySelector(".popup__photo-picture");
    this._photoCaption = this._popup.querySelector(".popup__photo-caption");
  }

  openPopup(cardName, cardImage) {
    this._photoCaption.textContent = cardName;
    this._photoPicture.src = cardImage;
    this._photoPicture.alt = cardName;

    super.openPopup();
  }
}
