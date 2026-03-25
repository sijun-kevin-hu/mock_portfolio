const bladeColors = [
  'var(--xbox-green)',
  '#1a6b1a',
  '#14571a',
  '#0f4214',
]

export default function BladeNav({ blades, active, onSelect }) {
  return (
    <div style={{
      display: 'flex',
      zIndex: 10,
      background: 'linear-gradient(180deg, rgba(18,18,18,0.95), rgba(14,14,14,0.9))',
      borderBottom: '2px solid rgba(82,176,67,0.2)',
    }}
    className="blade-nav-desktop"
    >
      {blades.map((blade, i) => {
        const isActive = i === active
        return (
          <button
            key={blade.id}
            onClick={() => onSelect(i)}
            style={{
              flex: 1,
              padding: '14px 16px 10px',
              background: isActive
                ? `linear-gradient(180deg, ${bladeColors[i]}22 0%, ${bladeColors[i]}08 100%)`
                : 'transparent',
              border: 'none',
              borderBottom: isActive ? `3px solid var(--xbox-green-bright)` : '3px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Active glow */}
            {isActive && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: 2,
                background: 'var(--xbox-green-bright)',
                boxShadow: '0 0 12px var(--xbox-green-glow), 0 0 24px var(--xbox-green-glow)',
              }} />
            )}
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 12,
              letterSpacing: 3,
              color: isActive ? 'var(--xbox-green-bright)' : 'var(--xbox-silver)',
              textTransform: 'uppercase',
              marginBottom: 2,
              transition: 'color 0.3s',
              textShadow: isActive ? '0 0 10px rgba(82,176,67,0.5)' : 'none',
            }}>
              {blade.label}
            </div>
            <div style={{
              fontFamily: 'var(--font-sub)',
              fontSize: 10,
              letterSpacing: 2,
              color: isActive ? 'var(--xbox-text)' : 'var(--xbox-text-dim)',
              textTransform: 'uppercase',
            }}>
              {blade.subtitle}
            </div>
          </button>
        )
      })}

      <style>{`
        @media (max-width: 768px) {
          .blade-nav-desktop { display: none !important; }
        }
      `}</style>
    </div>
  )
}
