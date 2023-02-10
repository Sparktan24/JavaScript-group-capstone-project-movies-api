import { showData, addLike, getLikes } from './api';

const shows = ['La Casa de Papel', '1899', 'Dark', 'Stranger Things', 'Squid Game', 'Ginny & Georgia'];

const show = [];

export const showInfo = async () => {
  shows.forEach(async (e) => {
    const data = await showData(e);
   show.push(data)
    console.log(show)
  });
  return show;
};

console.log(show);

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

const updateLikes = (btn) => {
  const counter = document.getElementById(`${btn.id}counter`);
  const likes = counter.innerHTML.split(' ');
  likes[0] = Number(likes[0]) + 1;
  counter.innerHTML = likes.join(' ');
};

const likeBtn = () => {
  const btnLike = document.querySelectorAll('.like');
  btnLike.forEach((btn) => {
    btn.addEventListener('click', () => {
      addLike();
      updateLikes(btn);
    });
  });
};

const displayShows = async () => {
  const show = await currentLikes();
  const container = document.querySelector('.container');
  container.innerHTML = '';
  for (let i = 0; i < show.length; i += 1) {
    container.innerHTML += `
        <article>
        <img src=${show[i].image.medium}>
        <div class="title" id="${show[i].id}">
        <h2>${show[i].name}</h2>
        <i id="${show[i].id}""class="fa-sharp fa-regular fa-heart like"></i>
        <p class="likes" id="${show[i].id}counter">${show[i].likes || 0} likes</p>
        </div>
        <button class="comment">Comments</button>
        </article>
        `;
  }
  likeBtn();
};

export default displayShows;

