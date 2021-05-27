import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import 'fa-icons';

@customElement('portion-sizes')
class DiaryItem extends LitElement{

    @property({type: Boolean}) selected = false;
    @property({type: String}) name = "";
    @property({type:String}) icon = "";
    @property({type:String}) groupname = "";

    static styles = css`
        :host{
        }

        label{
            padding:20px;
            margin: 20px;
            border-radius: 5000px;
            border-color: #8D99AE;
            border-width: 10px;
            border: solid;
        }

        :checked + span {
            background-color: #8D99AE;
        }

        .hidden{
            display:none
        }

        span{
            width:100%;
            height:100%;
        }

    `;

    constructor(){
        super();
    }

    render(){
        return html`
                <label for="snack">
                    <input value="S" id="snack" type="radio" class="hidden" name="portion">
                    <span><fa-icon class="fas fa-utensils"></fa-icon></span>
                </label>
                <label for="meal">
                    <input checked value="M" id="meal" type="radio" class="hidden" name="portion">
                    <span><fa-icon class="fas fa-utensils"></fa-icon></span>
                </label>
                <label for="lavish">
                    <input  value="L" id="lavish" type="radio" class="hidden" name="portion">
                    <span><fa-icon class="fas fa-utensils"></fa-icon></span>
                </label>
        `;
    }
}