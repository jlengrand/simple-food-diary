import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import "./portion-sizes";
import "./meal-types";

@customElement('simple-food-diary')
export class SimpleFoodDiary extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      margin: 0 auto;
      text-align: center;
      background-color: var(--simple-food-diary-background-color);
    }

    main {
      max-width: 960px;
      flex-grow: 1;
    }

    header{
      background-color: red;
      width: 100%
    }

    .portion-sizes{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .meal-types{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  `;

  submitMeal(){
    console.log("submitting!");
    const zeTypes = Array.from(document.querySelectorAll('.inp:checked')).map(e => e.nodeValue);
    console.log(zeTypes);
  }

  render() {
    return html`
      <header></header>
      <main>

        <h2>Portion size</h2>

        <portion-sizes></portion-sizes>

        <h2>Meal type</h2>

        <meal-types></meal-types>

        <button @click="${this.submitMeal}">Submit</button>

      </main>

      <footer></footer>
    `;
  }
}
