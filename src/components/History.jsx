import { Trash2, ExternalLink, Clock, Share2, Wand2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Share } from '@capacitor/share'

const History = ({ onBack }) => {
    const [history, setHistory] = useState([])

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('mapCombinerHistory') || '[]')
        setHistory(savedHistory)
    }, [])

    const clearHistory = () => {
        localStorage.removeItem('mapCombinerHistory')
        setHistory([])
    }

    const removeHistoryItem = (index) => {
        const newHistory = history.filter((_, i) => i !== index)
        setHistory(newHistory)
        localStorage.setItem('mapCombinerHistory', JSON.stringify(newHistory))
    }

    const handleShare = async (url) => {
        try {
            await Share.share({
                title: 'Combined Map Route',
                text: 'Check out this combined route on Google Maps!',
                url: url,
                dialogTitle: 'Share Route',
            });
        } catch (error) {
            console.error('Error sharing', error);
        }
    }

    return (
        <>
            <header>
                <h1>History</h1>
                <p style={{ fontSize: '1.2rem', color: '#d4d4d8', marginBottom: '2rem' }}>
                    Your recently combined routes.
                </p>
            </header>

            <main>
                {history.length === 0 ? (
                    <div className="card" style={{ textAlign: 'center', color: '#71717a' }}>
                        <Clock size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                        <p>No history yet. Combine some routes to see them here!</p>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {history.map((item, index) => (
                            <div key={index} className="card" style={{ margin: '0 auto', textAlign: 'left', padding: '1.5rem', width: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#8b5cf6', fontWeight: 'bold' }}>
                                        {new Date(item.timestamp).toLocaleString()}
                                    </span>
                                    <button
                                        onClick={() => removeHistoryItem(index)}
                                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <div style={{
                                    background: 'rgba(0,0,0,0.3)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    color: '#e4e4e7',
                                    wordBreak: 'break-all',
                                    marginBottom: '1rem',
                                    maxHeight: '80px',
                                    overflowY: 'auto'
                                }}>
                                    {item.url}
                                </div>
                                <div className="result-actions" style={{ gap: '6px' }}>
                                    <button
                                        className="btn-secondary"
                                        onClick={() => handleShare(item.url)}
                                    >
                                        <Share2 size={16} /> <span>Share</span>
                                    </button>
                                    <button
                                        className="btn-secondary"
                                        onClick={() => {
                                            navigator.clipboard.writeText(item.url)
                                        }}
                                    >
                                        <Clock size={16} /> <span>Copy</span>
                                    </button>
                                    <a
                                        href={`${import.meta.env.VITE_PARSER_URL || 'https://mapparser.travel-tracker.org'}/?url=${encodeURIComponent(item.url)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Wand2 size={16} /> <span>Parse</span>
                                    </a>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                        style={{ textDecoration: 'none', background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.4)' }}
                                    >
                                        <ExternalLink size={16} /> <span>Open</span>
                                    </a>
                                </div>
                            </div>
                        ))}

                        <button
                            className="btn-secondary"
                            style={{ marginTop: '1rem', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.2)', alignSelf: 'center' }}
                            onClick={clearHistory}
                        >
                            <Trash2 size={16} /> Clear All History
                        </button>
                    </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                    <button className="btn-secondary" onClick={onBack}>
                        Back to Home
                    </button>
                </div>
            </main>
        </>
    )
}

export default History
