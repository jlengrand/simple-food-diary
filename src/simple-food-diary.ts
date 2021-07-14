import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import './food-log-form.js';
import './login-screen.js';

@customElement('simple-food-diary')
export class SimpleFoodDiary extends LitElement {
  @property({ type: String }) title = 'My app';

  @state()
  me?: Object;

  connectedCallback() {
    super.connectedCallback();

    if (!this.me) {
      this.fetchMe();
    }
  }

  async fetchMe() {
    const response = await fetch('/.auth/me');
    const jsonResponse = await response.json();
    this.me = jsonResponse.clientPrincipal;
  }

  render() {
    return html`
      <header>
        <pre>${JSON.stringify(this.me, null, 2)}</pre>

        ${this.me
          ? html`<a href="/.auth/logout">Logout</a>`
          : html`<a href="/.auth/login/twitter">Login</a>`}
      </header>
      <main>
        <food-log-form></food-log-form>
      </main>

      <footer></footer>
    `;
  }

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

    header {
      background-color: red;
      width: 100%;
    }

    .portion-sizes {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .meal-types {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  `;

  // submitMeal(){
  //   console.log("submitting!");
  //   const stuff = document.querySelectorAll('input:checked');
  //   console.log(stuff);
  //   const zeTypes = Array.from(document.querySelectorAll('input:checked')).map(e => e.nodeValue);
  //   console.log(zeTypes);
  // }
}
