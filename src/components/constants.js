// Constants

// API config

export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-5',
  headers: {
    authorization: 'd0ad5ddf-557e-4159-9ffa-f2758009f474',
    'Content-Type': 'application/json'
  }
}

// KeyCodes

export const ESC_KEYCODE = 27;

// Profile

export const profile = document.querySelector('.profile');
export const avatar = profile.querySelector('.profile__avatar');
export const profileAvatar = avatar.querySelector('.avatar__image');
export const profileName = profile.querySelector('.profile__name');
export const profileAbout = profile.querySelector('.profile__about');

// Form

export const formSettings = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error_visible'
};
