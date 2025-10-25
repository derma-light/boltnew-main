import React from 'react';

const RueckenLaserBanner: React.FC = () => {
  return (
    <>
      <div
        className="laser-banner"
        role="img"
        aria-label="Professionelle Laser-Haarentfernung: Detailaufnahme eines Geräts während einer schonenden Behandlung, eleganter Beauty-Banner mit Text."
      >
        <div className="overlay"></div>
        <div className="glow"></div>
        <div className="content">
          <div className="accent-line" aria-hidden="true"></div>
          <h1>
            <span className="headline">Laser-Haarentfernung</span>
            <span className="subline">eine schonende Behandlung</span>
          </h1>
        </div>
      </div>

      <style>
        {`
.laser-banner {
  position: relative;
  aspect-ratio: 3 / 2;
  width: 100%;
  max-width: 1800px;
  background: #000 url('/laser-haarentfernung-schonende-behandlung-banner.png') center center / cover no-repeat;
  font-family: 'Montserrat', Arial, sans-serif;
  color: #fff;
  border-radius: 24px;
  overflow: hidden;
}

/* Abdunkelung + Lesbarkeit */
.laser-banner .overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, rgba(8,10,18,0.72) 0%, rgba(12,14,22,0.60) 40%, rgba(18,20,30,0.38) 72%, rgba(25,27,36,0.18) 100%);
  backdrop-filter: blur(1px);
}

/* Sanfter Beauty-/Technik-Glow */
.laser-banner .glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 72% 40%, rgba(255,120,170,0.35), rgba(255,120,170,0) 55%),
    radial-gradient(circle at 85% 70%, rgba(255,190,215,0.22), rgba(255,190,215,0) 60%);
  mix-blend-mode: screen;
  pointer-events: none;
}

/* Inhalt */
.laser-banner .content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(22px, 5vw, 120px);
  max-width: 54%;
  gap: clamp(16px, 2.2vw, 34px);
}

/* Akzentlinie links */
.laser-banner .accent-line {
  width: 3px;
  height: clamp(48px, 10vh, 88px);
  background: linear-gradient(to bottom, #FF4F8A, #FF9EBE 85%, rgba(255,158,190,0));
  border-radius: 2px;
  box-shadow: 0 0 12px -2px rgba(255,79,138,0.65);
}

/* Headline + Subline */
.laser-banner h1 {
  margin: 0;
  font-weight: 600;
  line-height: 1.07;
  display: flex;
  flex-direction: column;
  gap: 0.55em;
}

.laser-banner .headline {
  font-size: clamp(1.9rem, 4.4vw, 3.4rem);
  letter-spacing: 0.5px;
}

.laser-banner .subline {
  font-size: clamp(0.95rem, 1.45vw, 1.45rem);
  font-weight: 400;
  color: #C9D0D6;
  letter-spacing: 0.6px;
}

/* Hover-Effekt optional (zarter Schimmer) */
.laser-banner:hover .headline {
  background: linear-gradient(90deg, #ffffff 0%, #ffe0ee 50%, #ffffff 100%);
  -webkit-background-clip: text;
  color: transparent;
  animation: shimmer 3.5s linear infinite;
  background-size: 200% auto;
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* Responsiv für kleinere Screens */
@media (max-width: 980px) {
  .laser-banner .content { max-width: 66%; }
}

@media (max-width: 680px) {
  .laser-banner {
    aspect-ratio: 4 / 5;
    border-radius: 18px;
  }
  .laser-banner .content {
    max-width: 88%;
    padding: 40px 28px;
  }
  .laser-banner .accent-line {
    height: 60px;
  }
}

@media (max-width: 460px) {
  .laser-banner .headline {
    font-size: clamp(1.7rem, 8vw, 2.3rem);
  }
  .laser-banner .subline {
    font-size: clamp(0.95rem, 3.6vw, 1.15rem);
  }
}
        `}
      </style>
    </>
  );
};

export default RueckenLaserBanner;
