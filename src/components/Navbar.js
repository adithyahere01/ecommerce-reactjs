import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";

const Navbar = () => {
  const { cartItems, isUserRegistered, products, setSearchProducts } = useGlobalContext();
  const [mobileNav, setmobileNav] = useState(false);
  let navigate = useNavigate()
  const searchRef = useRef(null)
  let searchkey;

  const handleToggle = () => {
    setmobileNav(!mobileNav);
    // console.log("clicked");
  };

  const handleEnter = (e) =>{
    if(e.key === "Enter"){
      searchkey = searchRef.current.value
      searchRef.current.value = ""
      console.log(searchkey);

      let pro = products.filter((p) => {
        let ch = p.name.toLowerCase()
       return ch.includes(searchkey.toLowerCase())
      })
      // console.log(pro);
      setSearchProducts(()=>pro)
      navigate("/search")
    }
  }

  return (
    <Header>
      <Nav>
        <NavLinks>
          <BrandTitle>Collacs</BrandTitle>

          <Navmenus className={mobileNav ? "show" : "hide"}>
            <Link to="/" className="nav_menus" onClick={mobileNav ? handleToggle : ""}>Home</Link>

            <Link to="/products" className="nav_menus" onClick={mobileNav ? handleToggle : ""}>
              Products
            </Link>

            <Link to="/auth" className="nav_menus" onClick={mobileNav ? handleToggle : ""}>
              {isUserRegistered ? "" : "Sign In"}
            </Link>

            <span
              onClick={handleToggle}
              className={mobileNav ? "show cross" : "hide cross"}
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
          </Navmenus>
        </NavLinks>

        <Search>
          <label htmlFor="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input type="text" id="search" ref={searchRef} onKeyDown={handleEnter} name="search" placeholder="Search" />
        </Search>

        <UserDetails>
          <Link to="/account" className="cart-nav">
            <i className="fa-solid fa-user"></i>
          </Link>
          <Link to="/cart" className="cart-nav">
            <span>{cartItems.length}</span>
            <i className="fa-solid fa-bag-shopping"></i>
          </Link>
          <li onClick={handleToggle}>
            <i className="fa-solid fa-bars-staggered"></i>
          </li>
        </UserDetails>
      </Nav>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  height: 8vh;
  box-shadow: -1px 15px 17px -8px rgba(0, 0, 0, 0.3);
  position: sticky;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.5s;
  z-index: 9999;
  font-family:var(--font-2) ;
  /* border: 2px solid red; */

  @media screen and (max-width: 767px) {
    transition: margin-left 0.5s;
    /* border: 2px solid red; */
  }
`;
const Nav = styled.nav`
  height: 100%;
  display: grid;
  grid-template-columns: 65% 25% 10%;

  @media screen and (max-width: 767px) {
    grid-template-columns: 65% 35%;
    /* border: 2px solid yellow; */
  }
`;

const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: 25% 75%;
  place-content: center;
  /* border:2px solid purple; */

  @media screen and (max-width: 767px) {
    position: relative;
    grid-template-columns: 100%;
    transition: all 0.3s ease-in;
    .hide {
      display: none;
    }

    /* border: 2px solid green; */
  }
`;

const Navmenus = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid red; */

  .nav_menus {
    font-size:1.2rem;
    
      &:hover {
        transform: scale(1.1);
      }
    }

  @media screen and (max-width: 767px) {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0px;
    background-color: #fff;
    height: 100vh;
    z-index: 999;
    flex-direction: column;
    justify-content: space-evenly;
    transition: 0.3s;
    /* border:2px solid red; */
    animation-name: animenav;
    animation-duration: 0.4s;

    @keyframes animenav {
      0% {
        width: 0%;
      }
      100% {
        width: 100vw;
      }
    }

    .cross {
      position: absolute;
      top: 5%;
      right: 10%;
      font-size: 2rem;
      text-align: center;
      margin: 10px px;
      width: 40px;
      border-radius: 50%;
      background-color: #ededed;
      color: #222;
      cursor: pointer;
      transition: 0.5s;
      animation-name: crossanime;
      animation-duration: 0.4s;
    }
    @keyframes crossanime {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(180deg);
      }
    }
    .show {
      display: block;
    }
  }
  /* border:2px solid red; */
`;
const BrandTitle = styled.h1`
  font-size: 1.5625rem;
  text-align: center;

  @media screen and (max-width: 767px) {
    width: 80%;
    font-size: 2rem;
    /* border: 2px solid blue; */
  }
`;

const Search = styled.div`
  display: flex;
  position: relative;

  /* border:2px solid green; */

  input {
    width: 400px;
    margin: auto;
    border: 1px solid gray;
    outline: none;
    border-radius: 14px;
    height: 30px;
    padding-left: 30px;
    font-size: 15px;
  }
  label {
    position: absolute;
    top: 13px;
    left: 8px;
    color: #222;
  }

  @media screen and (max-width: 767px) {
    display: none;
    /* border: 2px solid red; */
  }
`;

const UserDetails = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  /* border:2px solid green; */

  li,
  .cart-nav {
    margin: 8% 0px;
    width: 40px;
    border-radius: 50%;
    background-color: #ededed;
    display: grid;
    position: relative;
    color: #222;
    cursor: pointer;
    i {
      margin: auto;
      /* border: 2px solid red; */

      @media screen and (max-width: 767px) {
        font-size: 0.9rem;
      }
    }

    span {
      right: 0px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      position: absolute;
      display: grid;
      place-content: center;
      color: #fff;
      background-color: #e94560;
      font-size: 12px;
    }

    @media screen and (max-width: 767px) {
      place-content: center;
      height: 33px;
      width: 33px;
    }
  }

  li:nth-child(3) {
    display: none;

    @media screen and (max-width: 767px) {
      display: grid;
      /* border: 2px solid red; */
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    place-items: center;

    /* border: 2px solid green; */
  }
`;
