import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import { useGlobalContext } from '../Context'

const Products = () => {
  const { products } = useGlobalContext()
  return (
    <>
      <Heading>Our Products</Heading>

      <ProductsSection>
      {products.map((d)=>{
        return(
          <ProductCard key={d.id} {...d} />
        )
      })}
      </ProductsSection>

    </>
  )
}

export default Products

export const Heading = styled.h1`
  margin-top: 3%;
  text-align:center;
`

export const ProductsSection = styled.div`
   margin:3% 4%;
   display: grid;
   grid-template-columns:repeat(3, 1fr);
   place-items:center;
   gap:30px;
`

