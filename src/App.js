


import React, { useState, useEffect } from 'react';
import {BrowserRouter , Route,  Link } from "react-router-dom";

import axios from 'axios'
import * as yup from 'yup'

import PizzaOrderForm from './PizzaOrderForm'
 



//url for GET and POST
const url ='https://reqres.in'

//initial state of form
const initialFormValues = {
     /////TEXT INPUT///
     name: '',
    ///// DROPDOWN /////
    pizzaSize: '',
    ///// CHECKBOXES /////
     originalRed: false,
     garlicRanch: false,
     bbqSauce: false,
     spinachAlfredo: false,
     pepperoni: false,
     sausage: false,
     canadianBacon: false,
     spicyItalianSausage: false,
     grilledChicken: false,
     onions: false,
     greenPepper: false,
     dicedTomato: false,
     blackOlives: false,
     roastedGarlic: false,
     artichokeHeart: false,
     threeCheese: false,
     pineapple: false,
     extraCheese: false,
     glutenFreeCrust: false,
    ///// TEXT INPUTS /////
     specialInstruction: '',
  }

  //for validation errors object
  const initialFormErrors = {
    name: '',
    pizzaSize: '',
     originalRed: '',
     garlicRanch: '',
     bbqSauce: '',
     spinachAlfredo: '',
     pepperoni: '',
     sausage: '',
     canadianBacon: '',
     spicyItalianSausage: '',
     grilledChicken: '',
     onions: '',
     greenPepper: '',
     dicedTomato: '',
     blackOlives: '',
     roastedGarlic: '',
     artichokeHeart: '',
     threeCheese: '',
     pineapple: '',
     extraCheese: '',
     glutenFreeCrust: '',
     specialInstruction: '',
  }


//creating schema for validation
const formSchema = yup.object().shape({
  name: yup
        .string()
        .min(2, 'Name must have at least 2 character in length')
        .required('Name is required'),
  pizzaSize: yup
    .string(),
    originalRed: yup.string(),
    garlicRanch: yup.string(),
    bbqSauce: yup.string(),
    spinachAlfredo: yup.string(),
    pepperoni: yup.string(),
    sausage: yup.string(),
    canadianBacon: yup.string(),
    spicyItalianSausage: yup.string(),
    grilledChicken: yup.string(),
    onions: yup.string(),
    greenPepper: yup.string(),
    dicedTomato: yup.string(),
    blackOlives: yup.string(),
    roastedGarlic: yup.string(),
    artichokeHeart: yup.string(),
    threeCheese: yup.string(),
    pineapple: yup.string(),
    extraCheese: yup.string(),
    glutenFreeCrust: yup.string(),
    specialInstruction: yup.string(),
  
})
  

const App = () => {
 const [orders, setOrders] = useState([])
//  console.log(orders, 'wwwwwwwwwwwwwwwwwwwwwwwwwww?')
 const [formValues, setFormValues] = useState (initialFormValues)
 //to track submitt button is disabled or not
 const[formDisabled, setFormDisabled] = useState(true)
 //state to track validation errors
 const [formErrors, setFormErrors] = useState(initialFormErrors)

 
 const onInputChange = (event) => {
  const name = (event).target.name
  const value = (event).target.value

  //  IF THE FORM VALUES CHANGE, WE NEED TO RUN VALIDATION
  // and update the form errors slice of state (so the form can display errors)
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
    return setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch(error => {
      
      // SETting  THE ERROR IN THE RIGHT PLACE
      setFormErrors({
        ...formErrors,
        [name]: error.errors[0]
      })
    })

  setFormValues({
    ...formValues,
    [name]: value,
  });
};

 // to run validation if form value vhanges
 useEffect(() => {
  formSchema.isValid(formValues)
    .then((valid) => {
      setFormDisabled(!valid)
    });
  }, [formValues]);

const onCheckboxChange = (event) => {
  const { name } = event.target.name
    const isChecked = event.target.checked

    setFormValues({
      ...formValues,
      pizzaSize: {
        ...formValues.pizzaSize,
        [name]: isChecked,
      }
    })
  }
  const postOrder = order =>
  axios.post(url, order)
  .then (success => {
    setOrders([success.data, ...orders])
    console.log(success.data, 'go the data....???????')
  
  })
  .catch(error => {
    console.log(error, 'qqqqqqqqqqQQQQQQ???')
  })

  

  const onSubmit = (event) => {
    event.preventDefault()

    const newOrder = {
     name: formValues.name,
     pizzaSize: formValues.pizzaSize,
     originalRed: formValues.originalRed,
     garlicRanch: formValues.garlicRanch,
     bbqSauce: formValues.bbqSauce,
     spinachAlfredo: formValues.spinachAlfredo,
     pepperoni: formValues.pepperoni,
     sausage: formValues.sausage,
     canadianBacon: formValues.canadianBacon,
     spicyItalianSausage: formValues.spicyItalianSausage,
     grilledChicken: formValues.grilledChicken,
     onions: formValues.onions,
     greenPepper: formValues.greenPepper,
     dicedTomato: formValues.dicedTomato,
     blackOlives: formValues.blackOlives,
     roastedGarlic: formValues.roastedGarlic,
     artichokeHeart: formValues.artichokeHeart,
     threeCheese: formValues.threeCheese,
     pineapple: formValues.pineapple,
     extraCheese: formValues.extraCheese,
     glutenFreeCrust: formValues.glutenFreeCrust,
     specialInstruction: formValues.specialInstruction,
    }
    postOrder(newOrder);
    setFormValues(initialFormValues);
  }


  //   const postOrder = (order) => {
  //   setOrders([...orders, newOrder]);
  // };

  
  

  return (
    <div>
      <header>
        <h2 className = 'lambda'> LAMBDA EATS</h2> 
        <nav>

          <h4>Home</h4>
          <h4>Order</h4>

          {/* <Route path = '/'> */}
            {/* <Link to= '/home'>Home</Link>
            <Link to= '/pizza'>Order</Link> */}
          {/* </Route> */}
        </nav>
      </header>
      <section>
        <div>
          <h1>Build Your Own Pizza</h1>
          <div>
            <img src = {'https://lh3.googleusercontent.com/proxy/zhd0DtEo2F3PVCN2KahAoNhU4QRkHN87tVYR8CQkbGI9ta96SQM9l6E21CLPslSUA1bo3QIopeW-kV-LHiaA_xuzt8dvBYMamQ'} alt = ''/>
          </div>
          {/* <Route path ='/'> */}
            <h2> Everyday Special Pizza</h2>
          {/* </Route> */}
        </div>
        <PizzaOrderForm   values= {formValues}
                          onInputChange={onInputChange}
                          onCheckboxChange={onCheckboxChange}
                          onSubmit={onSubmit}
                          disabled={formDisabled}
                          errors={formErrors}
        />
        <div>
          {orders.map((order) => {
            return (
              <div>
                <h4>Name:{order.name}</h4>
                <p>Sauce : {order.originalRed}</p>
                <p>Size: {order.pizzaSize}</p>
                <p>special Instruction: {order.specialInstruction}</p>
              </div>
            )}
          )}
        </div>
      </section>
    </div>
  );
};
export default App;
