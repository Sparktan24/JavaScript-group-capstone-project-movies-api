/** @jest-environment jsdom */

import {showsCount} from './homepage';

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
});

