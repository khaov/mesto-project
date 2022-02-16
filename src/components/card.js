export default class Card {
  constructor({ data }, cardTemplate) {
    this._name = data.name;
    this._link = data.link;

    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  createCard() {
    this._cardsItem = this._getTemplate();
    this._cardName = this._getTemplate.querySelector('.card__name');
    this._cardImage = this._getTemplate.querySelector('.card__image');

    this._cardName.textContent = this.name;
    this._cardImage.src = this.link;
    this._cardImage.alt = this.name;

    return _cardsItem;
  }

}
