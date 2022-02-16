// import { profileId, api } from '../pages/index.js';

// import { viewPhoto } from './modal.js';

// function checkLike(card) {
//   return card.likes.some(like => like._id === profileId);
// }


// export function createCard(card) {





//   cardLikes.textContent = card.likes.length;

//   // Photo view

//   cardImage.addEventListener('click', function () {
//     viewPhoto(card.link, card.name);
//   });

//   // Card delete

//   if (card.owner._id !== profileId) {
//     deleteCardButton.remove();
//   } else {
//     deleteCardButton.addEventListener('click', function () {
//       api.deleteCard(card._id)
//         .then(() => {
//           cardsItem.remove();
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     });
//   }

//   // Card likes

//   // Like check

//   if (checkLike(card)) {
//     likeCardButton.classList.add('card__like-button_active');
//   }

//   likeCardButton.addEventListener('click', function (evt) {
//     if (checkLike(card)) { // условие поменять на  !evt.target.classList.contains("places__btn-like_active")

//       // Like remove

//       api.removeLike(card._id)
//         .then((res) => {
//           cardLikes.textContent = res.likes.length;
//           evt.target.classList.toggle('card__like-button_active');
//         })
//         .catch((err) => {
//           console.log(err);
//         });

//     } else {

//       // Like add

//       api.addLike(card._id)
//         .then((res) => {
//           cardLikes.textContent = res.likes.length;
//           evt.target.classList.toggle('card__like-button_active');
//         })
//         .catch((err) => {
//           console.log(err);
//         });

//     }
//   });

//   return cardsItem;
// }

// export function renderCard(card) {
//   cardsList.prepend(card);
// }
