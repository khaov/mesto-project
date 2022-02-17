// export function createCard(card) {

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
