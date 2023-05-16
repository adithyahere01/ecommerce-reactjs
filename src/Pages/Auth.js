import { useState, useRef } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firestore.js';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { useGlobalContext } from '../Context';

export const Auth = () => {
    const { setIsUserRegisterred } = useGlobalContext()
    let navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const nameRef = useRef(null)

   const signup = async () =>{
     try{
        const user =  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

        const checkUser = await auth.currentUser;
        
        if(checkUser.uid){
            // setUserLogged(true)
            setRegisterEmail("")
            setRegisterPassword("")
            setUsername("")
            nameRef.current.value = " "

            const localUser = {
                username: username,
                id: checkUser.uid,
                email: registerEmail,
                password: registerPassword,
                address:{
                    street: "",
                    city: ""
                },
                phone: ""
            }
            localStorage.setItem("ECOM", JSON.stringify(localUser))
            setIsUserRegisterred(true)
            // console.log(localStorage.getItem("ECOM"));
            navigate("/products")
        }
     }
     catch(err){
         console.log(err.message);
         setIsUserRegisterred(false)

         if(err.code === "auth/email-already-in-use"){
          //redirect to login
          navigate("/login")
         }

         
    }
   }

   const googleSignIn = ()=>{
      const provider = new GoogleAuthProvider()

      signInWithPopup(auth, provider)
      // setUserLogged(true)
   }
  return (
    <section className='signup-section'>
            <div className='signup-div'>
                <h1>Create an Account <span className="signuo-line"></span></h1>
                <button className="signup-btn g-btn" onClick={googleSignIn}>Sign Up with G</button>

                <input type="text" placeholder='Name...' ref={nameRef} value={username}  onChange={(e) => setUsername(e.target.value)} /> 
                <input type="email" placeholder='Email...' value={registerEmail} onChange={(e)=> setRegisterEmail(e.target.value)} /> 
                <input type="password" placeholder='Password' value={registerPassword} onChange={(e)=> setRegisterPassword(e.target.value)} /> 

                <button className='signup-btn' onClick={signup}>Sign Up</button>


                <p>Already have an Account?   <Link to="/login">Login</Link></p>
            </div>
        </section>
  );
};

