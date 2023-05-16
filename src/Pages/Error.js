import React from 'react'
import { Link } from 'react-router-dom'
import { EmptyCart } from './CartPage'

const Error = () => {
  return (
    <EmptyCart>
        <h3>You Landed in a Wrong Planet🌍</h3>
        <Link to='/' className='link cart-btn'>Take me to Home!</Link>
    </EmptyCart>
  )
}

export default Error