import React from 'react'
import './ProductsListing.css';
import Shose from '../Shose/Shose';


const ProductsListing = () => {
  return (
    <>
    <div className='product_listing_main'>
    <h1>💕Products 💕</h1>
    <div>
         <button className="nav-button">Shoes</button>
        <button className="nav-button">Dress</button>
        <button className="nav-button">Mobile</button>
        <button className="nav-button">Headphones</button></div>
    </div>
    {/* shose section  */}
    <div>
      <Shose/>
    </div>
   
    </>
  )
}

export default ProductsListing
