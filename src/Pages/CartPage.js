import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Heading } from "../components/Products";
import SingleCart from "../components/SingleCart";
import { useGlobalContext } from "../Context";
import StripeCheckout from "react-stripe-checkout";
import { auth } from "../firestore";
import axios from "axios"
import secret from "../env";

const CartPage = () => {
  const { cartItems, setCartItems, total, isUserRegistered, isAddress } = useGlobalContext();

  const [mail, setMail] = useState("")
  
  useEffect(()=>{
    const user = auth.currentUser;
    if(user){
      setMail(user.email)
    }
  },[])
  const clearCart = () => {
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <EmptyCart>
        <h3>Your Cart is Empty ;)</h3>
        <Link className="link cart-btn" to="/products">
          Shop Now
        </Link>
      </EmptyCart>
    );
  }

  const payment = async(token)=>{
    await axios.post("http://localhost:3001/pay", {
      amount: total,
      token: token
    })
    // console.log(token);
    alert("Payment is successful! Your order has been placed.");
  }

  const handleClose = ()=>{
    console.log('closed');
  }

  return (
    <>
      <Heading>Cart</Heading>

      {cartItems.map((item) => {
        return <SingleCart key={item.id} {...item} />;
      })}

      <CartFooter>
        <div className="container">
          <Link to="/products" className="link cart-btn ">Continue Shopping</Link>

          <button className="danger" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <Order>
          <h3>ORDER TOTAL:  &#x20b9;{total}</h3>
          {isUserRegistered ? "" : <>
            <p>Sign in to checkout⬇️</p> 
            <Link to="/auth" className="link auth-btn">Sign In</Link>
          </>}
          {isAddress ? " " : <>
            <p>Add Address⬇️</p> 
            <Link to="/account" className="link auth-btn">Settings</Link>
          </>}
          {isUserRegistered && isAddress ? 
          <StripeCheckout
            stripeKey= {`${secret}`}
            name="ECOM"
            amount={total}
            label="Pay Now"
            token={payment}
            description={`Your Payment Amount is $${total}`}
            email={mail}
            closed={handleClose}
          /> 
          : ""}
          
        </Order>
      </CartFooter>
    </>
  );
};

export default CartPage;

const CartFooter = styled.div`
  height: 25vh;
  margin-bottom:3%;

  /* border: 2px solid blue; */

  .container {
    padding: 0px 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid green; */

    .danger {
      padding: 5px 15px;
      background-color: #bb2525;
      color: #fff;
      font-family:var(--font-2);
      font-size:1.125rem;

      &:hover {
        box-shadow: 0 5px 11px 0 #bb2525;
      }
    }

    .cart-btn{
      padding: 5px 15px;
      background-color: #17252a;
      color: #fff;
      font-family:var(--font-2);
      font-size:1.125rem;
      transition:all .2s ease-in-out;

      &:hover{
        transform:translateY(-5px);
      }
    }
  }
`;

const Order = styled.div`
  height:50vh;
  display: flex;
  gap:20px ;
  flex-direction:column ;
  justify-content:center ;
  align-items:center ;
  font-family:var(--font-2);
  /* border:2px solid red; */
`;

export const EmptyCart = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .cart-btn {
    color: #fff;
    background-color: var(--head-color);
    font-size: 1.2rem;
  }
`;
