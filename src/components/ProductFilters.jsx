import { RotateCcw, Search } from 'lucide-react';

export default function ProductFilters({ categories, category, setCategory, query, setQuery, resetDemoData }) {
  return (
    <div className="filters-card">
      <div>
        <p className="eyebrow small">Product library</p>
        <h2>Sheets</h2>
      </div>

      <label className="search-box">
        <Search size={17} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search dish, ingredient, allergen..."
        />
      </label>

      <div className="category-pills">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? 'active' : ''}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <button className="reset-btn" onClick={resetDemoData}>
        <RotateCcw size={16} /> Reset demo data
      </button>
    </div>
  );
}
