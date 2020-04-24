import React, { useState, useEffect } from 'react';

function PizzaOrderForm (props) {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    }= props
    
    return (
        
        <div className="errors">
            {errors.pizzaSize},
            {errors.choiceOfSauce},
            {errors.addToppings},
            {errors.substitute},
            {errors.specialInstruction},
        </div>


        ///// DROPDOWN /////
        <div className = 'pizzaSize'>
            <h3>Choice of Size</h3>
            <h4>Required</h4>
            <label><select
                value={values.pizzaSize}
                onChange={onInputChange}
                name='pizzaSize'
            >
                <option defaultValue=''>Please Select</option>
                <option value='large'>Large</option>
                <option value='medium'>Medium</option>
                <option value= 'small'>Small</option>
            </select></label>
        </div>

            ///// CHECKBOXES /////
        <div>
            <h3>Choice of Sauce</h3> 
            <h4>Required</h4>
            <label><input
                checked={values.choiceOfSauce.originalRed}
                onChange={onCheckboxChange}
                name='originalRed'
                type="checkbox" /> Original Red</label>
            <label><input
                checked={values.choiceOfSauce.garlicRanch}
                onChange={onCheckboxChange}
                name='garlicRanch'
                type="checkbox" /> Garlic Ranch</label>
            <label><input
                checked={values.choiceOfSauce.bbqSauce}
                onChange={onCheckboxChange}
                name='bbqSauce'
                type="checkbox" /> BBQ Sauce</label>
            <label><input
                checked={values.choiceOfSauce.spinachAlfredo}
                onChange={onCheckboxChange}
                name='spinachAlfredo'
                type="checkbox" /> Spinach Alfredo</label>
        </div>
        <div>
           
             <div>
                <h3>Add Toppings</h3> <h4>Choose up to 10</h4> 
                <label><input
                    checked={values.addToppings.pepperoni}
                    onChange={onCheckboxChange}
                    name='pepperoni'
                    type="checkbox" /> Pepperoni</label>
                <label><input
                    checked={values.addToppings.sausage}
                    onChange={onCheckboxChange}
                    name='sausage'
                    type="checkbox" />Sausage</label>
                <label><input
                    checked={values.addToppings.canadianBacon}
                    onChange={onCheckboxChange}
                    name='canadianBacon'
                    type="checkbox" /> Canadian Bacon </label>
                <label><input
                    checked={values.addToppings.spicyItalianSausage}
                    onChange={onCheckboxChange}
                    name='spicyItalianSausage'
                    type="checkbox" /> Spicy Italian Sausage </label>
                <label><input
                    checked={values.addToppings.grilledChicken}
                    onChange={onCheckboxChange}
                    name='grilledChicken'
                    type="checkbox" /> Grilled chicken</label>
                <label><input
                    checked={values.addToppings.onions}
                    onChange={onCheckboxChange}
                    name='onions'
                    type="checkbox" /> Onions </label>
                <label><input
                    checked={values.addToppings.greenPepper}
                    onChange={onCheckboxChange}
                    name='greenPepper'
                    type="checkbox" /> Green Pepper</label>
            </div> 

            <div>
                <label><input
                    checked={values.addToppings.dicedTomato}
                    onChange={onCheckboxChange}
                    name='dicedTomato'
                    type="checkbox" />{dicedTomato}</label>
                <label><input
                    checked={values.addToppings.blackOlives}
                    onChange={onCheckboxChange}
                    name='blackOlives'
                    type="checkbox" /> Black Olives </label>
                <label><input
                    checked={values.addToppings.roastedGarlic}
                    onChange={onCheckboxChange}
                    name='roastedGarlic'
                    type="checkbox" /> Roasted Garlic</label>
                <label><input
                    checked={values.addToppings.artichokeHeart}
                    onChange={onCheckboxChange}
                    name='artichokeHeart'
                    type="checkbox" /> Artichoke Heart </label>
                <label><input
                    checked={values.addToppings.threeCheese}
                    onChange={onCheckboxChange}
                    name='threeCheese'
                    type="checkbox" /> Three Cheese</label>
                <label><input
                    checked={values.addToppings.pineapple}
                    onChange={onCheckboxChange}
                    name='pineapple'
                    type="checkbox" /> Pineapple</label>
                <label><input
                    checked={values.addToppings.extraCheese}
                    onChange={onCheckboxChange}
                    name='extraCheese'
                    type="checkbox" /> Extra Cheese</label>
            </div> 
        </div>
        <div>
            <h3>Choice of Substitute</h3> <h4>Choose up to 1</h4>
            <label><input
                    checked={values.substitute.glutenFreeCrust}
                    onChange={onCheckboxChange}
                    name='glutenFreeCrust'
                    type="checkbox" /> Gluten Free Crust (+$ 1.00)</label>
        </div> 
        
                 ///// TEXT INPUTS /////
        <div>
            <h3>Special Instruction</h3>
            <label>Username:&nbsp;
                <input
                    value={values.specialInstruction}
                    onChange={onInputChange}
                    name='specialInstruction'
                    type='text'/> </label>
        </div>
        <div>
            <button onClick={onSubmit} disabled={disabled}> Add to Order</button>
        </div>
   
    
    )

}

export default PizzaOrderForm
