import { openPopup, closePopup } from './utils.js';

import { initialCards } from './data.js';

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;

const viewPhotoPopup = document.querySelector('.popup_type_view-photo');
const popupPhotoPicture = viewPhotoPopup.querySelector('.popup__photo-picture');
const popupPhotoCaption = viewPhotoPopup.querySelector('.popup__photo-caption');

function createCard(nameValue, linkValue) {
  const cardsItem = cardTemplate.firstElementChild.cloneNode(true);
  const cardName = cardsItem.querySelector('.card__name');
  const cardImage = cardsItem.querySelector('.card__image');
  const deleteCardButton = cardsItem.querySelector('.card__delete-button');
  const likeCardButton = cardsItem.querySelector('.card__like-button');

  cardName.textContent = nameValue;
  cardImage.src = linkValue;
  cardImage.alt = nameValue;

  cardImage.addEventListener('click', function () {
    popupPhotoPicture.src = linkValue;
    popupPhotoPicture.alt = nameValue;
    popupPhotoCaption.textContent = nameValue;
    openPopup(viewPhotoPopup);
  });

  deleteCardButton.addEventListener('click', function () {
    cardsItem.remove();
  });

  likeCardButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  return cardsItem;
}

export function renderCard(cardName, cardLink) {
  cardsList.prepend(createCard(cardName, cardLink));
}

export function enableCards() {
  initialCards.forEach(function (card) {
    renderCard(card.name, card.link);
  });
}
