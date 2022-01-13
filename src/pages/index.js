import './index.css';

import { getProfile } from '../components/api.js';


import { enableCards } from '../components/card.js';
import { enableEditAvatar, enableEditProfile, enableAddCard} from '../components/modal.js';

import { formSettings } from '../components/constants.js';
import { enableValidation} from '../components/validate.js';





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

enableCards();

enableEditAvatar();
enableEditProfile();
enableAddCard();

enableValidation(formSettings);
