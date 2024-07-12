import React from 'react'
import "./Products.css"
import ProductsListing from './ProductsListing/ProductsListing'
const Products = () => {
  return (
    <div className='products_main_div' >
      <div>
        <ProductsListing/>
      </div>
    </div>
  )
}

export default Products
