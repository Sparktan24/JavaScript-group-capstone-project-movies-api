/** @jest-environment jsdom */
import showsCount from './homepage';

describe('Homepage items counter Tests', () => {
  document.body.innerHTML = `
<li class="count-shows">Top binge-worthy shows</li>
<main class="container">
<article class="article" id="27436"></article>
<article class="article" id="39749"></article>
</main>
`;

  it('Should test if showsCount() is adding all items counter to the home page', () => {
    const counter = document.querySelector('.count-shows');
    showsCount();
    expect(counter.innerHTML).toBe('Top binge-worthy shows (2)');
  });

  it('Count comments', () => {
    document.body.innerHTML = `
    <div id="posted-comments">
    <div>2023-02-09 Nico: Good show.</div>
    <div>2023-02-10 Neto: Test squid.</div>
    <div>2023-02-10 Neto: Test squid 2.</div>
    <div>2023-02-10 Neto: Test squid 3.</div></div>
    `;
    const count = document.querySelector('#posted-comments').children.length;
    expect(count).toBe(4);
  });

  it('Count header', () => {
    document.body.innerHTML = `
    <section class="comments-section">
      <h3 id="comments-header">Comments(4)</h3>
        <div class="comments-container">
          <div id="posted-comments">
            <div>2023-02-09 Nico: Good show.</div>
            <div>2023-02-10 Neto: Test squid.</div>
            <div>2023-02-10 Neto: Test squid 2.</div>
            <div>2023-02-10 Neto: Test squid 3.</div>
          </div>
        </div>
        </section>
    `;

    let commentHeader = '';
    const countComments = () => {
      const count = document.querySelector('#posted-comments').children.length;
      commentHeader = document.querySelector('#comments-header');
      commentHeader.innerHTML = `Comments(${count})`;
    };
    countComments();
    expect(commentHeader.innerHTML).toBe('Comments(4)');
  });
});
