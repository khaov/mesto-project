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
    api.saveProfile(profile_name, profile_about)
    .then((res) => {
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


const avatarEditPopup = new PopupWithForm({
  selector: '.popup_type_edit-avatar',
  handleFormSubmit: ({
    avatar_link
  }) => {
    api.saveAvatar(avatar_link)
    .then((res) => {
      profileInfo.setUserInfo(res);
      avatarEditPopup.closePopup();
    })
    .catch(err => console.log(err))
    .finally(() => {
      avatarEditPopup.setDefaultText();
    });
  }
})

avatarEditPopup.setEventListeners();


const cardsList = new Section({
  renderer: (cards) => {
    const card = new Card({
      data: cards,
      user: profileId,

      handleDeleteCard: cardId => {
        api.deleteCard(cardId)
          .then(() => card.remove())
          .catch((error) => console.log(error));
      },
      handleAddLike: cardId => {
        api.addLike(cardId)
          .then(data => card.updateLikes(data))
          .catch((error) => console.log(error));
      },
      handleRemoveLike: cardId => {
        api.removeLike(cardId)
          .then(data => card.updateLikes(data))
          .catch((error) => console.log(error));
      }

    }, selectors.cardTemplate)
    return card.createCard();
  }
}, selectors.cardList);


const viewPhotoPopup = new PopupWithImage('.popup_type_view-photo')

viewPhotoPopup.setEventListeners();


const addCardPopup = new PopupWithForm({
  selector: '.popup_type_add-card',
  handleFormSubmit: ({
    card_name,
    card_link
  }) => {
    api.saveCard(card_name, card_link)
    .then((res) => {
    console.log(res)

      cardsList.addItem(res);
      addCardPopup.closePopup();
    })
    .catch(err => console.log(err))
    .finally(() => {
      addCardPopup.setDefaultText();
    });
  }
});

addCardPopup.setEventListeners();

/* Валидация */

document.querySelectorAll(formSettings.formSelector).forEach((formElement) => {
  const formValidator = new FormValidator(formElement, formSettings)
  formValidator.enableValidation();
});

/* Обработчики открытия попапов */

btnEditProfile.addEventListener('click', () => {
  profileEditPopup.name = profileEditPopup.getFormElement().querySelector('.form__item_type_profile-name')
  profileEditPopup.about = profileEditPopup.getFormElement().querySelector('.form__item_type_profile-about')
  api.getProfile()
    .then((res) => {
      profileEditPopup.name.value = res.name;
      profileEditPopup.about.value = res.about;
    })
    .catch((error) => console.log(error));
  profileEditPopup.openPopup();
})

btnEditAvatar.addEventListener('click', () => {
  avatarEditPopup.openPopup();
})

btnAddCard.addEventListener('click', () => {
  addCardPopup.openPopup();
})



export let profileId;

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
