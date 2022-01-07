// Form validation

const showInputError = (formElement, inputElement, errorMessage, formSettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formSettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formSettings.errorClass);
};

const hideInputError = (formElement, inputElement, formSettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formSettings.inputErrorClass);
  errorElement.classList.remove(formSettings.errorClass);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, formSettings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formSettings.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(formSettings.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

const checkInputValidity = (formElement, inputElement, formSettings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, formSettings);
  } else {
    hideInputError(formElement, inputElement, formSettings);
  }
};

const setEventListeners = (formElement, formSettings) => {
  const inputList = Array.from(formElement.querySelectorAll(formSettings.inputSelector));
  const buttonElement = formElement.querySelector(formSettings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, formSettings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, formSettings);
      toggleButtonState(inputList, buttonElement, formSettings);
    });
  });
};

export const enableValidation = (formSettings) => {
  const formList = Array.from(document.querySelectorAll(formSettings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, formSettings);
  });
};
