import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import "../src/diary-item";

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

  render() {
    return html`
      <header></header>
      <main>

        <h2>Portion size</h2>

        <div class="portion-sizes">
          <diary-item icon="fas fa-utensils" name="snack" on></diary-item>
          <diary-item icon="fas fa-utensils" name="meal"></diary-item>
          <diary-item icon="fas fa-utensils" name="lavish meal"></diary-item>
        </div>

        <h2>Meal type</h2>

        <div class="meal-types">
          <diary-item icon="fas fa-beer" name="alcohol"></diary-item>
          <diary-item icon="fas fa-drumstick-bite" name="meat"></diary-item>
          <diary-item icon="fas fa-coffee" name="caffeine"></diary-item>
          <diary-item icon="fas fa-bacon" name="keto"></diary-item>
          <diary-item icon="fas fa-blender-phone" name="processed"></diary-item>
          <diary-item icon="fas fa-tint" name="water"></diary-item>
          <diary-item icon="fas fa-truck" name="delivered"></diary-item>
        </div>

        <button>Submit</button>

      </main>

      <footer></footer>
    `;
  }
}
