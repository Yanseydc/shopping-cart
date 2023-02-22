import './Cart.css'

function CartItem ({ name, price, thumbnail, quantity, addToCart, substractFromCart, removeFromCart }) {
  return (
    <>
      <img src={thumbnail} alt='product' />
      <div className='cart__details'>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
      <small>Qty: {quantity}</small>
      <div className='cart__actions'>
        <button
          className='cart_substract'
          onClick={substractFromCart}
        >-
        </button>
        <button
          className='cart_add'
          onClick={addToCart}
        >+
        </button>
      </div>
      <button
        className='cart_remove'
        onClick={removeFromCart}
      >Remove
      </button>
    </>
  )
}

export default CartItem
