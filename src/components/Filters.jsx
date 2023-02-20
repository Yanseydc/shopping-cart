import './Filters.css'
import useFilters from './../hooks/useFilters';

function Filters() {  
  const { filters, setFilters, filteredCategories } = useFilters();

  const handleSetPrice = e => {
    setFilters(prevState => ({ ...prevState, price: e.target.value }));    
  }

  const handleSetCategory = e => {
    setFilters( prevState => ({ ...prevState, category: e.target.value }));
  }

  return (
  <section className="filters">
    <div>
      <label htmlFor="price">
        Price starting at:
      </label>
      <input 
        type="range"
        min="0"
        max="1000"
        id="price"
        onChange={handleSetPrice}
        value={filters.price}        
      />
      <span>${filters.price}</span>
    </div>
    <div>
      <label htmlFor="category">
        Category:
      </label>
      <select 
        id="category"
        onChange={handleSetCategory}
      >
        <option value="all">All</option>
        {filteredCategories?.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  </section>
  )
}

export default Filters