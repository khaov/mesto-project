import './index.css';

import { profileAvatar, profileName, profileAbout, formSettings, config } from '../utils/constants.js';

import { createCard, renderCard} from '../components/card.js';
import { enableEditAvatar, enableEditProfile, enableAddCard} from '../components/modal.js';

import Api from '../components/Api.js'; // все обращения к api будут в индекс файле (пока для удоства, сделал чтобы работало через импорт в другие файлы)
import FormValidator from '../components/FormValidator.js'

export let profileId;

export const api = new Api(config)

Promise.all([api.getProfile(), api.getCards()])
  .then(([profile, cards]) => {
    profileId = profile._id;
    profileAvatar.src = profile.avatar;
    profileAvatar.alt = profile.name;
    profileName.textContent = profile.name;
    profileAbout.textContent = profile.about;

    cards.reverse().forEach((card) => {
      renderCard(createCard(card));
    });
  })
  .catch((err) => {
    console.log(err);
});

enableEditAvatar();
enableEditProfile();
enableAddCard();

document.querySelectorAll(formSettings.formSelector).forEach((formElement) => {
  const formValidator = new FormValidator(formElement, formSettings)
  formValidator.enableValidation();
});
