import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import useCart from '../hooks/useCart'
import CartItem from './CartItem'

function Cart () {
  const cartButtonId = useId()
  const { cart, addToCart, clearCart, substractFromCart, removeFromCart } = useCart()
  return (
    <>
      <label className='cart_button' htmlFor={cartButtonId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartButtonId} hidden />
      <div className='cart'>
        {
          cart && cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              substractFromCart={() => substractFromCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))
        }
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>

      </div>
    </>
  )
}

export default Cart
