import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Products from "./Products"
import { Link } from 'react-router-dom'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const data = [
    {
      title: "Get the best product at you home",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum pariatur consequatur facere quibusdam quisquam distinctio minus exercitationem dolor ipsa fugiat",
      button: "View Products",
      img: "../assets/shoe2-removebg-preview.png",
      bg: "#A0E4CB",
      link: "/products"
    },
    {
      title: "50% Off for your first shopping",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum pariatur consequatur facere quibusdam quisquam distinctio minus exercitationem dolor ipsa fugiat",
      button: "View Products",
      img: "../assets/headphone2-removebg-preview.png",
      bg: "#F6F54D",
      link: "/products"
    },
    {
      title: "Get the best product at you home",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum pariatur consequatur facere quibusdam quisquam distinctio minus exercitationem dolor ipsa fugiat",
      button: "View Products",
      img: "../assets/shirt3-removebg-preview.png",
      bg: "#FF7272",
      link: "/products"
    },
  ];
  return (
    <>
      <ImgSlider {...settings}>
        {data.map((d, i) => {
          return (
            <SingleSlide key={i} bg={d.bg}>
              <SlideLeft>
                <h1>{d.title}</h1>
                <p>{d.para}</p>
                <button  className="slider-btn">
                  <Link to={d.link}>{d.button}</Link>
                </button>
                {/* <img src="../assets/shirt1.jpg" alt="shirt" /> */}
              </SlideLeft>

              <SlideRight className="home_card_right">
                <img src={d.img} alt="product" />
              </SlideRight>
            </SingleSlide>
          );
        })}
      </ImgSlider>

        <br /><br />
      <Products/>
    </>
  );
};

export default Home;

const ImgSlider = styled(Slider)`
  padding: 3% 7%;

  /* border:2px solid blue; */
  color: #222;

  .slick-list {
    overflow: hidden;
  }

  .slick-dots{
    left: 0px;
    /* border:2px solid green; */
  }

  @media screen and (max-width: 767px) {
    padding: 3%;
    /* border:2px solid blue; */
  }
`;

const SingleSlide = styled.div`
  height: 70vh;
  display: flex !important;
  flex-direction: row;
  border-radius: 10px;
  background-color: ${({ bg }) => bg};

  /* border:2px solid red; */
  @media screen and (max-width: 767px) {
    height: 80vh;
    flex-direction: column;
    /* border: 2px solid blue; */
  }
`;
const SlideLeft = styled.div`
  display: grid;
  grid-template-rows: 20% 15% 30%;
  place-content: center;
  padding-left: 6%;

  /* border:2px solid blue; */

  h1 {
    font-size: 2.6rem;
    align-self: center;

    /* border:2px solid green; */
    @media screen and (max-width: 767px) {
      font-size:1.4rem;
      /* border: 2px solid green; */
    }
  }
  p {
    width: 80%;
    /* border:2px solid green; */
    @media screen and (max-width: 767px) {
      width: 90%;
      
      /* border: 2px solid green; */
    }
  }
  .slider-btn{
    padding: 0% 3%;
    font-size: 1rem;
    margin-top: 20px;
    height: 40px;
    justify-self: left;
    /* border:2px solid green; */
    @media screen and (max-width: 767px) {
       margin-top:40px ;
      /* border: 2px solid green; */
    }
  }

  @media screen and (max-width: 767px) {
    height:30vh;
  
    /* border: 2px solid red; */
  }
`;
const SlideRight = styled.div`
  width: 50vw;
  /* border:2px solid green; */

  img {
    width: 100%;
    height: 100%;
    @media screen and (max-width: 767px) {
      /* border: 2px solid green; */
    }
  }
  @media screen and (max-width: 767px) {
    height: 70vw;
    margin: auto;
    /* border: 2px solid blue; */
  }
`;
