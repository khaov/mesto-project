const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;

const cardFrom = document.querySelector('.form[name="card-form"]');
const cardName = cardFrom.querySelector('.form__item[name="card-name"]');
const cardLink = cardFrom.querySelector('.form__item[name="card-link"]');

function createCard(nameValue, linkValue) {
  const cardsItem = cardTemplate.cloneNode(true);
  const deleteButton = cardsItem.querySelector('.card__delete-button');
  const likeButton = cardsItem.querySelector('.card__like-button');

  cardsItem.querySelector('.card__name').textContent = nameValue;
  cardsItem.querySelector('.card__image').src = linkValue;
  cardsItem.querySelector('.card__image').alt = nameValue;
  cardsList.prepend(cardsItem);

  deleteButton.addEventListener('click', function () {
    const currentItem = deleteButton.closest('.cards__item');
    currentItem.remove();
  });

  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
}

initialCards.forEach(function (card) {
  createCard(card.name, card.link);
})

function addCard (evt) {
  evt.preventDefault();
  createCard(cardName.value, cardLink.value);
  cardName.value = '';
  cardLink.value = '';
}

cardFrom.addEventListener('submit', addCard);
