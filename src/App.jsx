import { useMemo, useState } from 'react';
import { products as defaultProducts } from './productSheets';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Ebook from './pages/Ebook';

const STORAGE_KEY = 'firinne-grabngo-products-v1';

function loadProducts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultProducts;
  } catch (error) {
    console.error('Unable to load saved products', error);
    return defaultProducts;
  }
}

export default function App() {
  const [view, setView] = useState('home');
  const [products, setProducts] = useState(loadProducts);

  const stats = useMemo(() => {
    const total = products.length;
    const categories = [...new Set(products.map((product) => product.category))];
    const allergens = [...new Set(products.flatMap((product) => product.allergens))];
    return { total, categories, allergens };
  }, [products]);

  function updateProduct(updatedProduct) {
    const nextProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(nextProducts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProducts));
  }

  function resetDemoData() {
    localStorage.removeItem(STORAGE_KEY);
    setProducts(defaultProducts);
  }

  return (
    <div className="app-shell">
      <Navbar view={view} setView={setView} />
      {view === 'home' ? (
        <Home stats={stats} setView={setView} />
      ) : (
        <Ebook
          products={products}
          updateProduct={updateProduct}
          resetDemoData={resetDemoData}
        />
      )}
    </div>
  );
}
