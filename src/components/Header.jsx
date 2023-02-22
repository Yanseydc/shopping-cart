import './Header.css'
import Filters from './Filters'

function Header () {
  return (
    <section className='header'>
      <h1>React Shopping-Cart 🛒</h1>
      <div className='container'>
        <Filters />
      </div>
    </section>
  )
}

export default Header
