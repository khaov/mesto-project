import { initialCards } from './data.js';

import { viewPhoto } from './modal.js';

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;

function createCard(nameValue, linkValue, likesValue) {
  const cardsItem = cardTemplate.firstElementChild.cloneNode(true);
  const cardName = cardsItem.querySelector('.card__name');
  const cardImage = cardsItem.querySelector('.card__image');
  const cardLikes = cardsItem.querySelector('.card__likes');

  const deleteCardButton = cardsItem.querySelector('.card__delete-button');
  const likeCardButton = cardsItem.querySelector('.card__like-button');

  cardName.textContent = nameValue;
  cardImage.src = linkValue;
  cardImage.alt = nameValue;
  cardLikes.textContent = likesValue.length;

  cardImage.addEventListener('click', function () {
    viewPhoto(linkValue, nameValue);
  });

  deleteCardButton.addEventListener('click', function () {
    cardsItem.remove();
  });

  likeCardButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  return cardsItem;
}

export function renderCard(cardName, cardLink, cardLikes) {
  cardsList.prepend(createCard(cardName, cardLink, cardLikes));
}
