import { showData, showDataInvolvement, postComment } from './api.js';
//  import showDataInvolvement from './comments-pop-up-comments-section_handler.js';

const getDescription = async (id) => {
  const data = await showData(id);

  const commentMainContent = document.querySelector('.comment_main-content');
  commentMainContent.id = data.id;

  const commentImage = document.querySelector('#comment-image');
  commentImage.src = `${data.image.medium}`;

  const movieTitle = document.querySelector('.description_content__movie_title');
  movieTitle.innerHTML = `${data.name}`;

  const description = document.querySelector('#description');
  description.innerHTML = data.summary;

  const ratingGenres = document.querySelector('.rating-genres');
  ratingGenres.innerHTML = 'Genres: ';
  data.genres.forEach((e, index, array) => {
    // eslint-disable-next-line no-unused-expressions
    index !== array.length - 1 ? ratingGenres.innerHTML += `${e}, ` : ratingGenres.innerHTML += `${e}. `;
  });
  ratingGenres.innerHTML += `Rate: ${data.rating.average}`;
};

const getComments = async (id) => {
  //  console.log('ID', id);
  const data = await showDataInvolvement(id);
  const commentText = document.querySelector('.comments-container');
  const commentDiv = document.createElement('div');
  commentDiv.innerHTML = '';
  Object.keys(data).forEach((key) => {
    commentDiv.innerHTML += `${data[key].creation_date} ${data[key].username}: ${data[key].comment}. <br>`;
    commentText.appendChild(commentDiv);
  });
};

const addToAPI = async (id, user, com) => {
  const data = await postComment(id, user, com);
  console.log('Data added to api:', data);
  /* addToDOM(user, score);
  return { data, status }; */
};

const form = document.querySelector('#form');
const userName = document.querySelector('#comment-user-name-input');
const comment = document.querySelector('#textArea-comment');
const itemId = document.querySelector('.comment_main-content');

form.onsubmit = (e) => {
  e.preventDefault();
  const user = userName.value;
  const com = comment.value;
  const { id } = itemId;
  addToAPI(id, user, com);
};

/* const postComments = async (id, userName, comments) => {

}; */

export { getDescription, getComments };
