import { showData, addLike, getLikes } from './api';

const shows = ['La Casa de Papel', '1899', 'Dark', 'Stranger Things', 'Squid Game', 'Ginny & Georgia'];

const displayShows = async () => {
  shows.forEach(async (e) => {
    const show = await showData(e);
    const {id} = show
    const likesArr = await getLikes()
    const likes = likesArr.find((el) => el.item_id === id) || { likes: '0' };
    container.innerHTML += `
        <article id"${show.id}">
        <img src=${show.image.medium}>
        <div class="title">
        <h2>${show.name}</h2>
        <i class="fa-sharp fa-regular fa-heart like"></i>
        <p class="like_text">${likes.likes} likes</p>
        </div>
        <button class="comment">Comments</button>
        </article>
        `;
  });
}

const updateDOM = (id) => {
  let currLikes = document.getElementById(id).childNodes[2].childNodes[3].innerHTML;
  currLikes = Number(currLikes.substring(0, 2)) + 1;
  const likesContainer = document.getElementById(id).childNodes[2].childNodes[3];
  likesContainer.innerHTML = `${currLikes} likes`;
};

const saveLikeAPI = async (id) => {
  await addLike(id);
};

const addLikesEvLis = async () => {
  await displayShows();
  const likesArr = document.querySelectorAll('.like');
  likesArr.forEach((e) => {
    e.onclick = () => {
      const { id } = e.parentElement.parentElement;
      saveLikeAPI(id);
      updateDOM(id);
    };
  });
};

addLikesEvLis();