export default class Card {
  constructor({ data, user, handleDeleteCard, handleAddLike, handleRemoveLike }, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;

    this._user = user;
    this._owner = data.owner._id;

    this._handleDeleteCard = handleDeleteCard
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;

    this._cardId = data._id;
    this._cardTemplate = cardTemplate;
  }

  // Card delete

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

  _setEventListeners() {
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

    this._updateLikes();
    this._setEventListeners();

    return this._card;
  }

}
