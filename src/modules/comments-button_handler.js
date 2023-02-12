import { getDescription, getComments } from './comment_handler.js';

const commentsButtons = () => {

  const btnComments = document.querySelectorAll('.comment');
  const popUpContainer = document.querySelector('.comment_pop-up_container');
  btnComments.forEach((element) => {
    element.addEventListener('click', () => {
      getDescription(element.parentElement.id);
      getComments(element.parentElement.id);
      popUpContainer.classList.toggle('hidden');
    });
  });
}

export default commentsButtons;


//  CLOSE BUTTON POP-UP
const btnClose = document.querySelector('#close-btn');
const popUpContainer = document.querySelector('.comment_pop-up_container');

btnClose.addEventListener('click', () => {
  popUpContainer.classList.toggle('hidden');
  document.querySelector('.comments-container').textContent = '';
});
