import './index.css';

import { config, selectors, formSettings } from '../utils/constants.js';

import Api from '../components/Api.js'; // все обращения к api будут в индекс файле (пока для удоства, сделал чтобы работало через импорт в другие файлы)
import FormValidator from '../components/FormValidator.js'
import UserInfo from "../components/UserInfo";
import Section from "../components/Section.js";
import Card from "../components/Card.js";

const profileInfo = new UserInfo(selectors.profileAvatar, selectors.profileName,  selectors.profileAbout);







// const CardList = new Section({
//   data: items
// }, ".card__list");







import { enableEditAvatar, enableEditProfile, enableAddCard} from '../components/modal.js';



export let profileId;

export const api = new Api(config)

enableEditAvatar();
enableEditProfile();
enableAddCard();

document.querySelectorAll(formSettings.formSelector).forEach((formElement) => {
  const formValidator = new FormValidator(formElement, formSettings)
  formValidator.enableValidation();
});

Promise.all([api.getProfile(), api.getCards()])
  .then(([profile, cards]) => {

    profileId = profile._id;

    profileInfo.setUserInfo({
      avatar: profile.avatar,
      name: profile.name,
      about: profile.about,
    })
    
  })
  .catch((err) => {console.log(err);});
