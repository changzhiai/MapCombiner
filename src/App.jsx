import { useState } from 'react'
import { Map, Link as LinkIcon, Copy, ExternalLink, Plus, ArrowRight, Trash2 } from 'lucide-react'
import { combineMapUrls } from './utils/mapUtils'
import HowItWorks from './components/HowItWorks'

function App() {
  const [urls, setUrls] = useState(['', ''])
  const [resultUrl, setResultUrl] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const updateUrl = (index, value) => {
    const newUrls = [...urls]
    newUrls[index] = value
    setUrls(newUrls)
  }

  const removeRoute = (index) => {
    if (urls.length <= 2) return
    const newUrls = urls.filter((_, i) => i !== index)
    setUrls(newUrls)
  }

  const addRoute = () => {
    setUrls([...urls, ''])
  }

  const handleCombine = () => {
    setError('')
    setResultUrl('')
    setCopied(false)

    // Check if at least one URL is provided
    const hasData = urls.some(u => u && u.trim() !== '')
    if (!hasData) {
      setError('Please enter at least one URL')
      return
    }

    const combined = combineMapUrls(urls)
    if (!combined) {
      setError('Could not parse valid Google Maps URLs. Make sure they contain /dir/ and waypoints.')
      return
    }

    setResultUrl(combined)
  }

  const copyToClipboard = () => {
    if (resultUrl) {
      navigator.clipboard.writeText(resultUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="app-container">
      <header>
        <h1>
          <img src="/logo.svg" alt="MapCombiner Logo" style={{ display: 'inline-block', verticalAlign: 'bottom', marginRight: '10px', height: '48px', width: '48px' }} />
          Map Combiner
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#d4d4d8', marginBottom: '2rem' }}>
          Combine multiple Google Maps routes to bypass the 10-stop limit.
        </p>
      </header>

      <main>
        <div className="card">
          {urls.map((url, index) => (
            <div className="input-group" key={index}>
              <label htmlFor={`url-${index}`}>Route {index + 1} URL</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <input
                    type="text"
                    id={`url-${index}`}
                    placeholder="https://www.google.com/maps/dir/..."
                    value={url}
                    onChange={(e) => updateUrl(index, e.target.value)}
                  />
                  <LinkIcon size={16} style={{ position: 'absolute', right: '12px', top: '14px', color: '#71717a' }} />
                </div>
                {urls.length > 2 && (
                  <button
                    onClick={() => removeRoute(index)}
                    className="btn-icon-danger"
                    title="Remove route"
                    style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      color: '#ef4444',
                      padding: '10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}



          <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 1.5rem' }}>
            <button
              onClick={addRoute}
              aria-label="Add new route"
              title="Add new route"
              style={{
                background: '#27272a',
                padding: '8px',
                borderRadius: '50%',
                border: '1px solid var(--glass-border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              className="add-route-btn"
            >
              <Plus size={20} color="#a1a1aa" />
            </button>
          </div>

          <button className="btn-primary" onClick={handleCombine}>
            Combine Routes <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
          </button>

          {error && <p className="error-msg">{error}</p>}
        </div>

        {resultUrl && (
          <div className="card result-area" style={{ animation: 'fadeIn 0.5s' }}>
            <label style={{ color: '#8b5cf6', fontWeight: 'bold' }}>Combined Route URL</label>
            <div style={{
              background: 'rgba(0,0,0,0.4)',
              padding: '10px',
              borderRadius: '6px',
              fontFamily: 'monospace',
              color: '#e4e4e7',
              overflowWrap: 'break-word',
              maxHeight: '100px',
              overflowY: 'auto',
              textAlign: 'left'
            }}>
              {resultUrl}
            </div>

            <div className="result-actions">
              <button className="btn-secondary" onClick={copyToClipboard}>
                <Copy size={16} /> {copied ? 'Copied!' : 'Copy Link'}
              </button>
              <a
                href={`${import.meta.env.PROD ? 'https://mapparser.travel-tracker.org' : 'http://localhost:3002'}/?url=${encodeURIComponent(resultUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                Parse Link
              </a>
              <a
                href={resultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ textDecoration: 'none', background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.4)' }}
              >
                Open in Maps <ExternalLink size={16} />
              </a>
            </div>
          </div>
        )}

        <HowItWorks />
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default App
