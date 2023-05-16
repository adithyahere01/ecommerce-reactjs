import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import Data from './Data';

const AppContext = React.createContext();

const AppProvider = ({ children }) =>{
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState(0)
    const [ total, setTotal ] = useState(0)
    const [isUserRegistered, setIsUserRegisterred] = useState(false)
    const [isAddress, setIsAddress] = useState(false)
    const [products, setProducts] = useState(Data)


    const [searchProducts, setSearchProducts] = useState([])

    
    useEffect(()=>{
      const getTotal = () =>{
        let tot = 0
        cartItems.map((cart) => {
            tot += cart.price * cart.amount
            return tot
        })
        setTotal(tot)
      }
      getTotal()
    //   localStorage.setItem("cartItems", JSON.stringify(cartItems))
    //   console.log(cartItems)
    },[cartItems, count])


    return(
        <AppContext.Provider value={{
            cartItems,
            setCartItems,
            setCount,
            count, 
            total,
            isUserRegistered,
            setIsUserRegisterred,
            isAddress,
            setIsAddress,
            products, setProducts,
            searchProducts, setSearchProducts
        }}>
            { children }
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export { AppContext, AppProvider}