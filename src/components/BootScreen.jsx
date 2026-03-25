import { useEffect, useState } from 'react'

const styles = {
  container: {
    position: 'fixed',
    inset: 0,
    background: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 10000,
  },
  logo: {
    width: 160,
    height: 160,
    animation: 'bootFadeIn 2s ease-out forwards',
  },
  text: {
    marginTop: 30,
    fontFamily: 'var(--font-heading)',
    fontSize: 14,
    letterSpacing: 8,
    textTransform: 'uppercase',
    color: 'var(--xbox-green-bright)',
    opacity: 0,
    animation: 'bootFadeIn 1s ease-out 1.5s forwards',
  },
  fadeOut: {
    animation: 'bootFadeOut 0.8s ease-in 2.4s forwards',
  },
}

export default function BootScreen() {
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadingOut(true), 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ ...styles.container, ...(fadingOut ? styles.fadeOut : {}) }}>
      {/* Xbox X logo */}
      <svg
        viewBox="0 0 200 200"
        style={styles.logo}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="sphereGrad" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#1a3a1a" />
            <stop offset="60%" stopColor="#0a1a0a" />
            <stop offset="100%" stopColor="#000" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#sphereGrad)" stroke="#52B043" strokeWidth="2" filter="url(#glow)" />
        {/* X shape */}
        <path
          d="M55 45 C70 65, 85 85, 100 100 C85 115, 70 135, 55 155"
          stroke="#52B043"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        <path
          d="M145 45 C130 65, 115 85, 100 100 C115 115, 130 135, 145 155"
          stroke="#52B043"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />
      </svg>
      <div style={styles.text}>XBOX</div>
    </div>
  )
}
