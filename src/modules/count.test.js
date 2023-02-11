/** @jest-environment jsdom */

import { getComments } from './comment_handler.js';

describe('Homepage items counter Tests', () => {
  it('Should test if showsCount is adding all shows to the home page', () => {
    const htmlEl = `
    <div class="comments-container">
    <div id="posted-comments">
    <div>2023-02-09 Jon: Amazing.</div>
    <div>2023-02-09 Jon: Amazing.</div>
    <div>2023-02-09 Neto: Cool.</div>`;
    const count = document.querySelector('#posted-comments').children.length;
    const commentHeader = document.querySelector('#comments-header');
    commentHeader.innerHTML = `Comments(${count})`;
    let counter = '';
    const showsCount = () => {
      getComments(27436);
      counter = `(${getComments.length})`;
      return counter;
    };
    showsCount();
    expect(counter).toBe(2);
  });
});
