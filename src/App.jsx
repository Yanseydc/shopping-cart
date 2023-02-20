import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import useFilters from './hooks/useFilters'

function App () {
  const { filteredProducts } = useFilters()
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
