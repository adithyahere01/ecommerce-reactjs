import React,{ useState} from 'react'
import { auth } from '../firestore';
import {  signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useGlobalContext } from '../Context';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setIsUserRegisterred } = useGlobalContext()
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    let navigate = useNavigate()

    const login = async() =>{
        try{
            const loggedUser =  await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            const checkUser = await auth.currentUser;
            // console.log(checkUser);
            if(checkUser.uid){
                setLoginEmail("")
                setLoginPassword("")

                const localUser = {
                    username: checkUser.email,
                    id: checkUser.uid,
                    email: loginEmail,
                    password: loginPassword,
                    address:{
                        street: "",
                        city: ""
                    },
                    phone: ""
                }
                localStorage.setItem("ECOM", JSON.stringify(localUser))
                setIsUserRegisterred(true)
                navigate("/products")
            }
         }catch(err){
             console.log(err.message);
             setIsUserRegisterred(false)
         }
    }

    const logout = async() =>{
        await signOut(auth)
        setIsUserRegisterred(false)
    }
   
    return (
        <div className="login-container">
            <section className='login-section'>
             <div className='login-div'>
                <h1>User Login</h1> 
                <input type="email" placeholder='Email' value={loginEmail} required onChange={(e)=> setLoginEmail(e.target.value)} /> 
                <input type="password" placeholder='Password' value={loginPassword} onChange={(e)=> setLoginPassword(e.target.value)} /> 

                <button className='btn' onClick={login}>Login</button> 
                {/* <h3>User Name: {user?.email}</h3> */}

                <button className='btn' onClick={logout}>Sign Out</button>
             </div>
            </section>
        </div>
    )
}

export default Login