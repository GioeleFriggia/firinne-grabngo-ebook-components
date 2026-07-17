import { useEffect, useState } from "react";
import "../css/LiquidIntro.css";

const INTRO_SESSION_KEY = "firinne-intro-seen-v2";

function shouldShowIntro() {
  try {
    if (sessionStorage.getItem(INTRO_SESSION_KEY)) {
      return false;
    }

    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    return true;
  } catch {
    return true;
  }
}

export default function LiquidIntro() {
  const [showIntro] = useState(shouldShowIntro);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(!showIntro);

  useEffect(() => {
    if (!showIntro) return undefined;

    const hideTimer = window.setTimeout(() => {
      setHidden(true);
    }, 650);

    const removeTimer = window.setTimeout(() => {
      setRemoved(true);
    }, 1000);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, [showIntro]);

  if (!showIntro || removed) return null;

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
