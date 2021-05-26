import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import 'fa-icons';

@customElement('diary-item')
class DiaryItem extends LitElement{

    @property({type: Boolean}) selected = false;
    @property({type: String}) name = "";
    @property({type:String}) icon = "";

    static styles = css``;

    constructor(){
        super();
        this.addEventListener('click', e => {this.selected = !this.selected});
    }

    render(){
        return html`
            <fa-icon class="${this.icon}"></fa-icon>
            <p> ${this.name}</p>
        `;
    }
}