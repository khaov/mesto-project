import { profileAvatar, profileName, profileAbout } from './modal.js';
import { renderCard } from './card.js';

export function enableProfile() {
  return fetch('https://nomoreparties.co/v1/plus-cohort-5/users/me ', {
    headers: {
      authorization: 'd0ad5ddf-557e-4159-9ffa-f2758009f474',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then((data) => {
      profileAvatar.src = data.avatar;
      profileName.textContent = data.name;
      profileAbout.textContent = data.about;
    });
}

export function enableCards() {
  return fetch('https://nomoreparties.co/v1/plus-cohort-5/cards ', {
    headers: {
      authorization: 'd0ad5ddf-557e-4159-9ffa-f2758009f474',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then((cards) => {
      cards.forEach(function (card) {
        renderCard(card.name, card.link);
      });
    });
}

export function updateProfile(name, about) {
  fetch('https://nomoreparties.co/v1/plus-cohort-5/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'd0ad5ddf-557e-4159-9ffa-f2758009f474',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  });
}
