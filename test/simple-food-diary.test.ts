import { html, fixture, expect } from '@open-wc/testing';

import { SimpleFoodDiary } from '../src/simple-food-diary.js';
import '../src/simple-food-diary.js';


describe('SimpleFoodDiary', () => {
  let element: SimpleFoodDiary;
  beforeEach(async () => {
    element = await fixture(html`<simple-food-diary></simple-food-diary>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
