import { ESC_KEYCODE, formSettings } from './constants.js';

import { openPopup, closePopup } from './utils.js';

import {updateProfile} from './api.js';

import { postCard } from './api.js';
import { renderCard } from './card.js';

const popups = document.querySelectorAll('.popup');

// Profile edit selectors

const profile = document.querySelector('.profile');
export const profileAvatar = profile.querySelector('.profile__avatar');
export const profileName = profile.querySelector('.profile__name');
export const profileAbout = profile.querySelector('.profile__about');

const editProfileButton = profile.querySelector('.profile__edit-button');

const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');
const profileNameInput = editProfileForm.querySelector('.form__item_type_profile-name');
const profileAboutInput = editProfileForm.querySelector('.form__item_type_profile-about');
const profileSaveButton = editProfileForm.querySelector('.form__save-button');

// Card add selectors

const addCardButton = profile.querySelector('.profile__add-button');

const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardForm = addCardPopup.querySelector('.form_type_add-card');
const cardNameInput = addCardForm.querySelector('.form__item_type_card-name');
const cardLinkInput = addCardForm.querySelector('.form__item_type_card-link');
const cardSaveButton = addCardForm.querySelector('.form__save-button');

// Photo view selectors

const viewPhotoPopup = document.querySelector('.popup_type_view-photo');
const popupPhotoPicture = viewPhotoPopup.querySelector('.popup__photo-picture');
const popupPhotoCaption = viewPhotoPopup.querySelector('.popup__photo-caption');

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

// Close popup

popups.forEach(function(popup) {
  popup.addEventListener('click', closePopupByClick);
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
  profileSaveButton.classList.add(formSettings.inactiveButtonClass);

  updateProfile(profileNameInput.value, profileAboutInput.value)

  profileSaveButton.setAttribute("disabled", true);
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

  postCard(cardNameInput.value, cardLinkInput.value)
    .then((card) => {
      renderCard(card);
    })
    .catch((err) => {
      console.log(err);
    });

  addCardForm.reset();
  cardSaveButton.classList.add(formSettings.inactiveButtonClass);
  cardSaveButton.setAttribute("disabled", true);
  closePopup(addCardPopup);
}

addCardForm.addEventListener('submit', addCard);

// Photo view

export function viewPhoto (link, name) {
  popupPhotoPicture.src = link;
  popupPhotoPicture.alt = name;
  popupPhotoCaption.textContent = name;
  openPopup(viewPhotoPopup);
}
