import './Header.css'
import Filters from './Filters'

function Header () {
  return (
    <section className='header'>
      <h1>React Shopping-Cart 🛒</h1>
      <Filters />
    </section>
  )
}

export default Header
