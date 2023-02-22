import './Products.css'
import useCart from './../hooks/useCart'
import { CartIcon, RemoveFromCartIcon } from './Icons'

function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const isProductInCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id)
    return productIndex === -1
  }

  return (
    <div className='products'>
      <ul>
        {
        products.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button
              type='button'
              onClick={() => isProductInCart(product) ? addToCart(product) : removeFromCart(product)}
              style={{ background: isProductInCart(product) ? 'green' : 'red' }}
            >
              {isProductInCart(product)
                ? <CartIcon />
                : <RemoveFromCartIcon />}
            </button>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Products
