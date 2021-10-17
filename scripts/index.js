const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

const editProfileButton = profile.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileClose = editProfilePopup.querySelector('.popup__close-button');

const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');
const profileNameInput = editProfileForm.querySelector('.form__item_type_profile-name');
const profileAboutInput = editProfileForm.querySelector('.form__item_type_profile-about');

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;

const addCardButton = profile.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardClose = addCardPopup.querySelector('.popup__close-button');

const addCardForm = addCardPopup.querySelector('.form_type_add-card');
const cardNameInput = addCardForm.querySelector('.form__item_type_card-name');
const cardLinkInput = addCardForm.querySelector('.form__item_type_card-link');

const viewPhotoPopup = document.querySelector('.popup_type_view-photo');
const viewPhotoClose = viewPhotoPopup.querySelector('.popup__close-button');

const popupPhotoPicture = viewPhotoPopup.querySelector('.popup__photo-picture');
const popupPhotoCaption = viewPhotoPopup.querySelector('.popup__photo-caption');

function togglePopup(targetPopup) {
  targetPopup.classList.toggle('popup_opened');
}

function editProfile (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  togglePopup(editProfilePopup);
}

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
    togglePopup(viewPhotoPopup);
  });

  deleteCardButton.addEventListener('click', function () {
    cardsItem.remove();
  });

  likeCardButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  return cardsItem;
}

function renderCard(cardName, cardLink) {
  cardsList.prepend(createCard(cardName, cardLink));
}

function addCard (evt) {
  evt.preventDefault();
  renderCard(cardNameInput.value, cardLinkInput.value);
  addCardForm.reset();
  togglePopup(addCardPopup);
}

editProfileButton.addEventListener('click', function (){
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent
  togglePopup(editProfilePopup);
});

editProfileClose.addEventListener('click', function (){
  togglePopup(editProfilePopup);
});

editProfileForm.addEventListener('submit', editProfile);

addCardButton.addEventListener('click', function (){
  togglePopup(addCardPopup);
});

addCardClose.addEventListener('click', function (){
  togglePopup(addCardPopup);
});

addCardForm.addEventListener('submit', addCard);

viewPhotoClose.addEventListener('click', function (){
  togglePopup(viewPhotoPopup);
});

initialCards.forEach(function (card) {
  renderCard(card.name, card.link);
})
