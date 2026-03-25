const buttons = [
  { label: 'A', color: '#52B043' },
  { label: 'B', color: '#e54b4b' },
  { label: 'X', color: '#4b8be5' },
  { label: 'Y', color: '#e5c34b' },
]

export default function MobileNav({ blades, active, onSelect }) {
  return (
    <>
      <div className="mobile-nav" style={{
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'linear-gradient(180deg, rgba(15,15,15,0.95), rgba(10,10,10,0.98))',
        borderTop: '2px solid rgba(82,176,67,0.2)',
        padding: '8px 12px 12px',
        gap: 8,
      }}>
        {blades.map((blade, i) => {
          const isActive = i === active
          return (
            <button
              key={blade.id}
              onClick={() => onSelect(i)}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '6px 4px',
                background: isActive ? 'rgba(82,176,67,0.1)' : 'transparent',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
              }}
            >
              {/* Controller button */}
              <div style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: isActive
                  ? `radial-gradient(circle, ${buttons[i].color}40, ${buttons[i].color}15)`
                  : 'rgba(40,40,40,0.8)',
                border: `2px solid ${isActive ? buttons[i].color : '#333'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-heading)',
                fontSize: 11,
                fontWeight: 700,
                color: isActive ? buttons[i].color : '#555',
                transition: 'all 0.2s',
              }}>
                {buttons[i].label}
              </div>
              <span style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 8,
                letterSpacing: 1,
                textTransform: 'uppercase',
                color: isActive ? 'var(--xbox-green-bright)' : 'var(--xbox-text-dim)',
              }}>
                {blade.subtitle}
              </span>
            </button>
          )
        })}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </>
  )
}
