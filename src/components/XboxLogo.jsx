export default function XboxLogo({ size = 40 }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}
    >
      <defs>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="100" cy="100" r="88" fill="none" stroke="#52B043" strokeWidth="3" filter="url(#logoGlow)" />
      <path
        d="M60 50 C73 68, 87 86, 100 100 C87 114, 73 132, 60 150"
        stroke="#52B043" strokeWidth="7" fill="none" strokeLinecap="round" filter="url(#logoGlow)"
      />
      <path
        d="M140 50 C127 68, 113 86, 100 100 C113 114, 127 132, 140 150"
        stroke="#52B043" strokeWidth="7" fill="none" strokeLinecap="round" filter="url(#logoGlow)"
      />
    </svg>
  )
}
