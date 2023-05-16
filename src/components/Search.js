import React from 'react'
import { useGlobalContext } from '../Context'
import ProductCard from './ProductCard';
import { ProductsSection } from './Products';
import { EmptyCart } from '../Pages/CartPage';
import { Link } from 'react-router-dom';

const Search = () => {
  const { searchProducts } = useGlobalContext()

  if(searchProducts.length === 0){
    return(
      <EmptyCart>
        <h3>Oops We could'nt find what you're searching for😥</h3>
        <Link to='/products' className='link cart-btn'>See Products!</Link>
    </EmptyCart>
    )
  }
  return (
    <ProductsSection>
      {searchProducts.map((item)=>{
        return(
          <ProductCard key={item.id} {...item} />
        )
      })}
    </ProductsSection>
  )
}

export default Search