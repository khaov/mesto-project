import './index.css';

import { enableCards } from '../components/card.js';
import { enableEditProfile, enableAddCard} from '../components/modal.js';
import { formSettings } from '../components/utils.js';
import { enableValidation} from '../components/validate.js';

enableCards();
enableAddCard();
enableEditProfile();
enableValidation(formSettings);
