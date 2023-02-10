import { showData, addLike, getLikes } from './api';

const showsCount = () => {
  const shows = document.querySelectorAll('.article').length;
  const addCount = document.querySelector('.count-shows');
  addCount.innerHTML = `Top binge-worthy shows (${shows})`;
};

const shows = ['La Casa de Papel', '1899', 'Dark', 'Stranger Things', 'Squid Game', 'Ginny & Georgia'];

const displayShows = async () => {
  const likesArr = await getLikes();
  shows.forEach(async (e) => {
    const show = await showData(e);
    const { id } = show;
    const likes = likesArr.find((el) => el.item_id === id) || { likes: '0' };
    const container = document.querySelector('.container');
    container.innerHTML += `
        <article id"${show.id} class"article">
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
  showsCount()
};

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

export default showsCount;

// const show = [];

// export const showInfo = async () => {
//   shows.forEach(async (e) => {
//     const data = await showData(e);
//    show.push(data)
//     console.log(show)
//   });
//   return show;
// };

// console.log(show);

// const currentLikes = async () => {
//   const likes = await getLikes();
//   const show = await showInfo();
//   for (let i = 0; i < likes.length; i += 1) {
//     for (let x = 0; x < show.length; x += 1) {
//       if (Number(likes[i].item_id) === show[x].id) {
//         show[x].likes = likes[i].likes;
//       }
//     }
//   }
//   return show;
// };

// const updateLikes = (btn) => {
//   const counter = document.getElementById(`${btn.id}counter`);
//   const likes = counter.innerHTML.split(' ');
//   likes[0] = Number(likes[0]) + 1;
//   counter.innerHTML = likes.join(' ');
// };

// const likeBtn = () => {
//   const btnLike = document.querySelectorAll('.like');
//   btnLike.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       addLike();
//       updateLikes(btn);
//     });
//   });
// };

// const displayShows = async () => {
//   const show = await currentLikes();
//   const container = document.querySelector('.container');
//   shows.forEach(async (e) => {
//     const show = await showData(e);
//   container.innerHTML = '';
//   for (let i = 0; i < show.length; i += 1) {
//     container.innerHTML += `
//         <article>
//         <img src=${show.image.medium}>
//         <div class="title">
//         <h2>${show.name}</h2>
//         <i class="fa-sharp fa-regular fa-heart"></i>
//         <img src=${show[i].image.medium}>
//         <div class="title" id="${show[i].id}">
//         <h2>${show[i].name}</h2>
//         <i id="${show[i].id}""class="fa-sharp fa-regular fa-heart like"></i>
//         <p class="likes" id="${show[i].id}counter">${show[i].likes || 0} likes</p>
//         </div>
//         <button class="comment">Comments</button>
//         </article>
//         `;
//   });
//   }
//   likeBtn();
// };

// displayShows();
// export default displayShows;