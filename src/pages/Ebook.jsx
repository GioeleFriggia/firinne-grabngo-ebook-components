import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import ProductFilters from '../components/ProductFilters';
import '../css/Ebook.css';

export default function Ebook({ products, updateProduct, resetDemoData }) {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => ['All', ...new Set(products.map((product) => product.category))], [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const lowerQuery = query.toLowerCase();
      const matchesQuery =
        product.dishTitle.toLowerCase().includes(lowerQuery) ||
        [
          product.ingredients,
          product.dressing,
          product.method,
          product.build,
          product.prep,
          product.proteinMethod,
          product.sauce,
          product.allergens
        ]
          .filter(Boolean)
          .flat()
          .join(' ')
          .toLowerCase()
          .includes(lowerQuery);
      return matchesCategory && matchesQuery;
    });
  }, [products, category, query]);

  function handleProductSelect(product) {
    setSelectedProduct(product);
    setIsDetailOpen(true);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  }

  function handleBackToProducts() {
    setIsDetailOpen(false);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  }

  function handleUpdate(product) {
    updateProduct(product);
    setSelectedProduct(product);
  }

  return (
    <main className={`ebook-page ${isDetailOpen ? 'detail-open' : 'library-open'}`}>
      <aside className="catalog-panel no-print">
        <ProductFilters
          categories={categories}
          category={category}
          setCategory={setCategory}
          query={query}
          setQuery={setQuery}
          resetDemoData={resetDemoData}
        />

        <div className="mobile-library-summary">
          <span>{filteredProducts.length} product sheets</span>
          <small>Tap a product to open the full sheet</small>
        </div>

        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={selectedProduct?.id === product.id}
              onSelect={() => handleProductSelect(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-state mobile-empty-state">No matching product sheet found.</div>
        )}
      </aside>

      <section className="detail-panel">
        <div className="mobile-detail-bar no-print">
          <button type="button" className="back-to-products-btn" onClick={handleBackToProducts}>
            ← Products
          </button>
          {selectedProduct && <span>{selectedProduct.dishTitle}</span>}
        </div>

        {selectedProduct ? (
          <ProductDetail product={selectedProduct} updateProduct={handleUpdate} />
        ) : (
          <div className="empty-state">Select a product sheet.</div>
        )}
      </section>
    </main>
  );
}
