import showData from './api.js';

const commentButtons = document.querySelector('.comment');
const descriptionContent = document.querySelector('.description_content');
//  commentButtons.onClick = () => generateView();

const getDescription = async () => {
  const data = await showData('1899');

  const commentImage = document.querySelector('#comment-image');
  commentImage.src = `${data.image.medium}`;
  console.log('image link', data.image.medium);

  const movieTitle = document.querySelector('.description_content__movie_title');
  movieTitle.innerHTML = `Title: ${data.name}`;

  const description = document.querySelector('#description');
  description.innerHTML = data.summary;
  //  descriptionContent.appendChild(description);

  const ratingGenres = document.querySelector('.rating-genres');
  ratingGenres.innerHTML = 'Genres: ';
  data.genres.forEach((e, index, array) => {
    const value = index !== array.length - 1 ? ratingGenres.innerHTML += `${e}, ` : ratingGenres.innerHTML += `${e}. `;

    /*
    if (index === array.length - 1) {
      ratingGenres.innerHTML += `${e}. `;
    } else {
      ratingGenres.innerHTML += `${e}, `;
    }
    */
  });
  ratingGenres.innerHTML += `Rate: ${data.rating.average}`;
  //  ratingGenres.appendChild(ratingGenres);
};

getDescription();
