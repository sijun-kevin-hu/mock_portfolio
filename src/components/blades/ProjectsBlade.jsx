const projects = [
  {
    title: 'Drive Intelligence',
    genre: 'SaaS / AI-ML',
    description: 'AI/ML Google Drive file-organization SaaS built through the GT Inventure Prize (I2P) program. Intelligent categorization and search.',
    tech: ['Python', 'TensorFlow', 'React', 'GCP'],
    rating: 'E — Everyone (Enterprise)',
    github: 'https://github.com/kevinhu',
    live: null,
  },
  {
    title: 'TapDetail',
    genre: 'Full-Stack / Production',
    description: 'Production auto detailing platform — launched and serving real customers. Booking, payments, and business management.',
    tech: ['React', 'Node.js', 'Firebase', 'Stripe'],
    rating: 'E — Everyone',
    github: 'https://github.com/kevinhu',
    live: null,
  },
  {
    title: 'Clash Royale Replay Analyzer',
    genre: 'API / AI Tool',
    description: 'API-first coaching tool with LLM-generated game summaries. Parses replays and provides strategic analysis.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
    rating: 'T — Teen',
    github: 'https://github.com/kevinhu',
    live: null,
  },
  {
    title: 'Restaurant Inventory Tracker',
    genre: 'Full-Stack / Cloud',
    description: 'End-to-end inventory management system with real-time tracking, alerts, and reporting dashboards.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    rating: 'E — Everyone (Business)',
    github: 'https://github.com/kevinhu',
    live: null,
  },
]

function RatingBadge({ rating }) {
  return (
    <div style={{
      display: 'inline-block',
      padding: '3px 8px',
      background: 'rgba(0,0,0,0.5)',
      border: '1px solid var(--xbox-silver)',
      borderRadius: 3,
      fontFamily: 'var(--font-heading)',
      fontSize: 8,
      letterSpacing: 1,
      color: 'var(--xbox-silver-light)',
      textTransform: 'uppercase',
    }}>
      {rating}
    </div>
  )
}

function GameCard({ project, index }) {
  return (
    <div style={{
      background: 'linear-gradient(160deg, var(--xbox-panel) 0%, #161616 50%, var(--xbox-charcoal) 100%)',
      border: '1px solid rgba(82,176,67,0.12)',
      borderRadius: 8,
      overflow: 'hidden',
      animation: `fadeInUp 0.5s ease ${index * 0.12}s both`,
      transition: 'border-color 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
      position: 'relative',
    }}
    className="game-card"
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(82,176,67,0.4)'
      e.currentTarget.style.boxShadow = '0 0 20px rgba(82,176,67,0.1), inset 0 0 20px rgba(82,176,67,0.03)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(82,176,67,0.12)'
      e.currentTarget.style.boxShadow = 'none'
    }}
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

      {/* Game cover top area */}
      <div style={{
        height: 80,
        background: `linear-gradient(135deg, rgba(16,124,16,0.15) 0%, rgba(0,0,0,0.4) 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(82,176,67,0.1)',
        position: 'relative',
      }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 32,
          color: 'rgba(82,176,67,0.15)',
          fontWeight: 900,
          letterSpacing: 4,
        }}>
          {project.title.charAt(0)}
        </div>
        {/* Genre tag */}
        <div style={{
          position: 'absolute',
          top: 8,
          left: 8,
          padding: '2px 8px',
          background: 'rgba(82,176,67,0.15)',
          borderRadius: 3,
          fontFamily: 'var(--font-sub)',
          fontSize: 9,
          letterSpacing: 1,
          color: 'var(--xbox-green-bright)',
          textTransform: 'uppercase',
        }}>
          {project.genre}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '14px 16px' }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 14,
          color: 'var(--xbox-white)',
          letterSpacing: 1,
          marginBottom: 6,
        }}>
          {project.title.toUpperCase()}
        </h3>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          color: 'var(--xbox-text)',
          lineHeight: 1.6,
          marginBottom: 12,
        }}>
          {project.description}
        </p>

        {/* Tech stack as "ESRB" */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '2px 8px',
              background: 'rgba(82,176,67,0.08)',
              border: '1px solid rgba(82,176,67,0.15)',
              borderRadius: 3,
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              color: 'var(--xbox-green-bright)',
            }}>
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <RatingBadge rating={project.rating} />
          <button
            style={{
              padding: '5px 16px',
              background: 'linear-gradient(135deg, var(--xbox-green), var(--xbox-green-dim))',
              border: '1px solid var(--xbox-green-bright)',
              borderRadius: 4,
              fontFamily: 'var(--font-heading)',
              fontSize: 10,
              letterSpacing: 2,
              color: 'var(--xbox-white)',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
              boxShadow: '0 0 8px rgba(82,176,67,0.2)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 16px rgba(82,176,67,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 8px rgba(82,176,67,0.2)'
            }}
          >
            ► PLAY
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsBlade() {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 10,
        letterSpacing: 4,
        color: 'var(--xbox-green)',
        marginBottom: 4,
        textTransform: 'uppercase',
      }}>
        ► Game Library
      </div>
      <div style={{
        fontFamily: 'var(--font-sub)',
        fontSize: 13,
        color: 'var(--xbox-silver)',
        marginBottom: 20,
        letterSpacing: 1,
      }}>
        {projects.length} titles available — Select a game to play
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280, 1fr))',
        gap: 20,
        maxWidth: 1000,
        margin: '0 auto',
      }}
      className="projects-grid"
      >
        {projects.map((p, i) => (
          <GameCard key={p.title} project={p} index={i} />
        ))}
      </div>
      <style>{`
        .projects-grid {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr) !important;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            padding-bottom: 80px !important;
          }
        }
      `}</style>
    </div>
  )
}
