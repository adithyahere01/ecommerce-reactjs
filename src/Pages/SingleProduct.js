import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";

const SingleProduct = () => {
  const { cartItems, setCartItems, products } = useGlobalContext();
  const { id } = useParams();

  const item = products.filter((d) => d.id == id);

  const handleAddToCart = (id) => {
    console.log(id);
    const checkCart = cartItems.find((item) => item.id == id);
    if (checkCart) {
      console.log('item already in cart');
      return
    } 
    else {
      const item = products.filter((d) => d.id == id);
      if (item) {
        setCartItems([...cartItems, item[0]]);
      }
      console.log(cartItems);
    }
  };

  return (
    <>
      {item.map((p) => {
        return (
          <SingleProductSection key={p.id}>
            <SingleProductLeft>
              <img
                className="single-product-images"
                src={p.cover}
                alt={p.name}
              />
            </SingleProductLeft>

            <SingleProductRight>
              {/* <section className="content-prod"> */}
              <h2>{p.name}</h2>
              <div className="star">
                <span className="fa fa-star review"></span>
                <span className="fa fa-star review"></span>
                <span className="fa fa-star review"></span>
                <span className="fa fa-star review"></span>
                <span className="fa fa-star-half-o review"></span>
              </div>
              <p>60 Reviews</p>
              <h5 className="price-prod">${p.price}</h5>
              <p className="description"> {p.description}</p>
              <p className="info-prod">
                <span>Available : {p.stock}</span>
              </p>

              <hr /> <br />
              <AddToCart bg="#17252a" clr="#fff">
                <button onClick={() => handleAddToCart(id)}>
                  Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </AddToCart>
              {/* </section> */}
            </SingleProductRight>
          </SingleProductSection>
        );
      })}
    </>
  );
};

export default SingleProduct;

const SingleProductSection = styled.section`
  margin: 4% 5%;
  display: flex;

  /* border:2px solid green; */
`;

const SingleProductLeft = styled.div`
  height: 65vh;
  width: 100vw;
  /* border: 2px solid red; */

  img {
    height: 100%;
    width: 100%;
  }
`;

const SingleProductRight = styled.div`
  /* width:100%; */
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* border:2px solid blue; */
  h2 {
    padding-bottom: 15px;
    /* border: 2px solid red; */
  }

  .price-prod {
    font-size: 1.7rem;
    font-family: var(--font-2);
    padding: 15px 0px;
    /* border: 2px solid red; */
  }
  .description {
    padding-bottom: 7px;
    /* border:2px solid red; */
  }
  .info-prod {
    font-size: 1.2rem;
    font-family: var(--font-2);
  }
  hr {
    border: 1px solid #222;
  }
`;

const AddToCart = styled.div`
  /* border:2px solid green; */
  padding: 2px;
  display: flex;

  button,
  .product_btn {
    /* margin: auto; */
    height: 35px;
    width: 40%;
    color: ${({ clr }) => clr};
    font-family: var(--font-2);
    text-align: center;
    border-radius: 2px;
    border: ${({ border }) => border};
    transition: all 0.2s ease-in-out;
    background-color: ${({ bg }) => bg};
    /* background-color: #A0E4CB; */
  }
`;
