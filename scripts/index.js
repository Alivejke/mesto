import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import {
  popupEdit, formElementEdit, nameInput, jobInput,
  openButtonEdit, titleName, descriptionName, popupAdd,
  formElementAdd, titleInput, urlInput, cardsList,
  openButtonAdd, popupPreview, popupImage, popupCaption, EscCode,
  initialCards, selectors
} from './utils/constants.js'
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

// function openPopupEdit(el) {
//   nameInput.value = titleName.textContent;
//   jobInput.value = descriptionName.textContent;
//   togglePopup(el);
// }

// function togglePopup(el) {
//   el.classList.toggle('overlay_opened');
//   document.addEventListener('keydown', handleEscUp);
// }

// function closeModalWindow(el) {
//   document.removeEventListener('keydown', handleEscUp);   // удаляем событие keydown
//   el.classList.remove('overlay_opened');   // скрываем попап
// }
// function handleEscUp(evt) {
//   if (evt.keyCode === EscCode) {
//     const activePopup = document.querySelector('.overlay_opened');
//     closeModalWindow(activePopup);
//   }
// } //закрытие на esc

// function handleClickUp(evt) {
//   const activePopup = document.querySelector('.overlay_opened');
//   if (evt.target.classList.contains('overlay_opened')
//     || evt.target.classList.contains('popup__close')
//     || evt.target.classList.contains('overlay__close')) {
//     closeModalWindow(activePopup);
//   }
// } // закрытие на клик 

function handlePersonFormSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo({title, description})
  cardList.addItem()
}

// export function togglePreviewPopup(image, title) {
//   popupImage.src = image;
//   popupImage.alt = title;
//   popupCaption.textContent = title;
//   togglePopup(popupPreview);
// }

// function createCard(item) {
//   const card = new Card (item, '.card-template');
//   return card.generateCard();
// }

// function render() {
//   initialCards.forEach((item) => {
//     cardsList.append(createCard(item));
//   })
// }

function handleSubmitCard(evt) {
  evt.preventDefault();
  togglePopup(popupAdd);
  const cardElement = createCard({
    title: titleInput.value,
    image: urlInput.value
  });
  cardsList.prepend(cardElement)
  formElementAdd.reset();
  formAddValidator.disableSubmitButton()
}// сохранение карточки 


const CardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.card-template'
      , {
        handleCardClick: (data) => {
          popupWithImage.open(data)
        }
      })
    const cardElement = card.generateCard();
    CardList.addItem(cardElement)
  }
}, cardsList)
CardList.renderItems()

const formAddValidator = new FormValidator(selectors, formElementAdd)
formAddValidator.enableValidation()

const formEditValudator = new FormValidator(selectors, formElementEdit)
formEditValudator.enableValidation()

const userInfo = new UserInfo('.profile__title', '.profile__description')

const popupEditForm = new PopupWithForm('.popup__container_type_edit', {
  handleFormSubmit: ({title, description}) => {
    userInfo.setUserInfo({title, description})
    cardList.addItem()
  }
})
popupEditForm.open()

const popupAddForm = new PopupWithForm('.popup__container_type_edit', {
  handleFormSubmit: ({title, description}) => {
    userInfo.setUserInfo({title, description})
  }
})
popupAddForm.open()

const popupWithImage = new PopupWithImage('.overlay_type_preview')
popupWithImage.open(data)

openButtonAdd.addEventListener('click', () => () => {
popupAddForm.open();
})
openButtonEdit.addEventListener('click', () => {
  popupEditForm.open();
})
openButtonAdd.addEventListener('click', () => () => {
  popupAddForm.close();
  })
  openButtonEdit.addEventListener('click', () => {
    popupEditForm.close();
  })
// openButtonAdd.addEventListener('click', () => togglePopup(popupAdd));
// openButtonEdit.addEventListener('click', () => openPopupEdit(popupEdit));
// popupEdit.addEventListener('mousedown', handleClickUp);
// popupPreview.addEventListener('mousedown', handleClickUp);
// popupAdd.addEventListener('mousedown', handleClickUp);
formElementAdd.addEventListener('submit', handleSubmitCard); // сохранение новой карточки
formElementEdit.addEventListener('submit', handlePersonFormSubmit);
