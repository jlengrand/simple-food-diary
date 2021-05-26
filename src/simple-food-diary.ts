import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
  `;

  render() {
    return html`
    <app-layout>
      <drawer-toggle></drawer-toggle>

      <div class="content">
        <h2>Portion size</h2>

          <checkbox>snack</checkbox>
          <checkbox>meal</checkbox>
          <checkbox>Lavish meal</checkbox>

        <h2>Meal type</h2>

          <checkbox>Alcohol</checkbox>
          <checkbox>Meat</checkbox>
          <checkbox>Caffeine</checkbox>
          <checkbox>Keto</checkbox>
          <checkbox>Processed</checkbox>
          <checkbox>water</checkbox>
          <checkbox>delivered</checkbox>

        <button>Submit</button>
        </div>
    </app-layout>
    `;
  }
}
