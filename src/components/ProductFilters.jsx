import { RotateCcw, Search } from 'lucide-react';

export default function ProductFilters({ categories, category, setCategory, query, setQuery, resetDemoData }) {
  return (
    <div className="filters-card">
      <div className="library-heading">
        <div>
          <p className="eyebrow small">Product library</p>
          <h2>Sheets</h2>
        </div>

        <button className="reset-btn reset-btn-compact" onClick={resetDemoData} aria-label="Reset demo data">
          <RotateCcw size={16} />
          <span>Reset</span>
        </button>
      </div>

      <label className="search-box">
        <Search size={17} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search dish, ingredient, allergen..."
        />
      </label>

      <div className="category-pills" aria-label="Product categories">
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

      <button className="reset-btn reset-btn-full" onClick={resetDemoData}>
        <RotateCcw size={16} /> Reset demo data
      </button>
    </div>
  );
}
