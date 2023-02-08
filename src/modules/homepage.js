import showData from './api';

const shows = ['La Casa de Papel', '1899', 'Dark', 'Stranger Things', 'Squid Game', 'Ginny & Georgia'];

const displayShows = async () => {
  const container = document.querySelector('.container');
  shows.forEach(async (e) => {
    const show = await showData(e);
    container.innerHTML += `
        <article>
        <img src=${show.image.medium}>
        <div class="title">
        <h2>${show.name}</h2>
        <i class="fa-sharp fa-regular fa-heart"></i>
        </div>
        <button class="comment">Comments</button>
        </article>
        `;
  });
};

displayShows();