export default class Card {
  constructor({ data }, cardTemplate) {
    this._name = data.name;
    this._link = data.link;

    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    const cardsItem = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);

    return cardsItem;
  }

  createCard() {
    this._card = this._getTemplate();

    this._cardName = this._card.querySelector('.card__name');
    this._cardImage = this._card.querySelector('.card__image');

    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._card;
  }

}
