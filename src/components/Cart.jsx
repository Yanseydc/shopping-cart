import Products from './Products';
import Header from './Header';
import { useState } from 'react';
function Cart({ products, handleFilters }) {
  return (
    <>
      <Header handleFilters={handleFilters} />
      <Products products={products} />
    </>
  )
}

export default Cart;