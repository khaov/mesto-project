const cardsList = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('.card-template').content;

const addButton = document.querySelector('.form__save-button_test');

initialCards.forEach(function (card) {
  addCard(card.link, card.name);
})

function addCard(cardImage, titleValue) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__image').src = cardImage;
  cardElement.querySelector('.card__name').textContent = titleValue;

  cardsList.prepend(cardElement);
}

addButton.addEventListener('click', function () {
  const name = document.querySelector('.form__item[name="card-name"]');
  const link = document.querySelector('.form__item[name="card-link"]');

  addCard(link.value, name.value);

  link.value = '';
  name.value = '';
});
