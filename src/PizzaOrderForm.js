import React from 'react';

const PizzaOrderForm = (props) => {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    }= props
    
    return (
        <form className = 'orderContainer'>
            <div className="errors">
                {errors.name},
                {errors.pizzaSize},
                {/* {errors.originalRed},
                {errors.garlicRanch},
                {errors.bbqSauce},
                {errors.spinachAlfredo},
                {errors.pepperoni},
                {errors.sausage},
                {errors.canadianBacon},
                {errors.spicyItalianSausage},
                {errors.grilledChicken},
                {errors.onions},
                {errors.greenPepper},
                {errors.dicedTomato},
                {errors.blackOlives},
                {errors.roastedGarlic},
                {errors.artichokeHeart},
                {errors.threeCheese},
                {errors.pineapple},
                {errors.extraCheese},
                {errors.glutenFreeCrust},
                {errors.specialInstruction} */}
            </div>

          {/* ///////////text input///// */}

                <label>Name:</label>
                <input value={values.name}
                onChange={onInputChange}
                name='name'
                type='text'/>

          {/* ///// DROPDOWN ///// */}

            <div className = 'pizzaSize'>
                <h3>Choice of Size</h3>
                <h4>Required</h4>
                <label> <select  value={values.pizzaSize}
                                onChange={onInputChange}
                                name='pizzaSize' >
                    <option defaultValue=''>Please Select</option>
                    <option value='large'>Large</option>
                    <option value='medium'>Medium</option>
                    <option value= 'small'>Small</option>
                </select></label>
            </div>

            {/* ///// CHECKBOXES ///// */}
            <div>
                <h3>Choice of Sauce</h3> 
                <h4>Required</h4>
                <label>Original Red</label>
                    <input // checked={values.choiceOfSauce.originalRed}
                    onChange={onCheckboxChange}
                    name='originalRed'
                    type="checkbox" /> 
                <label>Garlic Ranch </label>
                    <input  // checked={values.choiceOfSauce.garlicRanch}
                    onChange={onCheckboxChange}
                    name='garlicRanch'
                    type="checkbox" />
                <label>BBQ Sauce</label>
                    <input // checked={values.choiceOfSauce.bbqSauce}
                    onChange={onCheckboxChange}
                    name='bbqSauce'
                    type="checkbox" /> 
                <label>Spinach Alfredo</label>
                    <input // checked={values.choiceOfSauce.spinachAlfredo}
                    onChange={onCheckboxChange}
                    name='spinachAlfredo'
                    type="checkbox" /> 
            </div>
            <div>
            
                <div>
                    <h3>Add Toppings</h3> <h4>Choose up to 10</h4> 
                    <label>Pepperoni</label>
                        <input // checked={values.addToppings.pepperoni}
                        onChange={onCheckboxChange}
                        name='pepperoni'
                        type="checkbox" /> 
                    <label>Sausage</label>
                        <input // checked={values.addToppings.sausage}
                        onChange={onCheckboxChange}
                        name='sausage'
                        type="checkbox" />
                    <label>Canadian Bacon </label>
                        <input // checked={values.addToppings.canadianBacon}
                        onChange={onCheckboxChange}
                        name='canadianBacon'
                        type="checkbox" /> 
                    <label>Spicy Italian Sausage </label>
                        <input // checked={values.addToppings.spicyItalianSausage}
                        onChange={onCheckboxChange}
                        name='spicyItalianSausage'
                        type="checkbox" /> 
                    <label>Grilled chicken</label>
                        <input // checked={values.addToppings.grilledChicken}
                        onChange={onCheckboxChange}
                        name='grilledChicken'
                        type="checkbox" /> 
                    <label>Onions </label>
                        <input  // checked={values.addToppings.onions}
                        onChange={onCheckboxChange}
                        name='onions'
                        type="checkbox" /> 
                    <label> Green Pepper</label>
                        <input // checked={values.addToppings.greenPepper}
                        onChange={onCheckboxChange}
                        name='greenPepper'
                        type="checkbox" />
                </div> 

                <div>
                    <label>Diced Tomato</label>
                        <input // checked={values.addToppings.dicedTomato}
                        onChange={onCheckboxChange}
                        name='dicedTomato'
                        type="checkbox" />
                    <label>Black Olives </label>
                        <input // checked={values.addToppings.blackOlives}
                        onChange={onCheckboxChange}
                        name='blackOlives'
                        type="checkbox" /> 
                    <label>Roasted Garlic</label>
                        <input // checked={values.addToppings.roastedGarlic}
                        onChange={onCheckboxChange}
                        name='roastedGarlic'
                        type="checkbox" /> 
                    <label>Artichoke Heart </label>
                        <input // checked={values.addToppings.artichokeHeart}
                        onChange={onCheckboxChange}
                        name='artichokeHeart'
                        type="checkbox" /> 
                    <label>Three Cheese</label>
                        <input // checked={values.addToppings.threeCheese}
                        onChange={onCheckboxChange}
                        name='threeCheese'
                        type="checkbox" /> 
                    <label>Pineapple</label>
                        <input // checked={values.addToppings.pineapple}
                        onChange={onCheckboxChange}
                        name='pineapple'
                        type="checkbox" /> 
                    <label> Extra Cheese</label>
                        <input // checked={values.addToppings.extraCheese}
                        onChange={onCheckboxChange}
                        name='extraCheese'
                        type="checkbox" />
                </div> 
            </div>
            <div>
                <h3>Choice of Substitute</h3> <h4>Choose up to 1</h4>
                <label>Gluten Free Crust (+$ 1.00)</label>
                    <input // checked={values.substitute.glutenFreeCrust}
                        onChange={onCheckboxChange}
                        name='glutenFreeCrust'
                        type="checkbox" /> 
            </div> 
            
                    {/* TEXT INPUTS  */}
            <div>
                <label>Special Instruction</label>
                    <input value={values.specialInstruction}
                        onChange={onInputChange}
                        name='specialInstruction'
                        type='text'/> 
            </div>
            {/* the following is for button which needs a handler */}
            <div>
                <button onClick={onSubmit} disabled={disabled}> Add to Order</button>
            </div>
        </form>
    
    )

}

export default PizzaOrderForm
