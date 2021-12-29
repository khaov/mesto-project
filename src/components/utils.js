export const editProfilePopup = document.querySelector('.popup_type_edit-profile');
export const addCardPopup = document.querySelector('.popup_type_add-card');
export const viewPhotoPopup = document.querySelector('.popup_type_view-photo');



export function togglePopup(targetPopup) {
  targetPopup.classList.toggle('popup_opened');
}
