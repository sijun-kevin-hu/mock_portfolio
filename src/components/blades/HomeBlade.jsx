import XboxLogo from '../XboxLogo'

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'JavaScript', level: 88 },
  { name: 'React', level: 85 },
  { name: 'Angular', level: 78 },
  { name: 'C#/.NET', level: 72 },
  { name: 'Firebase', level: 80 },
  { name: 'Node.js', level: 82 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'AWS', level: 70 },
]

const badges = [
  'Java', 'Python', 'Angular', 'React', 'Firebase',
  'TypeScript', 'C#', '.NET', 'Node.js', 'PostgreSQL',
  'AWS', 'Android', 'Git', 'Docker', 'TensorFlow',
]

function XpBar({ name, level, delay }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 3,
        fontFamily: 'var(--font-sub)',
        fontSize: 12,
        letterSpacing: 1,
      }}>
        <span style={{ color: 'var(--xbox-text)' }}>{name}</span>
        <span style={{ color: 'var(--xbox-green-bright)' }}>{level} XP</span>
      </div>
      <div style={{
        height: 6,
        background: 'var(--xbox-charcoal)',
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid rgba(82,176,67,0.1)',
      }}>
        <div style={{
          height: '100%',
          width: `${level}%`,
          background: 'linear-gradient(90deg, var(--xbox-green-dim), var(--xbox-green-bright))',
          borderRadius: 3,
          animation: `xpFill 1.2s var(--blade-ease) ${delay}s forwards`,
          boxShadow: '0 0 6px rgba(82,176,67,0.4)',
        }} />
      </div>
    </div>
  )
}

function Badge({ name, delay }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      background: 'linear-gradient(135deg, rgba(82,176,67,0.1), rgba(16,124,16,0.05))',
      border: '1px solid rgba(82,176,67,0.2)',
      borderRadius: 4,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--xbox-green-bright)',
      animation: `fadeInUp 0.4s ease ${delay}s both`,
    }}>
      <span style={{ fontSize: 8, color: 'var(--xbox-green)' }}>★</span>
      {name}
    </div>
  )
}

export default function HomeBlade() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      maxWidth: 1000,
      margin: '0 auto',
      animation: 'fadeInUp 0.6s ease both',
    }}
    className="home-grid"
    >
      {/* Player Card */}
      <div style={{
        background: 'linear-gradient(145deg, var(--xbox-panel) 0%, var(--xbox-charcoal) 100%)',
        border: '1px solid rgba(82,176,67,0.15)',
        borderRadius: 8,
        padding: 24,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Metal texture shimmer */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.02) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 6s infinite',
          pointerEvents: 'none',
        }} />

        {/* PLAYER CARD header */}
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 10,
          letterSpacing: 4,
          color: 'var(--xbox-green)',
          marginBottom: 16,
          textTransform: 'uppercase',
        }}>
          ► Player Card
        </div>

        {/* Profile area */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'center' }}>
          {/* Avatar placeholder */}
          <div style={{
            width: 72,
            height: 72,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #1a3a1a, #0d2a0d)',
            border: '2px solid var(--xbox-green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(82,176,67,0.2)',
            flexShrink: 0,
          }}>
            <XboxLogo size={36} />
          </div>
          <div>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 22,
              color: 'var(--xbox-white)',
              letterSpacing: 2,
              marginBottom: 4,
              textShadow: '0 0 10px rgba(82,176,67,0.2)',
            }}>
              KEVIN HU
            </h1>
            <div style={{
              fontFamily: 'var(--font-sub)',
              fontSize: 13,
              color: 'var(--xbox-green-bright)',
              letterSpacing: 1,
            }}>
              Senior CS Student @ Georgia Tech
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              color: 'var(--xbox-silver)',
              marginTop: 2,
            }}>
              Incoming SWE Intern @ State Farm
            </div>
          </div>
        </div>

        {/* Bio */}
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          lineHeight: 1.7,
          color: 'var(--xbox-text)',
          padding: '12px 14px',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: 6,
          border: '1px solid rgba(82,176,67,0.08)',
          marginBottom: 16,
        }}>
          GT College of Computing | Director of Innovation @ GT Esports | Builder of Drive Intelligence, TapDetail, and more.
        </div>

        {/* Gamerscore */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'var(--font-heading)',
          fontSize: 11,
          color: 'var(--xbox-silver)',
          letterSpacing: 2,
        }}>
          <span style={{ color: 'var(--xbox-green-bright)', fontSize: 16 }}>G</span>
          GAMERSCORE: 15,420
        </div>
      </div>

      {/* XP Bars + Badges */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Skills / XP */}
        <div style={{
          background: 'linear-gradient(145deg, var(--xbox-panel) 0%, var(--xbox-charcoal) 100%)',
          border: '1px solid rgba(82,176,67,0.15)',
          borderRadius: 8,
          padding: 20,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.02) 50%, transparent 70%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 6s infinite',
            pointerEvents: 'none',
          }} />
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 10,
            letterSpacing: 4,
            color: 'var(--xbox-green)',
            marginBottom: 14,
            textTransform: 'uppercase',
          }}>
            ► Skills / XP
          </div>
          {skills.map((s, i) => (
            <XpBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
          ))}
        </div>

        {/* Achievement Badges */}
        <div style={{
          background: 'linear-gradient(145deg, var(--xbox-panel) 0%, var(--xbox-charcoal) 100%)',
          border: '1px solid rgba(82,176,67,0.15)',
          borderRadius: 8,
          padding: 20,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 10,
            letterSpacing: 4,
            color: 'var(--xbox-green)',
            marginBottom: 12,
            textTransform: 'uppercase',
          }}>
            ► Achievements Unlocked
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {badges.map((b, i) => (
              <Badge key={b} name={b} delay={0.3 + i * 0.05} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .home-grid {
            grid-template-columns: 1fr !important;
            padding-bottom: 80px !important;
          }
        }
      `}</style>
    </div>
  )
}
