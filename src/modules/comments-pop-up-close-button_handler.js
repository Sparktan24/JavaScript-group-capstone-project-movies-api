const btnClose = document.querySelector('#close-btn');
const popUpContainer = document.querySelector('.comment_pop-up_container');

btnClose.addEventListener('click', () => {
  popUpContainer.classList.toggle('hidden');
});
