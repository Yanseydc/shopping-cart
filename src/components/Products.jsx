import './Products.css'
function Products ({ products }) {
  return (
    <div className='products'>
      <ul>
        {
        products.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button type='button'>🛒</button>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Products
