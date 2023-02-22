import { createContext } from 'react'
import useCartReducer from '../hooks/useCartReducer'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const { cart, addToCart, substractFromCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      substractFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
