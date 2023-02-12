/** @jest-environment jsdom */

describe('Homepage items counter Tests', () => {
  it('Should test if showsCount is adding all shows to the home page', () => {
    let counter = '';
    const showInfo = () => ['La Casa de Papel', '1899'];
    const showsCount = () => {
      const show = showInfo();
      counter = `Top binge-worthy shows (${show.length})`;
      return counter;
    };
    showsCount();
    expect(counter).toBe('Top binge-worthy shows (2)');
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
