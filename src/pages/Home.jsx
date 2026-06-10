import { ArrowRight, BadgeEuro, BookOpen, Leaf, ShieldCheck } from 'lucide-react';
import '../css/Home.css';

export default function Home({ stats, setView }) {
  return (
    <main className="home-page">
      <section className="hero-card">
        <div className="hero-content">
          <p className="eyebrow">E-Book Demo • Operations & Product Sheets</p>
          <h1>Firinne Grab n Go Range</h1>
          <p className="hero-copy">
            A digital e-book for salads, protein lunch boxes and sandwiches. Each sheet includes dish title,
            ingredients, recipe, packaging label, photo, unit cost, selling price, margin and allergen information.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setView('ebook')}>
              View E-Book <ArrowRight size={18} />
            </button>
            <button className="secondary-btn" onClick={() => window.print()}>
              Print Demo
            </button>
          </div>
        </div>

        <div className="cover-preview" aria-label="E-book cover preview">
          <div className="cover-topline">2026 Grab n Go</div>
          <div className="cover-title">Firinne</div>
          <div className="cover-subtitle">Product Range</div>
          <div className="cover-plates">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Salads • Protein Boxes • Sandwiches</p>
        </div>
      </section>

      <section className="stats-grid">
        <article>
          <BookOpen />
          <strong>{stats.total}</strong>
          <span>Product sheets</span>
        </article>
        <article>
          <Leaf />
          <strong>{stats.categories.length}</strong>
          <span>Categories</span>
        </article>
        <article>
          <ShieldCheck />
          <strong>{stats.allergens.length}</strong>
          <span>Allergen tags</span>
        </article>
        <article>
          <BadgeEuro />
          <strong>Auto</strong>
          <span>Margin calculator</span>
        </article>
      </section>
    </main>
  );
}
