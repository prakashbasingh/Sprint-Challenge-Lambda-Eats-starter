import React from 'react';
import styled from 'styled-components'

const FormContainer = styled.form`
margin: 2rem;
padding: 2rem;
box-shadow: 0 0 9px 5px gray;
background-color: silver;
`
const ToppingsContainer = styled.div`
display: flex;
`
const TextContainer = styled.div`
margin: 5px;
`
const ErrorMessage = styled.div`
color: red;

`

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
        <FormContainer>
          {/* ///// DROPDOWN ///// */}
            <div className = 'pizzaSize'>
                <h3>Choice of Size</h3>
                {/* <ErrorMessage>{errors.pizzaSize}</ErrorMessage> */}
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
                <label>Original Red</label>
                    <input checked={values.checkBox.originalRed}
                    onChange={onCheckboxChange}
                    name='originalRed'
                    type="checkbox" /> 
                <label>Garlic Ranch </label>
                    <input  checked={values.checkBox.garlicRanch}
                    onChange={onCheckboxChange}
                    name='garlicRanch'
                    type="checkbox" />
                <label>BBQ Sauce</label>
                    <input checked={values.checkBox.bbqSauce}
                    onChange={onCheckboxChange}
                    name='bbqSauce'
                    type="checkbox" /> 
                <label>Spinach Alfredo</label>
                    <input checked={values.checkBox.spinachAlfredo}
                    onChange={onCheckboxChange}
                    name='spinachAlfredo'
                    type="checkbox" /> 
            </div>
            <h3>Add Toppings</h3> <h4>Choose up to 10</h4> 
            <ToppingsContainer>
                <div>
                    <div><label>Pepperoni</label>
                        <input checked={values.checkBox.pepperoni}
                        onChange={onCheckboxChange}
                        name='pepperoni'
                        type="checkbox" /> </div>
                   <div><label>Sausage</label>
                        <input checked={values.checkBox.sausage}
                        onChange={onCheckboxChange}
                        name='sausage'
                        type="checkbox" /></div>
                   <div><label>Canadian Bacon </label>
                        <input checked={values.checkBox.canadianBacon}
                        onChange={onCheckboxChange}
                        name='canadianBacon'
                        type="checkbox" /></div> 
                    <div><label>Spicy Italian Sausage </label>
                        <input checked={values.checkBox.spicyItalianSausage}
                        onChange={onCheckboxChange}
                        name='spicyItalianSausage'
                        type="checkbox" /></div> 
                    <div><label>Grilled chicken</label>
                        <input checked={values.checkBox.grilledChicken}
                        onChange={onCheckboxChange}
                        name='grilledChicken'
                        type="checkbox" /></div> 
                    <div><label>Onions </label>
                        <input  checked={values.checkBox.onions}
                        onChange={onCheckboxChange}
                        name='onions'
                        type="checkbox" /></div> 
                    <div><label> Green Pepper</label>
                        <input checked={values.checkBox.greenPepper}
                        onChange={onCheckboxChange}
                        name='greenPepper'
                        type="checkbox" /></div>
                </div> 

                <div>
                <div><label>Diced Tomato</label>
                        <input checked={values.checkBox.dicedTomato}
                        onChange={onCheckboxChange}
                        name='dicedTomato'
                        type="checkbox" /></div>
                    <div><label>Black Olives </label>
                        <input checked={values.checkBox.blackOlives}
                        onChange={onCheckboxChange}
                        name='blackOlives'
                        type="checkbox" /></div> 
                    <div><label>Roasted Garlic</label>
                        <input checked={values.checkBox.roastedGarlic}
                        onChange={onCheckboxChange}
                        name='roastedGarlic'
                        type="checkbox" /></div> 
                    <div><label>Artichoke Heart </label>
                        <input checked={values.checkBox.artichokeHeart}
                        onChange={onCheckboxChange}
                        name='artichokeHeart'
                        type="checkbox" /></div> 
                    <div><label>Three Cheese</label>
                        <input checked={values.checkBox.threeCheese}
                        onChange={onCheckboxChange}
                        name='threeCheese'
                        type="checkbox" /></div> 
                    <div><label>Pineapple</label>
                        <input checked={values.checkBox.pineapple}
                        onChange={onCheckboxChange}
                        name='pineapple'
                        type="checkbox" /> </div>
                    <div><label> Extra Cheese</label>
                        <input checked={values.checkBox.extraCheese}
                        onChange={onCheckboxChange}
                        name='extraCheese'
                        type="checkbox" /></div>
                </div> 
            </ToppingsContainer>
            <div>
                <h3>Choice of Substitute</h3> 
                <label>Gluten Free Crust (+$ 1.00)</label>
                    <input checked={values.checkBox.glutenFreeCrust}
                        onChange={onCheckboxChange}
                        name='glutenFreeCrust'
                        type="checkbox" /> 
            </div> 
                       {/* TEXT INPUTS  */}
            <TextContainer>           
                <div><label>Special Instruction</label><ErrorMessage>{errors.specialInstruction}</ErrorMessage>
                        <input value={values.specialInstruction}
                            onChange={onInputChange}
                            name='specialInstruction'
                            type='text'/></div> 
                <div><label>Name:</label></div><ErrorMessage>{errors.name}</ErrorMessage>
                        <input value={values.name}
                            onChange={onInputChange}
                            name='name'
                            type='text'/>
            </TextContainer> 
            {/* the following is for button which needs a handler */}
            <div>
                <button onClick={onSubmit} disabled={disabled}> Add to Order</button>
            </div>
        </FormContainer>
    
    )

}

export default PizzaOrderForm
