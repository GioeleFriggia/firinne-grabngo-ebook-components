import { BookOpen, Home } from "lucide-react";

export default function Navbar({ view, setView }) {
  return (
    <header className="navbar">
      <button className="brand-button" onClick={() => setView("home")}>
        <img
          src="/assets/logo.Aramark.jpg"
          alt="Aramark logo"
          className="brand-logo"
        />
      </button>

      <nav className="nav-actions">
        <button
          className={view === "home" ? "active" : ""}
          onClick={() => setView("home")}
        >
          <Home size={17} /> Home
        </button>

        <button
          className={view === "ebook" ? "active" : ""}
          onClick={() => setView("ebook")}
        >
          <BookOpen size={17} /> E-Book
        </button>
      </nav>
    </header>
  );
}
