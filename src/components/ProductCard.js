import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const ProductCard = ({ id, cover, name, price, discount }) => {
  const { cartItems, setCartItems, products } = useGlobalContext();

  const handleAddToCart = (id) => {
    const checkCart = cartItems.find((item) => item.id == id);
    if (checkCart) {
      return;
    } else {
      const item = products.filter((d) => d.id === id);
      // console.log(item[0])
      if (item) {
        setCartItems([...cartItems, item[0]]);
      }
      console.log(cartItems);
    }
  };

  return (
    <SinglePiece>
      <img src={cover} alt="" />

      <SinglePieceDetails>
        <div className="product_name">
          <h3>{name}</h3>
          <span>&#x20b9;{price}</span>
        </div>

        <AddToCart bg="#17252a" clr="#fff">
          <button onClick={() => handleAddToCart(id)}>
            Add to Cart <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </AddToCart>

        <AddToCart border="2px solid #17252a" clr="#17252a">
          {/* <button> */}
             <Link to={`/products/${id}`} className="product_btn">View</Link>
          {/* </button> */}
        </AddToCart>
      </SinglePieceDetails>

      {/* <Tag>{discount}%</Tag> */}
    </SinglePiece>
  );
};

export default ProductCard;

const SinglePiece = styled.div`
  height: 100%;
  width: 25vw;
  transition: all 0.3s ease-in-out;
  position: relative;
  border-radius: 5px;
  font-family: var(--font-2);

  /* border:2px solid red; */

  img {
    height: 50vh;
    width: 100%;
    border-radius: 3px;
    /* border: 2px solid red; */
  }

  &:hover {
    /* transform:scale(1.05); */
    box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
const SinglePieceDetails = styled.div`
  background-color: #f1f1f1;
  margin-top: -7px;
  font-size: 1.1rem;
  padding-bottom: 3%;

  /* border:2px solid blue; */

  .product_name {
    padding: 15px 18px;
    display: flex;
    justify-content: space-between;
    /* border:2px solid red; */

    h3 {
      font-weight: 500;
    }

    span{
      font-weight:300 ;
    }
  }
`;

const Tag = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 25px;
  width: 45px;
  border-radius: 20px;
  background-color: yellow;
  font-size: 1.1rem;
  text-align: center;
  /* border:2px solid blue; */
`;

const AddToCart = styled.div`
  /* border:2px solid green; */
  padding: 2px;
  display: flex;

  button, .product_btn{
    margin: auto;
    height: 35px;
    width: 90%;
    color: ${({ clr })=> clr};
    font-family: var(--font-2);
    text-align:center;
    border-radius: 2px;
    border:${({ border })=> border} ;
    transition:all .2s ease-in-out;
    background-color: ${({ bg })=>bg};
    /* background-color: #A0E4CB; */
  }
  button:hover{
    transform:translateY(-5px);
  }

  
`;
