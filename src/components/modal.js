import { ESC_KEYCODE } from './constants.js';

import { openPopup, closePopup } from './utils.js';

import { renderCard } from './card.js';

const popups = document.querySelectorAll('.popup');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

const editProfileButton = profile.querySelector('.profile__edit-button');

const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');
const profileNameInput = editProfileForm.querySelector('.form__item_type_profile-name');
const profileAboutInput = editProfileForm.querySelector('.form__item_type_profile-about');

const addCardButton = profile.querySelector('.profile__add-button');

const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardForm = addCardPopup.querySelector('.form_type_add-card');
const cardNameInput = addCardForm.querySelector('.form__item_type_card-name');
const cardLinkInput = addCardForm.querySelector('.form__item_type_card-link');

// Close popup by ESC

export function closePopupByEsc(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Close popup by click

function closePopupByClick(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.currentTarget);
  }
}

popups.forEach(function(popup) {
  popup.addEventListener('click', function (evt) {
    closePopupByClick(evt);
  });
});

// Profile edit

export function enableEditProfile() {
  editProfileButton.addEventListener('click', function () {
    profileNameInput.value = profileName.textContent;
    profileAboutInput.value = profileAbout.textContent
    openPopup(editProfilePopup);
  });
}

function editProfile (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  closePopup(editProfilePopup);
}

editProfileForm.addEventListener('submit', editProfile);

// Card add

export function enableAddCard() {
  addCardButton.addEventListener('click', function () {
    openPopup(addCardPopup);
  });
}

export function addCard (evt) {
  evt.preventDefault();
  renderCard(cardNameInput.value, cardLinkInput.value);
  addCardForm.reset();
  closePopup(addCardPopup);
}

addCardForm.addEventListener('submit', addCard);
