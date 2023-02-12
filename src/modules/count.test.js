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
});
