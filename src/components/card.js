import { profileId } from './profile.js';

import { getCards, deleteCard, addLike, removeLike } from './api.js';
import { viewPhoto } from './modal.js';

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;

function checkLike(card) {
  return card.likes.some(like => like._id === profileId);
}

export function createCard(card) {
  const cardsItem = cardTemplate.firstElementChild.cloneNode(true);
  const cardName = cardsItem.querySelector('.card__name');
  const cardImage = cardsItem.querySelector('.card__image');
  const cardLikes = cardsItem.querySelector('.card__likes');
  const likeCardButton = cardsItem.querySelector('.card__like-button');
  const deleteCardButton = cardsItem.querySelector('.card__delete-button');

  cardName.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardLikes.textContent = card.likes.length;

  // Photo view

  cardImage.addEventListener('click', function () {
    viewPhoto(card.link, card.name);
  });

  // Card delete

  if (card.owner._id !== profileId) {
    deleteCardButton.remove();
  } else {
    deleteCardButton.addEventListener('click', function () {
      deleteCard(card._id)
        .then(() => {
          cardsItem.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  // Card likes

  // Like check

  if (checkLike(card)) {
    likeCardButton.classList.add('card__like-button_active');
  }

  likeCardButton.addEventListener('click', function (evt) {
    if (checkLike(card)) {

      // Like remove

      removeLike(card._id)
        .then((res) => {
          cardLikes.textContent = res.likes.length;
          evt.target.classList.toggle('card__like-button_active');
        })
        .catch((err) => {
          console.log(err);
        });

    } else {

      // Like add

      addLike(card._id)
        .then((res) => {
          cardLikes.textContent = res.likes.length;
          evt.target.classList.toggle('card__like-button_active');
        })
        .catch((err) => {
          console.log(err);
        });

    }
  });

  return cardsItem;
}

export function renderCard(card) {
  cardsList.prepend(card);
}

export function enableCards() {
  getCards()
    .then((res) => {
      res.reverse().forEach((card) => {
        renderCard(createCard(card));
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
