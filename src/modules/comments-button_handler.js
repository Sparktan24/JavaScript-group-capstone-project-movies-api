import { getDescription, getComments } from './comment_handler.js';

window.addEventListener('load', () => { //  Waits until page is loaded completely, including images.
  const btnComments = document.querySelectorAll('.comment');
  const popUpContainer = document.querySelector('.comment_pop-up_container');
  //  const id = document.querySelector('.description_content__movie_title');
  btnComments.forEach((element) => {
    element.addEventListener('click', () => {
      getDescription(element.parentElement.id);
      //  getComments(element.previousElementSibling.firstElementChild.textContent);
      getComments(element.parentElement.id);
      //  getComments(id.textContent);
      popUpContainer.classList.toggle('hidden');
    });
  });
});

//  CLOSE BUTTON POP-UP
const btnClose = document.querySelector('#close-btn');
const popUpContainer = document.querySelector('.comment_pop-up_container');

btnClose.addEventListener('click', () => {
  popUpContainer.classList.toggle('hidden');
  document.querySelector('.comments-container').textContent = '';
});

//  getComments('Dark');
/*
//  WORKING SOLUTION 1
window.addEventListener('load', () => { //  Waits until page is loaded completely, including images.
  const btnComments = document.querySelector('.comment');
  const popUpContainer = document.querySelector('.comment_pop-up_container');
  btnComments.addEventListener('click', () => {
    popUpContainer.classList.toggle('hidden');
  });
});
*/

/*  WORKING SOLUTION 2
setTimeout(() => {
  const btnComments = document.querySelector('.comment');
  const popUpContainer = document.querySelector('.comment_pop-up_container');
  btnComments.addEventListener('click', () => {
    popUpContainer.classList.toggle('hidden');
  });
}, 1000);
*/

/*
if (document.readyState !== 'loading') {
  const btnComments = document.querySelector('.comment');
  const popUpContainer = document.querySelector('.comment_pop-up_container');
  btnComments.addEventListener('click', () => {
    popUpContainer.classList.toggle('hidden');
  });
} else {
  document.addEventListener('DOMContentLoaded', () => {

  });
}
*/

/*
document.addEventListener('DOMContentLoaded', () => {
  const btnComments = document.querySelector('.comment');
  console.log(btnComments);
  const popUpContainer = document.querySelector('.comment_pop-up_container');
  console.log(popUpContainer);
  btnComments.addEventListener('click', () => {
    popUpContainer.classList.toggle('hidden');
  });
});
*/
