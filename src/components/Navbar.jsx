import { BookOpen, Home, Printer } from 'lucide-react';

export default function Navbar({ view, setView }) {
  return (
    <header className="navbar">
      <button className="brand-button" onClick={() => setView('home')}>
        <span className="brand-mark">F</span>
        <span>
          <strong>Firinne</strong>
          <small>Grab n Go Range</small>
        </span>
      </button>

      <nav className="nav-actions">
        <button className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>
          <Home size={17} /> Home
        </button>
        <button className={view === 'ebook' ? 'active' : ''} onClick={() => setView('ebook')}>
          <BookOpen size={17} /> E-Book
        </button>
        <button onClick={() => window.print()}>
          <Printer size={17} /> Print / PDF
        </button>
      </nav>
    </header>
  );
}
