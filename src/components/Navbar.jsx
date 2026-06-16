import { BookOpen, Home } from "lucide-react";

export default function Navbar({ view, setView }) {
  return (
    <header className="navbar liquid-navbar">
      <button
        type="button"
        className="brand-button liquid-brand"
        onClick={() => setView("home")}
        aria-label="Go to home"
      >
        <span className="brand-logo-shell">
          <img
            src="/assets/logo.Aramark.jpg"
            alt="Aramark logo"
            className="brand-logo"
          />
        </span>

        <span className="brand-copy">
          <strong>Fírinne</strong>
          <small>Grab N Go Range</small>
        </span>
      </button>

      <nav className="nav-actions liquid-nav-actions" aria-label="Main menu">
        <span
          className={`nav-active-orb ${
            view === "ebook" ? "nav-active-orb--ebook" : "nav-active-orb--home"
          }`}
          aria-hidden="true"
        />

        <button
          type="button"
          className={view === "home" ? "active" : ""}
          onClick={() => setView("home")}
          aria-label="Open home page"
        >
          <Home size={17} />
          <span>Home</span>
        </button>

        <button
          type="button"
          className={view === "ebook" ? "active" : ""}
          onClick={() => setView("ebook")}
          aria-label="Open e-book page"
        >
          <BookOpen size={17} />
          <span>E-Book</span>
        </button>
      </nav>
    </header>
  );
}
