import { getProfile } from './api.js';

export const profile = document.querySelector('.profile');
export const avatar = profile.querySelector('.profile__avatar');
export const profileAvatar = avatar.querySelector('.avatar__image');
export const profileName = profile.querySelector('.profile__name');
export const profileAbout = profile.querySelector('.profile__about');

export let profileId

export function enableProfile() {
  getProfile()
  .then((profile) => {
    profileId = profile._id;
    profileAvatar.src = profile.avatar;
    profileAvatar.alt = profile.name;
    profileName.textContent = profile.name;
    profileAbout.textContent = profile.about;
  })
  .catch((err) => {
    console.log(err);
  });
}
