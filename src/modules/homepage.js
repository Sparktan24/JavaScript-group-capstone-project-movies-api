import { showData, getLikes } from './api';
// involvement API for POST
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OX5sTwXK5eU2vy1wOpri/likes';

// const shows = [27436, 39749, 17861, 2993, 43687, 47549]; //  TVmaze ids
const tvShows = ['La Casa de Papel', '1899', 'Dark', 'Stranger Things', 'Squid Game', 'Ginny & Georgia'];

const show = [];

const showsCount = async () => {
  const shows = document.querySelectorAll('.article').length;
  const addCount = document.querySelector('.count-shows');
  addCount.innerHTML = `Top binge-worthy shows (${shows})`;
};

export const showInfo = async () => {
  for (let i = 0; i < tvShows.length; i += 1) {
    /*eslint-disable */

    //suppress all warnings between comments
    const data = await showData([tvShows[i]]); 

    /* eslint-enable */
    show.push(data);
  }
  return show;
};

const currentLikes = async () => {
  const likes = await getLikes();
  const show = await showInfo();
  for (let i = 0; i < likes.length; i += 1) {
    for (let x = 0; x < show.length; x += 1) {
      if (Number(likes[i].item_id) === show[x].id) {
        show[x].likes = likes[i].likes;
      }
    }
  }
  return show;
};

const addLike = async (likeBtn) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ item_id: likeBtn.id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const counter = document.getElementById(`${likeBtn.id}counter`);
  const likes = counter.innerHTML.split(' ');
  likes[0] = Number(likes[0]) + 1;
  counter.innerHTML = likes.join(' ');
};

const likeBtn = () => {
  const btnLike = document.querySelectorAll('.like');
  btnLike.forEach((btn) => {
    btn.addEventListener('click', () => {
      addLike(btn);
    });
  });
};

const displayShows = async () => {
  const show = await currentLikes();
  const container = document.querySelector('.container');
  container.innerHTML = '';
  for (let i = 0; i < show.length; i += 1) {
    container.innerHTML += `
        <article class="article">
        <img src=${show[i].image.medium}>
        <div class="title" id="${show[i].id}">
        <h2>${show[i].name}</h2>
        <div class="likes">
        <i class="fa-sharp fa-regular fa-heart like" id="${show[i].id}"></i>
        <p id="${show[i].id}counter">${show[i].likes || 0} likes</p>
        </div>
        </div>
        <button class="comment">Comments</button>
        </article>
        `;
  }
  likeBtn();
  showsCount();
};

displayShows()

export default showsCount
