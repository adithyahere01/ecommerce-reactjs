import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firestore";
import { signOut } from "firebase/auth";
import { useGlobalContext } from "../Context";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { setIsUserRegisterred, setIsAddress } = useGlobalContext();
  const [curr, setCurr] = useState(null);

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  let navigate = useNavigate();

  const streetRef = useRef(null);
  const cityRef = useRef(null);
  const phoneRef = useRef(null);
 
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setCurr(() => {
        return {
          username: currentUser.email,
          id: currentUser.uid,
          email: currentUser.email,
        };
      });
    }
    //console.log(curr);
  }, []);

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("ECOM");
    setIsUserRegisterred(false);
    setIsAddress(false);
    navigate("./auth");
  };

  const handleAdress = (e)=>{
    e.preventDefault();
    const ad = {
        street: streetRef.current.value,
        city: cityRef.current.value
    }
    setAddress(() => ad)
    const localUser = {
        ...curr,
        address: ad,
        phone: ""
    }
    localStorage.setItem("ECOM", JSON.stringify(localUser))
    setIsAddress(true)
  }

  const handlePhone =(e)=>{
    e.preventDefault();
    setPhone(()=> phoneRef.current.value)
    const localUser = {
        ...curr,
        address: address,
        phone: phoneRef.current.value
    }
    localStorage.setItem("ECOM", JSON.stringify(localUser)) 
  }

//   console.log(phone);

  if (curr !== null) {
    return (
      <div>
        <p>UserName: {curr?.username} </p>
        <p>Email: {curr?.email}</p>
        <p>id: {curr?.id} </p>

        {address ? (
            <>
            <h3>Adress Details</h3>
          <p>Street: {address.street}</p>  
          <p>City: {address.city}</p> 
          </> 
        ) : (
          <>
            <form>
              <label htmlFor="street">Street: </label>
              <input type="text" id="street" ref={streetRef} required />

              <label htmlFor="city">City: </label>
              <input type="text" id="city" ref={cityRef} required />

              <button type="submit" onClick={handleAdress}>Save</button>
            </form>
          </>
        )}


        {phone ? (
          <p>Phone: {phone}</p> 
        ) : (
          <>
            <form>
              <label htmlFor="phone">Phone Number: </label>
              <input type="text" id="phone" ref={phoneRef} required />

              <button type="submit" onClick={handlePhone}>Save</button>
            </form>
          </>
        )}

        <button onClick={logout}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      <h1> Sign in to see details</h1>
    </div>
  );
};

export default Account;
