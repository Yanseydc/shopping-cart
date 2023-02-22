import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import Products from './components/Products'
import useFilters from './hooks/useFilters'
import { CartProvider } from './context/Cart'

function App () {
  const { filteredProducts } = useFilters()
  return (
    <CartProvider>
      <Header />
      <div className='container'>
        <Cart />
        <Products products={filteredProducts} />
      </div>
    </CartProvider>
  )
}

export default App
