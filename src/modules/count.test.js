import showsCount from "./homepage";

describe('Add all items counter Tests', () => {
    document.body.innerHTML = `
    <li class="count-shows">Top binge-worthy shows</li>
    <main class="container">
      <article id"27436" class"article"></article>
      <article id"39749" class"article"></article>
      <article id"17861" class"article"></article>
      <article id"2993" class"article"></article>
    </main>`;
  
    it('Should test if showsCount is adding all shows to the home page', () => {
      const addCount = document.querySelector('.count-shows');
      showsCount();
      expect(addCount.innerHTML).toBe('Top binge-worthy shows (4)');
    });
  });