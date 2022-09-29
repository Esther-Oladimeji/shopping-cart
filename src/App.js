import React, {useState} from "react";
import Header from './components/front-end/Header/Header';
import Routers from "./components/front-end/Routes/Routers";
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

export default function App() {

 const data = [
  {
      name: "Panda",
      id: 1,
      rating: "ma",
      image: "./images/cake.PNG",
      price: 2000
  }, {
      name: "Cat",
      id: 2,
      rating: "ma",
      image: "./images/donut.PNG",
      price: 1500
  }, {
      name: "Dog",
      id: 3,
      rating: "ma",
      image: "./images/hamburger.PNG",
      price: 1200
  }, {
      name: "Parrot",
      id: 4,
      rating: "ma",
      image: "./images/pancake.PNG",
      price: 3000
  }, {
      name: "Tiger",
      id: 5,
      rating: "ma",
      image: "./images/pizza.PNG",
      price: 2900
  }, {
      name: "Beer",
      id: 6,
      rating: "ma",
      image: "./images/strawberry-muffin.PNG",
      price: 850
  }, {
      name: "Tiger",
      id: 6,
      rating: "ma",
      image: "./images/sushi.PNG",
      price: 1600
  }, {
      name: "Squid",
      id: 6,
      rating: "ma",
      image: "./images/ramen.PNG",
      price: 4000
  }
]
const lists = data

const [cartItems, setCartItems] = useState([])
console.log(cartItems)

 const handleAddToCart= (added) =>{
  const productExist= cartItems.find((item) => item.id === added.id)
  if (productExist) {
    setCartItems(cartItems.map((item) => item.id === added.id ?
    {...productExist, quantity: productExist.quantity + 1} : item))
  }
  else{
    setCartItems([...cartItems, {...added, quantity: 1}])
  }

//setCartItems([...cartItems, added])
 }

 const handleRemoveItem= (removed) =>{
    const productExist= cartItems.find((item) => item.id === removed.id)
    if(productExist.quantity ===1){
        setCartItems(cartItems.filter((item) =>item.id !== removed.id))
    }else{
        setCartItems(
            cartItems.map((item) => item.id === removed.id ? {...productExist, quantity: productExist.quantity - 1} : item)
        )
    }
 }


 const handleClearingCart = () =>{
setCartItems([])
 }

    return ( 
    <> 
    <Router>
        <Header cartItems= {cartItems} />
        <Routers lists= {lists} cartItems= {cartItems} handleAddToCart = {handleAddToCart} handleRemoveItem= {handleRemoveItem} handleClearingCart= {handleClearingCart}/>
    </Router> 
    </>
    );
}

