const experiences = [
  {
    company: 'State Farm',
    role: 'Incoming SWE Intern',
    period: 'Summer 2026',
    description: 'HR&D division — full-stack development with no-code/low-code platforms.',
    tech: ['Full-Stack', 'No-Code', 'Low-Code'],
    status: 'UPCOMING',
  },
  {
    company: 'Tyler Technologies',
    role: 'Software Engineering Intern',
    period: '2025',
    description: 'Built features with Angular, C#, and .NET for enterprise government software solutions.',
    tech: ['Angular', 'C#', '.NET', 'TypeScript'],
    status: 'COMPLETED',
  },
  {
    company: 'FluidSportsTech',
    role: 'Software Engineering Intern',
    period: '2024',
    description: 'Developed Android applications with Java and Firebase for sports technology platform.',
    tech: ['Android', 'Java', 'Firebase'],
    status: 'COMPLETED',
  },
  {
    company: 'GT Esports',
    role: 'Director of Innovation',
    period: '2023 – Present',
    description: 'Leading developer teams, organizing large-scale esports events, and building internal tools for Georgia Tech Esports.',
    tech: ['Leadership', 'React', 'Events', 'Dev Teams'],
    status: 'NOW PLAYING',
  },
]

function Track({ exp, index }) {
  const isPlaying = exp.status === 'NOW PLAYING'
  const isUpcoming = exp.status === 'UPCOMING'

  return (
    <div style={{
      display: 'flex',
      gap: 16,
      padding: '16px 20px',
      background: isPlaying
        ? 'linear-gradient(135deg, rgba(82,176,67,0.08), rgba(16,124,16,0.03))'
        : 'linear-gradient(135deg, var(--xbox-panel), var(--xbox-charcoal))',
      border: `1px solid ${isPlaying ? 'rgba(82,176,67,0.25)' : 'rgba(82,176,67,0.08)'}`,
      borderRadius: 8,
      animation: `fadeInUp 0.5s ease ${index * 0.12}s both`,
      transition: 'border-color 0.3s',
      position: 'relative',
      overflow: 'hidden',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(82,176,67,0.35)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = isPlaying ? 'rgba(82,176,67,0.25)' : 'rgba(82,176,67,0.08)'}
    >
      {/* Metal shimmer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.015) 50%, transparent 70%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 8s infinite',
        pointerEvents: 'none',
      }} />

      {/* Track number */}
      <div style={{
        width: 40,
        height: 40,
        borderRadius: 6,
        background: isPlaying
          ? 'linear-gradient(135deg, var(--xbox-green), var(--xbox-green-dim))'
          : 'rgba(0,0,0,0.3)',
        border: `1px solid ${isPlaying ? 'var(--xbox-green-bright)' : 'rgba(82,176,67,0.15)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-heading)',
        fontSize: 14,
        color: isPlaying ? 'var(--xbox-white)' : 'var(--xbox-silver)',
        flexShrink: 0,
        boxShadow: isPlaying ? '0 0 10px rgba(82,176,67,0.3)' : 'none',
      }}>
        {isPlaying ? '►' : `0${index + 1}`}
      </div>

      {/* Track content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4, flexWrap: 'wrap', gap: 8 }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 13,
              color: 'var(--xbox-white)',
              letterSpacing: 1,
              marginBottom: 2,
            }}>
              {exp.role.toUpperCase()}
            </div>
            <div style={{
              fontFamily: 'var(--font-sub)',
              fontSize: 14,
              color: 'var(--xbox-green-bright)',
              letterSpacing: 1,
            }}>
              {exp.company}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              color: 'var(--xbox-text-dim)',
            }}>
              {exp.period}
            </span>
            <span style={{
              padding: '2px 8px',
              background: isPlaying
                ? 'rgba(82,176,67,0.2)'
                : isUpcoming
                  ? 'rgba(82,176,67,0.1)'
                  : 'rgba(100,100,100,0.15)',
              border: `1px solid ${isPlaying ? 'var(--xbox-green)' : isUpcoming ? 'rgba(82,176,67,0.3)' : 'rgba(100,100,100,0.2)'}`,
              borderRadius: 3,
              fontFamily: 'var(--font-heading)',
              fontSize: 8,
              letterSpacing: 1,
              color: isPlaying ? 'var(--xbox-green-bright)' : isUpcoming ? 'var(--xbox-green)' : 'var(--xbox-silver)',
            }}>
              {exp.status}
            </span>
          </div>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          color: 'var(--xbox-text)',
          lineHeight: 1.6,
          marginBottom: 8,
        }}>
          {exp.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {exp.tech.map(t => (
            <span key={t} style={{
              padding: '2px 8px',
              background: 'rgba(82,176,67,0.06)',
              border: '1px solid rgba(82,176,67,0.12)',
              borderRadius: 3,
              fontFamily: 'var(--font-body)',
              fontSize: 9,
              color: 'var(--xbox-green-bright)',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ExperienceBlade() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      {/* Now Playing header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 20,
      }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 8,
          background: 'linear-gradient(135deg, var(--xbox-green), var(--xbox-green-dim))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          boxShadow: '0 0 15px rgba(82,176,67,0.3)',
        }}>
          ♪
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 10,
            letterSpacing: 4,
            color: 'var(--xbox-green)',
            textTransform: 'uppercase',
          }}>
            ► Now Playing
          </div>
          <div style={{
            fontFamily: 'var(--font-sub)',
            fontSize: 15,
            color: 'var(--xbox-silver-light)',
            letterSpacing: 1,
          }}>
            Career Tracklist — {experiences.length} tracks
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        height: 3,
        background: 'var(--xbox-charcoal)',
        borderRadius: 2,
        marginBottom: 24,
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: '65%',
          background: 'linear-gradient(90deg, var(--xbox-green), var(--xbox-green-bright))',
          borderRadius: 2,
          boxShadow: '0 0 8px rgba(82,176,67,0.4)',
        }} />
      </div>

      {/* Track list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} className="experience-list">
        {experiences.map((exp, i) => (
          <Track key={exp.company} exp={exp} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .experience-list { padding-bottom: 80px !important; }
        }
      `}</style>
    </div>
  )
}
