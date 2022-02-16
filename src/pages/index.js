import './index.css';

import { config, selectors, formSettings } from '../utils/constants.js';

import Api from '../components/Api.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage';
import FormValidator from '../components/FormValidator.js';
import UserInfo from "../components/UserInfo";
import Section from "../components/Section.js";
import Card from "../components/Card.js";

/* можно перенести в constants */
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnEditAvatar = document.querySelector('.avatar__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');


export const api = new Api(config)

const profileInfo = new UserInfo(selectors.profileAvatar, selectors.profileName,  selectors.profileAbout);

const profileEditPopup = new PopupWithForm({
  selector: '.popup_type_edit-profile',
  handleFormSubmit: ({
    profile_name,
    profile_about
  }) => {
    console.log()
    api.saveProfile(profile_name, profile_about)
    .then((res) => {
      console.log(res)
      profileInfo.setUserInfo(res);
      profileEditPopup.closePopup();
    })
    .catch(err => console.log(err))
    .finally(() => {
      profileEditPopup.setDefaultText();
    });
  }
})

profileEditPopup.setEventListeners();


function generateCard(cards) {
  const card = new Card({
    data: {...cards},
  }, selectors.cardTemplate)

  return card.createCard();
}

const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(generateCard(item));
  }
}, selectors.cardList);


export let profileId;


/* Валидация */

document.querySelectorAll(formSettings.formSelector).forEach((formElement) => {
  const formValidator = new FormValidator(formElement, formSettings)
  formValidator.enableValidation();
});

/* Обработчики открытия попапов */

btnEditProfile.addEventListener('click', () => {
  profileEditPopup.openPopup();
})



Promise.all([api.getProfile(), api.getCards()])
  .then(([profile, cards]) => {

    profileId = profile._id;

    profileInfo.setUserInfo({
      avatar: profile.avatar,
      name: profile.name,
      about: profile.about,
    })

    cardsList.renderItems(cards.reverse());

  })
  .catch((err) => {console.log(err);});
