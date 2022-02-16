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

    this._cardLikes = this._card.querySelector('.card__likes');
    this._likeCardButton = this._card.querySelector('.card__like-button');

    this._deleteCardButton = this._card.querySelector('.card__delete-button');

    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._card;
  }

}
