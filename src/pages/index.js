import './index.css';

import { getProfile, getCards } from '../components/api.js';


import { enableEditProfile, enableAddCard} from '../components/modal.js';

import { formSettings } from '../components/constants.js';
import { enableValidation} from '../components/validate.js';

import { renderCard } from '../components/card.js';

import { profileAvatar, profileName, profileAbout } from '../components/modal.js';

export let profileId

getProfile()
  .then((profile) => {
    profileId = profile._id;
    profileAvatar.src = profile.avatar;
    profileName.textContent = profile.name;
    profileAbout.textContent = profile.about;
  })
  .catch((err) => {
    console.log(err);
  });

getCards()
  .then((cards) => {
    cards.forEach(function (card) {
      renderCard(card);
    });
  })
  .catch((err) => {
    console.log(err);
  });



enableEditProfile();
enableAddCard();

enableValidation(formSettings);
