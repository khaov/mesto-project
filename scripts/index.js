const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;

function addCard(nameValue, linkValue) {
  const cardsItem = cardTemplate.cloneNode(true);
  const deleteButton = cardsItem.querySelector('.card__delete-button');

  cardsItem.querySelector('.card__name').textContent = nameValue;
  cardsItem.querySelector('.card__image').src = linkValue;
  cardsItem.querySelector('.card__image').alt = nameValue;
  cardsList.prepend(cardsItem);

  deleteButton.addEventListener('click', function () {
    const currentItem = deleteButton.closest('.cards__item');
    currentItem.remove();
  });
}

initialCards.forEach(function (card) {
  addCard(card.name, card.link);
})
