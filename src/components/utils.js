


export const viewPhotoPopup = document.querySelector('.popup_type_view-photo');

export function togglePopup(targetPopup) {
  targetPopup.classList.toggle('popup_opened');
}

// Constants

export const formSettings = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error_visible'
};
