import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import 'fa-icons';

@customElement('food-log-form')
class FoodLogForm extends LitElement{

    static styles = css`
        :host{
        }

        .portion-size{
            display : flex;
            flex-direction: row;
        }

        .meal-type{
            display : flex;
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
    }

    submitMeal(){
        const portionSize = this.shadowRoot!.querySelector<HTMLInputElement>('input[type=radio]:checked')?.value;
        const mealtypes = Array.from<HTMLInputElement>(this.shadowRoot!.querySelectorAll('input[type=checkbox]:checked')).map(e => e.value);

        const meal = {
            portionSize : portionSize,
            mealtypes : mealtypes
        }

        console.log(meal);
      }

    render(){
        return html`
            <h2>Portion size</h2>

            <div class="portion-sizes">
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
            </div>

            <h2>Meal type</h2>

            <div class="meal-type">
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
            </div>

            <button @click="${this.submitMeal}">Submit</button>

        `;
    }
}