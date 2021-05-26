import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import 'fa-icons';

@customElement('diary-item')
class DiaryItem extends LitElement{

    @property({type: Boolean}) selected = false;
    @property({type: String}) name = "";
    @property({type:String}) icon = "";

    static styles = css`
        :host{
            padding:20px;
            margin: 20px;
            border-radius: 5000px;
            border-color: #8D99AE;
            border-width: 10px;
            border: solid;
        }

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
            <div class="${this.selected ? 'selected' : ''}">
                <fa-icon class="${this.icon}"></fa-icon>

            </div>
        `;
    }
}