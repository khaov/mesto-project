import { closePopupByEsc } from './modal.js';

export function openPopup (targetPopup) {
  targetPopup.classList.add('popup_opened');
  window.addEventListener('keydown', closePopupByEsc);
}

export function closePopup (targetPopup) {
  targetPopup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closePopupByEsc);
}
