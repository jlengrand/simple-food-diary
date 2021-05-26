import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import 'fa-icons';

@customElement('diary-item')
class DiaryItem extends LitElement{

    @property({type: Boolean}) selected = false;
    @property({type: String}) name = "";
    @property({type:String}) icon = "";

    static styles = css`
        .selected{
            background-color: #8D99AE;
        }

        .unselected{
        }
    `;

    constructor(){
        super();
        this.addEventListener('click', e => {this.selected = !this.selected});
    }

    render(){
        return html`
            <div class="${this.selected ? 'selected' : 'unselected'}">
                <fa-icon class="${this.icon}"></fa-icon>
                <p> ${this.name}</p>
            </div>
        `;
    }
}