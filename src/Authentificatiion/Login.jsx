import React, { useState } from 'react'
import { CheckSquare, Eye, EyeOff, LogIn, Mail, Lock, User, ArrowRight } from 'lucide-react'
import useUser from '../context/userContext'

const AVATAR_COLORS = [
  { id: 'violet',  bg: 'linear-gradient(135deg,#8b5cf6,#6366f1)' },
  { id: 'rose',    bg: 'linear-gradient(135deg,#f43f5e,#e11d48)' },
  { id: 'amber',   bg: 'linear-gradient(135deg,#f59e0b,#d97706)' },
  { id: 'emerald', bg: 'linear-gradient(135deg,#10b981,#059669)' },
  { id: 'sky',     bg: 'linear-gradient(135deg,#38bdf8,#0ea5e9)' },
  { id: 'pink',    bg: 'linear-gradient(135deg,#ec4899,#db2777)' },
]

const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('violet')
  const [showPassword, setShowPassword] = useState(false)

  const [nameFocused, setNameFocused] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)
  const {login} = useUser()

  const initials = name.trim()
    ? name.trim().split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
    : '?'

  const selectedColor = AVATAR_COLORS.find(c => c.id === avatar)?.bg

  // TODO: wire up your own submit handler
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    login(name.trim())
  }

  return (
    <div className="login-page">
      <div className="login-orb login-orb--1" />
      <div className="login-orb login-orb--2" />
      <div className="login-orb login-orb--3" />

      <div className="login-card">

        {/* Logo */}
        <div className="login-logo-row">
          <div className="login-logo-icon">
            <CheckSquare size={18} color="#fff" />
          </div>
          <span className="login-logo-text">TaskBar</span>
        </div>

        {/* Heading */}
        <div className="login-heading">
          <h1 className="login-title">Create your account</h1>
          <p className="login-subtitle">Fill in your details to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form" noValidate>

          {/* ── Avatar picker ── */}
          <div className="login-avatar-section">
            <span className="login-label" style={{ marginBottom: 10, display: 'block' }}>Choose avatar color</span>
            <div className="login-avatar-row">
              {/* Preview */}
              <div
                className="login-avatar-preview"
                style={{ background: selectedColor }}
              >
                {initials}
              </div>

              {/* Color swatches */}
              <div className="login-swatches">
                {AVATAR_COLORS.map(c => (
                  <button
                    key={c.id}
                    type="button"
                    className={`login-swatch ${avatar === c.id ? 'login-swatch--active' : ''}`}
                    style={{ background: c.bg }}
                    onClick={() => setAvatar(c.id)}
                    aria-label={`${c.id} avatar`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Name ── */}
          <div className={`login-field ${nameFocused || name ? 'login-field--active' : ''}`}>
            <label className="login-label" htmlFor="login-name">Full name</label>
            <div className="login-input-wrap">
              <User size={15} className="login-input-icon" />
              <input
                id="login-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
                placeholder="e.g. Priyanshu Vats"
                autoComplete="name"
                className="login-input"
              />
            </div>
          </div>

          {/* ── Email ── */}
          <div className={`login-field ${emailFocused || email ? 'login-field--active' : ''}`}>
            <label className="login-label" htmlFor="login-email">Email address</label>
            <div className="login-input-wrap">
              <Mail size={15} className="login-input-icon" />
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                placeholder="you@example.com"
                autoComplete="email"
                className="login-input"
              />
            </div>
          </div>

          {/* ── Password ── */}
          <div className={`login-field ${passwordFocused || password ? 'login-field--active' : ''}`}>
            <div className="login-label-row">
              <label className="login-label" htmlFor="login-password">Password</label>
              <a href="#" className="login-forgot">Forgot password?</a>
            </div>
            <div className="login-input-wrap">
              <Lock size={15} className="login-input-icon" />
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                placeholder="••••••••"
                autoComplete="new-password"
                className="login-input login-input--password"
              />
              <button
                type="button"
                className="login-eye-btn"
                onClick={() => setShowPassword(p => !p)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* ── Submit ── */}
          <button type="submit" className="login-submit">
            <LogIn size={16} />
            <span>Get started</span>
            <ArrowRight size={15} className="login-submit-arrow" />
          </button>

        </form>

        <div className="login-divider"><span>or</span></div>

        <p className="login-signup-text">
          Already have an account?{' '}
          <a href="#" className="login-signup-link">Sign in</a>
        </p>
      </div>

      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
          background: var(--bg);
        }

        /* Orbs */
        .login-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .login-orb--1 {
          width: 520px; height: 520px;
          top: -160px; left: -120px;
          background: radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%);
          animation: orb-float 8s ease-in-out infinite;
        }
        .login-orb--2 {
          width: 420px; height: 420px;
          bottom: -100px; right: -80px;
          background: radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%);
          animation: orb-float 10s ease-in-out infinite reverse;
        }
        .login-orb--3 {
          width: 280px; height: 280px;
          top: 40%; right: 20%;
          background: radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%);
          animation: orb-float 12s ease-in-out infinite 2s;
        }
        @keyframes orb-float {
          0%, 100% { transform: translate(0,0) scale(1); }
          33%       { transform: translate(20px,-30px) scale(1.04); }
          66%       { transform: translate(-15px,20px) scale(0.97); }
        }

        /* Card */
        .login-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 430px;
          background: rgba(15,15,27,0.72);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          padding: 36px 34px 32px;
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          box-shadow:
            0 40px 80px -20px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,255,255,0.03),
            inset 0 1px 0 rgba(255,255,255,0.06),
            0 0 60px rgba(139,92,246,0.08);
          animation: card-in 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes card-in {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Logo */
        .login-logo-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
        }
        .login-logo-icon {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg,#8b5cf6 0%,#6366f1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 18px rgba(139,92,246,0.45);
          flex-shrink: 0;
        }
        .login-logo-text {
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.3px;
        }

        /* Heading */
        .login-heading { margin-bottom: 24px; }
        .login-title {
          font-size: 24px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          margin: 0 0 5px;
          line-height: 1.2;
        }
        .login-subtitle {
          font-size: 13px;
          color: rgba(255,255,255,0.38);
          margin: 0;
        }

        /* Form */
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* ── Avatar section ── */
        .login-avatar-section { display: flex; flex-direction: column; }
        .login-avatar-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .login-avatar-preview {
          width: 52px; height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4), 0 0 0 2px rgba(255,255,255,0.1);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          letter-spacing: -0.5px;
        }
        .login-swatches {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .login-swatch {
          width: 26px; height: 26px;
          border-radius: 50%;
          border: 2px solid transparent;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
          outline: none;
        }
        .login-swatch:hover {
          transform: scale(1.15);
          box-shadow: 0 0 10px rgba(255,255,255,0.2);
        }
        .login-swatch--active {
          border-color: #fff;
          transform: scale(1.2);
          box-shadow: 0 0 14px rgba(255,255,255,0.35);
        }

        /* Fields */
        .login-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .login-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .login-label {
          font-size: 11.5px;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .login-field--active .login-label { color: var(--accent-light); }
        .login-forgot {
          font-size: 12px;
          color: rgba(167,139,250,0.7);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .login-forgot:hover { color: var(--accent-light); }

        /* Input */
        .login-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .login-input-icon {
          position: absolute;
          left: 14px;
          color: rgba(255,255,255,0.28);
          pointer-events: none;
          transition: color 0.2s;
        }
        .login-field--active .login-input-icon { color: var(--accent-light); }
        .login-input {
          width: 100%;
          background: rgba(28,28,45,0.6) !important;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 13px;
          padding: 12px 16px 12px 40px;
          font-size: 14px;
          font-family: inherit;
          color: #f1f1f6;
          outline: none;
          transition: all 0.25s ease !important;
        }
        .login-input::placeholder { color: rgba(255,255,255,0.2); }
        .login-input:focus {
          background: rgba(28,28,45,0.9) !important;
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 3px rgba(139,92,246,0.18), inset 0 2px 4px rgba(0,0,0,0.2) !important;
        }
        .login-input--password { padding-right: 44px; }

        .login-eye-btn {
          position: absolute;
          right: 14px;
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.3);
          padding: 0;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }
        .login-eye-btn:hover { color: var(--accent-light); }

        /* Submit */
        .login-submit {
          margin-top: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px 20px;
          background: linear-gradient(135deg,#8b5cf6 0%,#6366f1 100%);
          border: none;
          border-radius: 13px;
          color: #fff;
          font-size: 14.5px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 28px rgba(139,92,246,0.35);
        }
        .login-submit::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,rgba(255,255,255,0.12) 0%,transparent 60%);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .login-submit:hover { transform: translateY(-1px); box-shadow: 0 12px 36px rgba(139,92,246,0.5); }
        .login-submit:hover::before { opacity: 1; }
        .login-submit:active { transform: translateY(0) scale(0.98); }
        .login-submit-arrow {
          margin-left: auto;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .login-submit:hover .login-submit-arrow { opacity: 1; transform: translateX(0); }

        /* Divider */
        .login-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 20px 0 16px;
          color: rgba(255,255,255,0.18);
          font-size: 12px;
        }
        .login-divider::before,
        .login-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }

        /* Sign in link */
        .login-signup-text {
          text-align: center;
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          margin: 0;
        }
        .login-signup-link {
          color: var(--accent-light);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }
        .login-signup-link:hover { color: #c4b5fd; }
      `}</style>
    </div>
  )
}

export default Login
