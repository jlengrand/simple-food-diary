import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import 'fa-icons';

@customElement('meal-types')
class MealTypes extends LitElement{

    @property({type: Boolean}) selected = false;
    @property({type: String}) name = "";
    @property({type:String}) icon = "";
    @property({type:String}) groupname = "";

    static styles = css`
        :host{
            display:flex;
            flex-direction: row;
        }

        label{

            padding:20px;
            margin: 20px;
            border-radius: 5000px;
            border-color: #8D99AE;
            border-width: 10px;
            border: solid;
        }

        .hidden{
            display:none
        }

        :checked + span {
            background-color: #8D99AE;
        }
        
    `;

    constructor(){
        super();
        this.addEventListener('click', e => {
            this.selected = !this.selected; 
            console.log(this.selected);
        });
    }

    render(){
        return html`
            <label for="alcohol">
                <input value="alcohol" id="alcohol" type="checkbox" class="hidden" name="mealtype">
                <span><fa-icon class="fas fa-beer"></fa-icon></span>
            </label>
            <label for="meat">
                <input value="meat" id="meat" type="checkbox" class="hidden" name="mealtype">
                <span><fa-icon class="fas fa-drumstick-bite"></fa-icon></span>
            </label>
            <label for="caffeine">
                <input value="caffeine" id="caffeine" type="checkbox" class="hidden" name="mealtype">
                <span><fa-icon class="fas fa-coffee"></fa-icon></span>
            </label>
            <label for="keto">
                <input value="keto" id="keto" type="checkbox" class="hidden" name="mealtype">
                <span><fa-icon class="fas fa-bacon"></fa-icon></span>
            </label>
            <label for="water">
                <input value="water" id="water" type="checkbox" class="hidden" name="mealtype">
                <span><fa-icon class="fas fa-tint"></fa-icon></span>
            </label>
            <label for="processed">
                <input value="processed" id="processed" type="checkbox" class="hidden" name="mealtype">
                <span><fa-icon class="fas fa-blender-phone"></fa-icon></span>
            </label>
            <label for="delivered">
                <input value="delivered" id="delivered" type="checkbox" class="hidden" name="mealtype">
                <span><fa-icon class="fas fa-truck"></fa-icon></span>
            </label>
        `;
    }
}