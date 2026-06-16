import { useEffect, useState } from "react";
import "../css/LiquidIntro.css";

export default function LiquidIntro() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setHidden(true);
    }, 2600);

    const removeTimer = window.setTimeout(() => {
      setRemoved(true);
    }, 3350);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <section
      className={`liquid-intro ${hidden ? "liquid-intro--hidden" : ""}`}
      aria-label="Firinne opening animation"
    >
      <div className="liquid-noise" />

      <div className="liquid-orb liquid-orb-one" />
      <div className="liquid-orb liquid-orb-two" />
      <div className="liquid-orb liquid-orb-three" />
      <div className="liquid-orb liquid-orb-four" />

      <div className="liquid-glass-card">
        <div className="liquid-logo-mark">
          <span>F</span>
        </div>

        <p className="liquid-kicker">FÍRINNE</p>

        <h1>
          Grab&nbsp;N&nbsp;Go
          <span>Range</span>
        </h1>

        <p className="liquid-subtitle">
          Honest healthy food, beautifully organised.
        </p>

        <div className="liquid-loader">
          <span />
        </div>
      </div>

      <div className="liquid-bottom-glow" />
    </section>
  );
}
