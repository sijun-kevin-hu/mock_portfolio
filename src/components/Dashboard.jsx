import { useState, useEffect, useCallback } from 'react'
import BladeNav from './BladeNav'
import HomeBlade from './blades/HomeBlade'
import ProjectsBlade from './blades/ProjectsBlade'
import ExperienceBlade from './blades/ExperienceBlade'
import ContactBlade from './blades/ContactBlade'
import XboxLogo from './XboxLogo'
import MobileNav from './MobileNav'

const BLADES = [
  { id: 'home', label: 'XBOX', subtitle: 'ABOUT ME' },
  { id: 'projects', label: 'GAMES', subtitle: 'PROJECTS' },
  { id: 'experience', label: 'MUSIC', subtitle: 'EXPERIENCE' },
  { id: 'contact', label: 'SETTINGS', subtitle: 'CONTACT' },
]

const bladeComponents = {
  home: HomeBlade,
  projects: ProjectsBlade,
  experience: ExperienceBlade,
  contact: ContactBlade,
}

export default function Dashboard() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState('right')
  const [animating, setAnimating] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  const navigate = useCallback((idx) => {
    if (idx === active || animating) return
    setDirection(idx > active ? 'right' : 'left')
    setAnimating(true)
    setActive(idx)
    setTimeout(() => setAnimating(false), 500)
  }, [active, animating])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'd') {
        navigate(Math.min(active + 1, BLADES.length - 1))
      } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        navigate(Math.max(active - 1, 0))
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [active, navigate])

  const ActiveBlade = bladeComponents[BLADES[active].id]

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111 40%, #0d1a0d 100%)',
      display: 'flex',
      flexDirection: 'column',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.8s ease',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,124,16,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Top bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 30px',
        borderBottom: '1px solid rgba(82, 176, 67, 0.15)',
        zIndex: 10,
        background: 'linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(15,15,15,0.9) 100%)',
        backdropFilter: 'blur(10px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <XboxLogo size={28} />
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 13,
            letterSpacing: 4,
            color: 'var(--xbox-green-bright)',
            textTransform: 'uppercase',
          }}>
            Kevin Hu — Dashboard
          </span>
        </div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          color: 'var(--xbox-text-dim)',
          letterSpacing: 1,
        }}>
          ← → NAVIGATE &nbsp;|&nbsp; PRESS A/D
        </div>
      </div>

      {/* Blade navigation tabs */}
      <BladeNav blades={BLADES} active={active} onSelect={navigate} />

      {/* Active blade content */}
      <div style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        zIndex: 5,
      }}>
        <div
          key={BLADES[active].id}
          style={{
            position: 'absolute',
            inset: 0,
            animation: `${direction === 'right' ? 'bladeSlideIn' : 'bladeSlideIn'} var(--blade-speed) var(--blade-ease) forwards`,
            overflow: 'auto',
            padding: '24px 30px',
          }}
        >
          <ActiveBlade />
        </div>
      </div>

      {/* Mobile bottom nav */}
      <MobileNav blades={BLADES} active={active} onSelect={navigate} />

      {/* Footer */}
      <div style={{
        padding: '8px 30px',
        borderTop: '1px solid rgba(82,176,67,0.1)',
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        color: 'var(--xbox-text-dim)',
        textAlign: 'center',
        zIndex: 10,
        background: 'rgba(10,10,10,0.9)',
      }}>
        © Kevin Hu — Press START to connect
      </div>
    </div>
  )
}
