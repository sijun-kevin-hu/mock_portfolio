import { useState } from 'react'

const contactLinks = [
  {
    label: 'EMAIL',
    value: 'kevinhu@gatech.edu',
    icon: '✉',
    href: 'mailto:kevinhu@gatech.edu',
  },
  {
    label: 'GITHUB',
    value: 'github.com/kevinhu',
    icon: '⌂',
    href: 'https://github.com/kevinhu',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/kevinhu',
    icon: '◈',
    href: 'https://linkedin.com/in/kevinhu',
  },
]

function SettingRow({ label, value, icon, href, delay }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 18px',
        background: 'linear-gradient(135deg, var(--xbox-panel), var(--xbox-charcoal))',
        border: '1px solid rgba(82,176,67,0.1)',
        borderRadius: 6,
        textDecoration: 'none',
        transition: 'all 0.2s',
        animation: `fadeInUp 0.4s ease ${delay}s both`,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(82,176,67,0.35)'
        e.currentTarget.style.boxShadow = '0 0 15px rgba(82,176,67,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(82,176,67,0.1)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Shimmer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.015) 50%, transparent 70%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 8s infinite',
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        width: 36,
        height: 36,
        borderRadius: 6,
        background: 'rgba(82,176,67,0.1)',
        border: '1px solid rgba(82,176,67,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        flexShrink: 0,
      }}>
        {icon}
      </div>

      {/* Label + value */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 10,
          letterSpacing: 3,
          color: 'var(--xbox-silver)',
          marginBottom: 2,
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          color: 'var(--xbox-green-bright)',
        }}>
          {value}
        </div>
      </div>

      {/* Arrow */}
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 14,
        color: 'var(--xbox-silver)',
      }}>
        ►
      </div>
    </a>
  )
}

function ToggleSwitch({ label, defaultOn = false, delay }) {
  const [on, setOn] = useState(defaultOn)
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 18px',
        background: 'var(--xbox-panel)',
        border: '1px solid rgba(82,176,67,0.08)',
        borderRadius: 6,
        animation: `fadeInUp 0.4s ease ${delay}s both`,
        cursor: 'pointer',
      }}
      onClick={() => setOn(!on)}
    >
      <span style={{
        fontFamily: 'var(--font-sub)',
        fontSize: 12,
        letterSpacing: 1,
        color: 'var(--xbox-text)',
      }}>
        {label}
      </span>
      <div style={{
        width: 40,
        height: 20,
        borderRadius: 10,
        background: on ? 'var(--xbox-green)' : 'rgba(60,60,60,0.6)',
        border: `1px solid ${on ? 'var(--xbox-green-bright)' : '#444'}`,
        position: 'relative',
        transition: 'all 0.2s',
        boxShadow: on ? '0 0 8px rgba(82,176,67,0.3)' : 'none',
      }}>
        <div style={{
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: on ? 'var(--xbox-green-bright)' : '#666',
          position: 'absolute',
          top: 1,
          left: on ? 21 : 1,
          transition: 'left 0.2s',
        }} />
      </div>
    </div>
  )
}

export default function ContactBlade() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setName('')
    setEmail('')
    setMessage('')
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    background: 'rgba(0,0,0,0.4)',
    border: '1px solid rgba(82,176,67,0.15)',
    borderRadius: 4,
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    color: 'var(--xbox-text)',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{
      maxWidth: 700,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}
    className="contact-blade"
    >
      {/* Section header */}
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 10,
        letterSpacing: 4,
        color: 'var(--xbox-green)',
        marginBottom: 4,
        textTransform: 'uppercase',
      }}>
        ► System Settings
      </div>

      {/* Contact links as settings rows */}
      {contactLinks.map((link, i) => (
        <SettingRow key={link.label} {...link} delay={i * 0.1} />
      ))}

      {/* Toggle options */}
      <div style={{ marginTop: 8 }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 10,
          letterSpacing: 4,
          color: 'var(--xbox-green)',
          marginBottom: 12,
          textTransform: 'uppercase',
        }}>
          ► Preferences
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <ToggleSwitch label="Available for Hire" defaultOn={true} delay={0.3} />
          <ToggleSwitch label="Open to Collaborate" defaultOn={true} delay={0.35} />
          <ToggleSwitch label="Sound Effects" defaultOn={false} delay={0.4} />
        </div>
      </div>

      {/* Send Message form */}
      <div style={{
        marginTop: 8,
        background: 'linear-gradient(145deg, var(--xbox-panel), var(--xbox-charcoal))',
        border: '1px solid rgba(82,176,67,0.12)',
        borderRadius: 8,
        padding: 20,
        animation: 'fadeInUp 0.5s ease 0.4s both',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.015) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 8s infinite',
          pointerEvents: 'none',
        }} />

        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 10,
          letterSpacing: 4,
          color: 'var(--xbox-green)',
          marginBottom: 16,
          textTransform: 'uppercase',
        }}>
          ► Send Message
        </div>

        {sent ? (
          <div style={{
            padding: 24,
            textAlign: 'center',
            fontFamily: 'var(--font-heading)',
            fontSize: 14,
            color: 'var(--xbox-green-bright)',
            letterSpacing: 2,
          }}>
            ✓ MESSAGE SENT SUCCESSFULLY
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <label style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 10,
                letterSpacing: 2,
                color: 'var(--xbox-silver)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 4,
              }}>
                Gamertag (Name)
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your name..."
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(82,176,67,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(82,176,67,0.15)'}
                required
              />
            </div>
            <div>
              <label style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 10,
                letterSpacing: 2,
                color: 'var(--xbox-silver)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 4,
              }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email..."
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(82,176,67,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(82,176,67,0.15)'}
                required
              />
            </div>
            <div>
              <label style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 10,
                letterSpacing: 2,
                color: 'var(--xbox-silver)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 4,
              }}>
                Message
              </label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type your message..."
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'rgba(82,176,67,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(82,176,67,0.15)'}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, var(--xbox-green), var(--xbox-green-dim))',
                border: '1px solid var(--xbox-green-bright)',
                borderRadius: 4,
                fontFamily: 'var(--font-heading)',
                fontSize: 11,
                letterSpacing: 3,
                color: 'var(--xbox-white)',
                cursor: 'pointer',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
                boxShadow: '0 0 10px rgba(82,176,67,0.2)',
                alignSelf: 'flex-end',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(82,176,67,0.4)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 10px rgba(82,176,67,0.2)'}
            >
              ► CONFIRM SEND
            </button>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-blade { padding-bottom: 80px !important; }
        }
      `}</style>
    </div>
  )
}
