import './index.css';

import { enableProfile } from '../components/profile.js';
import { enableCards } from '../components/card.js';
import { enableEditAvatar, enableEditProfile, enableAddCard} from '../components/modal.js';

import { formSettings } from '../components/constants.js';
import { enableValidation} from '../components/validate.js';

enableProfile();
enableCards();

enableEditAvatar();
enableEditProfile();
enableAddCard();

enableValidation(formSettings);
