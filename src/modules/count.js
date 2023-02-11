import { showInfo } from './homepage';

const showsCount = async () => {
  const shows = await showInfo();
  const addCount = document.querySelector('.count-shows');
  addCount.innerHTML = `Top binge-worthy shows (${shows.length})`;
};

export default showsCount;