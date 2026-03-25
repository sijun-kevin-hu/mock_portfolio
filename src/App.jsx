import { useState, useEffect, useCallback } from 'react'
import BootScreen from './components/BootScreen'
import Dashboard from './components/Dashboard'

export default function App() {
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 3200)
    return () => clearTimeout(timer)
  }, [])

  return booted ? <Dashboard /> : <BootScreen />
}
