import {
  editProfilePopup,
  addCardPopup,
  
  viewPhotoPopup,
  togglePopup
} from '../components/utils.js';

import { renderCard } from '../components/card.js';

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

const editProfileButton = profile.querySelector('.profile__edit-button');
const editProfileClose = editProfilePopup.querySelector('.popup__close-button');

const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');
const profileNameInput = editProfileForm.querySelector('.form__item_type_profile-name');
const profileAboutInput = editProfileForm.querySelector('.form__item_type_profile-about');

const addCardButton = profile.querySelector('.profile__add-button');
const addCardClose = addCardPopup.querySelector('.popup__close-button');

const addCardForm = addCardPopup.querySelector('.form_type_add-card');
const cardNameInput = addCardForm.querySelector('.form__item_type_card-name');
const cardLinkInput = addCardForm.querySelector('.form__item_type_card-link');

const viewPhotoClose = viewPhotoPopup.querySelector('.popup__close-button');

export function enableEditProfile() {
  editProfileButton.addEventListener('click', function () {
    profileNameInput.value = profileName.textContent;
    profileAboutInput.value = profileAbout.textContent
    togglePopup(editProfilePopup);
  });
}

function editProfile (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  togglePopup(editProfilePopup);
}

editProfileForm.addEventListener('submit', editProfile);

editProfileClose.addEventListener('click', function () {
  togglePopup(editProfilePopup);
});



export function enableAddCard() {
  addCardButton.addEventListener('click', function () {
    togglePopup(addCardPopup);
  });
}

export function addCard (evt) {
  evt.preventDefault();
  renderCard(cardNameInput.value, cardLinkInput.value);
  addCardForm.reset();
  togglePopup(addCardPopup);
}

addCardForm.addEventListener('submit', addCard);

addCardClose.addEventListener('click', function () {
  togglePopup(addCardPopup);
});





viewPhotoClose.addEventListener('click', function () {
  togglePopup(viewPhotoPopup);
});
