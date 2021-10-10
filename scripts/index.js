const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;

function addCard(nameValue, linkValue) {
  const cardsItem = cardTemplate.cloneNode(true);
  cardsItem.querySelector('.card__name').textContent = nameValue;
  cardsItem.querySelector('.card__image').src = linkValue;
  cardsItem.querySelector('.card__image').alt = nameValue;
  cardsList.prepend(cardsItem);
}

initialCards.forEach(function (card) {
  addCard(card.name, card.link);
})
