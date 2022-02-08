import { ESC_KEYCODE, profile, avatar, profileAvatar, profileName, profileAbout, formSettings } from '../utils/constants.js';

import { openPopup, closePopup } from '../utils/utils.js';

import { createCard, renderCard } from './card.js';

import { apiMethods } from '../pages/index.js';

const popups = document.querySelectorAll('.popup');

// Avatar edit selectors

const editAvatarButton = avatar.querySelector('.avatar__edit-button');

const editAvatarPopup = document.querySelector('.popup_type_edit-avatar');
const editAvatarForm = editAvatarPopup.querySelector('.form_type_edit-avatar');
const avatarLinkInput = editAvatarForm.querySelector('.form__item_type_avatar-link');
const avatarSaveButton = editAvatarForm.querySelector('.form__save-button');


// Profile edit selectors

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

// Avatar edit

export function enableEditAvatar() {
  editAvatarButton.addEventListener('click', function () {
    openPopup(editAvatarPopup);
  });
}

function editAvatar (evt) {
  evt.preventDefault();

  const originalTitle = profileSaveButton.textContent;
  const saveTitle = 'Сохранение...';
  showState(true, avatarSaveButton, saveTitle);

  // Avatar save

  apiMethods.saveAvatar(avatarLinkInput.value)
    .then((res) => {

      profileAvatar.src = res.avatar;

      editAvatarForm.reset();
      avatarSaveButton.classList.add(formSettings.inactiveButtonClass);
      avatarSaveButton.setAttribute("disabled", true);
      closePopup(editAvatarPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      showState(false, avatarSaveButton, originalTitle);
    });
}

editAvatarForm.addEventListener('submit', editAvatar);

// Profile edit

export function enableEditProfile() {
  editProfileButton.addEventListener('click', function () {
    profileNameInput.value = profileName.textContent;
    profileAboutInput.value = profileAbout.textContent;
    openPopup(editProfilePopup);
  });
}

function editProfile (evt) {
  evt.preventDefault();

  const originalTitle = profileSaveButton.textContent;
  const saveTitle = 'Сохранение...';
  showState(true, profileSaveButton, saveTitle);

  // Profile save

  apiMethods.saveProfile(profileNameInput.value, profileAboutInput.value)
    .then((res) => {

      profileName.textContent = res.name;
      profileAbout.textContent = res.about;

      profileSaveButton.classList.add(formSettings.inactiveButtonClass);
      profileSaveButton.setAttribute("disabled", true);
      closePopup(editProfilePopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      showState(false, profileSaveButton, originalTitle);
    });
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

  const originalTitle = profileSaveButton.textContent;
  const saveTitle = 'Сохранение...';
  showState(true, cardSaveButton, saveTitle);

  // Card save

  apiMethods.saveCard(cardNameInput.value, cardLinkInput.value)
    .then((res) => {
      renderCard(createCard(res));
      addCardForm.reset();
      cardSaveButton.classList.add(formSettings.inactiveButtonClass);
      cardSaveButton.setAttribute("disabled", true);
      closePopup(addCardPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      showState(false, cardSaveButton, originalTitle);
    });
}

addCardForm.addEventListener('submit', addCard);

// Photo view

export function viewPhoto (link, name) {
  popupPhotoPicture.src = link;
  popupPhotoPicture.alt = name;
  popupPhotoCaption.textContent = name;
  openPopup(viewPhotoPopup);
}

// Save button state

function showState(state, button, title) {
  button.textContent = title;
  if (state) {
    button.setAttribute('disabled', true);
  } else {
    button.removeAttribute('disabled');
  }
}
