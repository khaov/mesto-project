import './index.css';

import { profileAvatar, profileName, profileAbout, formSettings, config } from '../components/constants.js';

import { getProfile, getCards } from '../components/api.js';
import { createCard, renderCard} from '../components/card.js';
import { enableEditAvatar, enableEditProfile, enableAddCard} from '../components/modal.js';

import { enableValidation} from '../components/validate.js';

import Api from '../components/api.js';

export let profileId;

export const apiMethods = new Api({
  baseUrl: config.baseUrl,
  headers: config.headers
})

console.log(apiMethods)

Promise.all([apiMethods.getProfile(), apiMethods.getCards()])
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

enableValidation(formSettings);

