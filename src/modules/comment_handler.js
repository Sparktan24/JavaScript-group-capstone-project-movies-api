import { showData, showDataInvolvement } from './api.js';
//  import showDataInvolvement from './comments-pop-up-comments-section_handler.js';

const getDescription = async (id) => {
  const data = await showData(id);

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

export { getDescription, getComments };
