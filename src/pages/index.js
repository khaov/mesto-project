import './index.css';

import { enableProfile, enableCards } from '../components/api.js';

import { enableEditProfile, enableAddCard} from '../components/modal.js';
import { formSettings } from '../components/constants.js';
import { enableValidation} from '../components/validate.js';

enableProfile();
enableCards();
enableEditProfile();
enableAddCard();
enableValidation(formSettings);
