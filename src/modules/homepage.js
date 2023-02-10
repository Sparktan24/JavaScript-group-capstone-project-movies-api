import { showData } from './api.js';

/* const shows = ['La Casa de Papel', '1899', 'Dark',
'Stranger Things', 'Squid Game', 'Ginny & Georgia']; */
//  const shows =[327417, 384429, 334824, 305288, 383275, 393625] //Thetvdb ids for each show

const shows = [27436, 39749, 17861, 2993, 43687, 47549]; //  TVmaze ids
const displayShows = async () => {
  const container = document.querySelector('.container');
  shows.forEach(async (e) => {
    const show = await showData(e);
    container.innerHTML += `
        <article id='${show.id}'>
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
