import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useGlobalContext } from "../Context";

const SingleCart = ({ id, cover, name, price }) => {
  const { cartItems, setCartItems, setCount } = useGlobalContext();
  const [quantity, setQuantity] = useState(1);

  const Inc = (id) => {
    const item = cartItems.find((d) => d.id === id);
    if (quantity <= 5) {
      if (item) {
        item.amount += 1;
      }
      setQuantity((q) => q + 1);
      setCount((c) => c + 1);
      // console.log(cartItems);
    }
  };
  const Dec = (id) => {
    const item = cartItems.find((d) => d.id === id);
    if (quantity > 1) {
      if (item) {
        item.amount -= 1;
      }
      setQuantity((q) => q - 1);
      setCount((c) => c - 1);
    }
  };

  const removeItem = (id) => {
    const newItems = cartItems.filter((d) => d.id !== id);
    setCartItems(newItems);
  };
  return (
    <CartSection key={id}>
      <div className="cart-img">
        <img src={cover} alt={name} />
      </div>

      <CartDetails>
        <h3>{name}</h3>
        <div className="price">Price: &#x20b9;{price}</div>

        <div className="quantity">
          <div className="icon-div" onClick={() => Inc(id)}>
            <i className="fa-solid fa-plus" ></i>
          </div>
          <div>
            <span className="quan">{quantity}</span>
          </div>
          <div className="icon-div" onClick={() => Dec(id)}>
            <i className="fa-solid fa-minus" ></i>
          </div>
        </div>
      </CartDetails>

      <DeleteCart>
        <button onClick={() => removeItem(id)}>
          <i className="fa-solid fa-trash" ></i>
        </button>
      </DeleteCart>
    </CartSection>
  );
};

export default SingleCart;

const CartSection = styled.section`
  margin: 5%;
  height: 25vh;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #dddddd;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;

  /* border: 2px solid red; */

  .cart-img {
    height: 100%;
    width: 20vw;
    /* border:2px solid green; */
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
`;

const CartDetails = styled.div`
  flex-grow: 1;
  /* border:2px solid blue; */

  h3 {
    padding: 2% 5% 1%;
    font-size: 1.5rem;
    opacity: 0.9;
    font-family: var(--font-2);
    /* border:2px solid red ; */
  }

  .price {
    padding: 0px 5%;
    font-family: var(--font-2);
    font-style: italic;
    font-size: 1.1rem;
    color: #111;
    /* border:2px solid red ; */
  }

  .quantity {
    width: 10vw;
    padding: 3% 5%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* border: 2px solid green; */

    div {
      display: flex;
      height: 30px;
      width: 30px;
        /* border: 2px solid red; */
      .quan {
        font-size:1.3rem;
        font-family:var(--font-2);
        font-weight:500 ;
        margin:auto ;
      }
    }

    .icon-div {
      height: 30px;
      width: 30px;
      display: flex;
      background-color: #17252a;
      opacity: 0.9;
      color: #fff;
      cursor: pointer;
      border-radius: 2px;
      /* border: 2px solid red; */

      i,span {
        margin: auto;
      }
    }
  }
`;

const DeleteCart = styled.div`
  width: 20%;
  display: flex;
  justify-content:center ;
  align-items:center ;
  /* border: 2px solid red; */

  button{
    background-color:#bb2525;
    color:#fff;

    &:hover{
      box-shadow: 0 5px 11px 0 #bb2525;
    }
  }
`;
