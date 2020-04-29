import React, { useState, useEffect } from 'react';
import {BrowserRouter , Route,  Link } from "react-router-dom";
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'
 
import PizzaOrderForm from './PizzaOrderForm'
 
const Picture =  'https://lh3.googleusercontent.com/proxy/v7uvo0YPnpbLZcd9Mk6RKoIkmCkgRE608bawLw-EEON9cPwEuOIz6Yy7WiSLeZJIfI7UDEWI3Ts2qh4MKyFPMZQg03hVZlNGYA' 

//url for GET and POST
const url = 'http://localhost:4000/orders'

const MainContainer = styled.div`
background-color: lightgray;
/* margin: 10rem; */
margin: 5rem;
display: flex;
flex-direction: column;
justify-content: center;
box-shadow: inset 0 0 20px black;

`
const Navigation = styled.div`
background-color: black;
color: white;
display: flex;
justify-content: flex-start;
justify-content: space-around;
`
const NavBar = styled.nav`
width: 10rem;
font-size: 1.4rem;
font-weight: bold;
display: flex;
justify-content: space-around;
align-items: center;
`
const Image = styled.div`
text-align: center;
width:100%;
`
const Header = styled.div`
display: flex;
flex-direction: column;
align-content: space-around;
text-align: center;
background-color: grey;
box-shadow: inset 0 0 40px black;
`

//initial state of form
const initialFormValues = {
     /////TEXT INPUT///
     name: '',
    ///// DROPDOWN /////
    pizzaSize: '',
    ///// CHECKBOXES /////
    checkBox: {
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
    },
    glutenFreeCrust: false,
    ///// TEXT INPUTS /////
     specialInstruction: '',
  }

  //for validation errors object
  const initialFormErrors = {
     name: '',
     pizzaSize: '',
     specialInstruction: '',
  }

//creating schema for validation
const formSchema = yup.object().shape({
  name: yup
        .string()
        .min(3, 'Name must have at least 3 character in length')
        .required('Name is required'),
  pizzaSize: yup
    .string()
    // .matches(/(Large|Medium|Small)/, 'either Large or Medium or Small ')
    .required('Please Select One'),
    specialInstruction: yup
      .string()
      .min(3, 'special Instruction must have at least 3 character in length')
      // .required('special Instruction is required'),
})

const App = () => {
 const [orders, setOrders] = useState([])
//  console.log(orders, 'wwwwwwwwwwwwwwwwwwwwwwwwwww?')
 const [formValues, setFormValues] = useState (initialFormValues)
 //to track submitt button is disabled or not
 const[formDisabled, setFormDisabled] = useState(true)
 //state to track validation errors
 const [formErrors, setFormErrors] = useState(initialFormErrors)

 const getOrders = () => {
  // getting FRIENDS data  FROM THE API! and set them in state
  axios.get(url)
    .then(res => {
      setOrders(res.data)
    })
    .catch(err => {
      // debugger
    })
}

useEffect(() => {
  // AFTER THE FIRST DOM SURGERY WE NEED FRIENDS FROM API!
  getOrders()
}, [])
 
  //to post new order to the API  const postOrder = order =>
const postOrder = order => {
  axios.post(url, order)
  .then (success => {
    setOrders([...orders, success.data])
    console.log(success.data, 'got the data....???????')
  debugger
  })
  .catch(error => {
    console.log(error, 'qqqqqqqqqqQQQQQQ???')
  })
} 

 // to run validation if form value changes
useEffect(() => {
  formSchema.isValid(formValues)
    .then((valid) => {
      setFormDisabled(!valid)
    });
  }, [formValues]);

  const onSubmit = (event) => {
    event.preventDefault()

    const newOrder = {
     name: formValues.name,
     pizzaSize: formValues.pizzaSize,
     checkBox: Object.keys(formValues.checkBox)
     .filter(sauceAndToppings => formValues.checkBox[sauceAndToppings] === true),
    }
    postOrder(newOrder);
    setFormValues(initialFormValues);
  }

 const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    //  IF THE FORM VALUES CHANGE, WE NEED TO RUN VALIDATION
    // and update the form errors slice of state (so the form can display errors)
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
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

const onCheckboxChange = (event) => {
  const { name } = event.target
    const isChecked = event.target.checked

    setFormValues({
      ...formValues,
      checkBox: {
        ...formValues.checkBox,
        [name]: isChecked,
      }
    })
  }  

  return (
    <MainContainer>
      <Navigation>
        <h2 className = 'lambda'> LAMBDA EATS</h2> 
        <NavBar>
          <span>Home</span> <span>Order</span>
        </NavBar>
      </Navigation>
      <section>
        <Header>
          <h1>Build Your Own Pizza</h1>
          <Image>
            <img src = {Picture} alt = ''/>
          </Image>
          {/* <Route path ='/'> */}
            <h2> Everyday Special Pizza</h2>
          {/* </Route> */}
        </Header>
        <PizzaOrderForm   values= {formValues}
                          onInputChange={onInputChange}
                          onCheckboxChange={onCheckboxChange}
                          onSubmit={onSubmit}
                          disabled={formDisabled}
                          errors={formErrors}
        />
        {/* <div>
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
        </div> */}
      </section>
    </MainContainer>
  );
};
export default App;
