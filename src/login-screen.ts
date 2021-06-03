import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("login-screen")
export class LoginScreen extends LitElement {
    static styles = css``;

    render(){
        return html`
        <a href="/.auth/login/github">Login</a>
        `;
    }
}