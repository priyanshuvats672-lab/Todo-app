import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  // Animations only
  const particlesRef = useRef(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    const particles = []
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('span')
      p.classList.add('nf-particle')
      const size = Math.random() * 4 + 2
      const x = Math.random() * 100
      const delay = Math.random() * 5
      const duration = Math.random() * 6 + 5
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        bottom: -10px;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${Math.random() * 0.6 + 0.2};
      `
      container.appendChild(p)
      particles.push(p)
    }

    return () => particles.forEach(p => p.remove())
  }, [])

  return (
    <>
      <style>{`
        .nf-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          background: var(--bg, #09090e);
        }

        /* Animated ambient orbs */
        .nf-root::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.14) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: nf-orb-pulse 5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes nf-orb-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50%       { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
        }

        /* Particles */
        .nf-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .nf-particle {
          position: absolute;
          border-radius: 50%;
          background: var(--accent, #8b5cf6);
          animation: nf-float-up linear infinite;
        }
        @keyframes nf-float-up {
          0%   { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-110vh) scale(0.2); opacity: 0; }
        }

        /* Illustration */
        .nf-img-wrapper {
          position: relative;
          z-index: 1;
          margin-bottom: 1.5rem;
          animation: nf-float 5s ease-in-out infinite;
        }
        @keyframes nf-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        .nf-img {
          width: clamp(220px, 45vw, 360px);
          height: auto;
          filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.45))
                  drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5));
          border-radius: 18px;
        }

        /* Content */
        .nf-content {
          position: relative;
          z-index: 1;
          max-width: 480px;
        }
        .nf-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #a78bfa;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .nf-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8b5cf6;
          animation: nf-blink 1.4s ease-in-out infinite;
        }
        @keyframes nf-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }

        .nf-title {
          font-size: clamp(1.8rem, 5vw, 2.6rem);
          font-weight: 800;
          color: #f1f1f6;
          margin: 0 0 0.75rem;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .nf-title span {
          background: linear-gradient(135deg, #8b5cf6, #6366f1, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nf-sub {
          font-size: 1rem;
          color: rgba(241, 241, 246, 0.5);
          line-height: 1.65;
          margin: 0 0 2rem;
        }

        /* Buttons */
        .nf-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .nf-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.7rem 1.5rem;
          border-radius: 12px;
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.35);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nf-btn-primary:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 14px 32px rgba(139, 92, 246, 0.5);
        }
        .nf-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.7rem 1.5rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          color: rgba(241, 241, 246, 0.75);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.07);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nf-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(139, 92, 246, 0.3);
          color: #f1f1f6;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="nf-root h-full w-full">
        {/* Floating particles */}
        <div className="nf-particles" ref={particlesRef} />

        {/* 404 Illustration */}
        <div className="nf-img-wrapper">
          <img
            src="/404-illustration.png"
            alt="404 — Page not found"
            className="nf-img"
          />
        </div>

        {/* Text content */}
        <div className="nf-content">
          <div className="nf-badge">
            <span className="nf-badge-dot" />
            Error 404
          </div>

          <h1 className="nf-title">
            Lost in the <span>void</span>
          </h1>

          <p className="nf-sub">
            The page you're looking for has drifted into deep space.
            It might have been moved, deleted, or never existed.
          </p>

          <div className="nf-actions">
            <Link to="/" className="nf-btn-primary">
              ← Back to Home
            </Link>
            <button
              className="nf-btn-secondary"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notfound
