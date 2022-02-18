export default class Card {
  constructor({ data, user, handleviewPhoto, handleDeleteCard, handleAddLike, handleRemoveLike }, cardTemplate) {
    this._data = data;
    this._handleviewPhoto = handleviewPhoto
    this._handleDeleteCard = handleDeleteCard
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;

    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;

    this._user = user;
    this._owner = data.owner._id;

    this._cardId = data._id;
    this._cardTemplate = cardTemplate;
  }

  // Card template

  _getTemplate() {
    const cardsItem = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);

    return cardsItem;
  }

  // Card delete

  _deleteCard() {
    if (this._owner !== this._user) {
      this._deleteCardButton.remove()
    } else {
      this._deleteCardButton.addEventListener('click', () => {
        this._handleDeleteCard(this._cardId);
      });
    }
  }

  // Card likes

  _toggleLikes(likeButton) {
    const handleLike = likeButton.classList.contains('card__like-button_active') ? this._handleRemoveLike : this._handleAddLike;
    handleLike(this._cardId);
  }

  _updateLikes() {

    const liked = Boolean(this._likes.some(like => like._id === this._user));

    if (liked) {
      this._likeCardButton.classList.add('card__like-button_active');
    } else {
      this._likeCardButton.classList.remove('card__like-button_active');
    }

    this._cardLikes.textContent = this._likes.length;
  }

  // Event listeners

  _setEventListeners() {
    this._cardImage.addEventListener('click', () =>
      this._handleviewPhoto(this._cardName, this._cardImage)
    );

    this._deleteCard();

    this._likeCardButton.addEventListener('click', (evt) => {
      this._toggleLikes(evt.currentTarget);
    });
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

    this._setEventListeners();
    this._updateLikes();

    return this._card;
  }

}
