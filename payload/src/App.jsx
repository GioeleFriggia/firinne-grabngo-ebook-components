import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { products as defaultProducts } from "./productSheets";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LiquidIntro from "./components/LiquidIntro";
import "./css/LiquidSystem.css";
import "./css/AsianNoodlePhoto.css";
import "./css/Performance.css";

const Ebook = lazy(() => import("./pages/Ebook"));

const STORAGE_KEY = "firinne-grabngo-products-v3";

function loadProducts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultProducts;
  } catch (error) {
    console.error("Unable to load saved products", error);
    return defaultProducts;
  }
}

export default function App() {
  const [view, setView] = useState("home");
  const [products, setProducts] = useState(loadProducts);

  useEffect(() => {
    let timeoutId;
    let idleId;

    const preloadEbook = () => {
      import("./pages/Ebook");
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(preloadEbook, { timeout: 1800 });
    } else {
      timeoutId = window.setTimeout(preloadEbook, 1200);
    }

    return () => {
      if (idleId) window.cancelIdleCallback?.(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  const stats = useMemo(() => {
    const total = products.length;
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    const allergens = [
      ...new Set(products.flatMap((product) => product.allergens)),
    ];
    return { total, categories, allergens };
  }, [products]);

  function updateProduct(updatedProduct) {
    const nextProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product,
    );
    setProducts(nextProducts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProducts));
  }

  function resetDemoData() {
    localStorage.removeItem(STORAGE_KEY);
    setProducts(defaultProducts);
  }

  return (
    <>
      <LiquidIntro />

      <div className="app-shell">
        <Navbar view={view} setView={setView} />

        {view === "home" ? (
          <Home stats={stats} setView={setView} />
        ) : (
          <Suspense
            fallback={
              <div className="app-loading" role="status" aria-live="polite">
                <span className="app-loading-spinner" />
                Loading product library…
              </div>
            }
          >
            <Ebook
              products={products}
              updateProduct={updateProduct}
              resetDemoData={resetDemoData}
            />
          </Suspense>
        )}
      </div>
    </>
  );
}
