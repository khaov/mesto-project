// Constants

// API config
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-5',
  headers: {
    authorization: '20520870-6cab-4f4f-bbfa-ddd25c12eab2',
    'Content-Type': 'application/json'
  }
}


// Profile
export const selectors = {
  profileAvatar:  '.avatar__image',
  profileName:    '.profile__name',
  profileAbout:   '.profile__about',

  cardList:      '.cards__list',
  cardTemplate:  '.card-template'
}

// Form

export const formSettings = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error_visible'
};

// Popup Selectors
export const formSelectors = {
  editAvatar: document.querySelector('.form_type_edit-avatar'),
  editProfile: document.querySelector('.form_type_edit-profile'),
  addCard: document.querySelector('.form_type_add-card')
}


export const profile = document.querySelector('.profile');
export const avatar = profile.querySelector('.profile__avatar');
export const profileAvatar = avatar.querySelector('.avatar__image');
export const profileName = profile.querySelector('.profile__name');
export const profileAbout = profile.querySelector('.profile__about');

