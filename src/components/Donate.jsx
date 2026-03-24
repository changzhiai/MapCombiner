import React, { useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Browser } from '@capacitor/browser';

export default function Donate({ onBack }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDonate = async () => {
        // Using the more compatible webscr format with additional parameters to help bypass security check issues
        const donationUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=changzhiai@gmail.com&item_name=Support+MapCombiner+Development&currency_code=USD&no_shipping=1&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest&lc=US';
        try {
            await Browser.open({ url: donationUrl });
        } catch (error) {
            console.error('Error opening donation page', error);
            // Fallback for environments where Browser plugin isn't working
            window.open(donationUrl, '_blank');
        }
    };

    return (
        <div className="donate-container" style={{ animation: 'fadeIn 0.5s' }}>
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                        <Heart size={48} color="#8b5cf6" />
                    </div>
                </div>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Support MapCombiner</h1>
                <p style={{ color: '#d4d4d8', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                    MapCombiner is a free, open-source tool developed and maintained with passion.
                    If this tool has saved you time or made your trips easier, consider supporting its continued development.
                </p>

                <div className="donation-options" style={{ marginBottom: '2rem' }}>
                    <div className="donation-card" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid var(--glass-border)'
                    }}>
                        <p style={{ marginBottom: '1.5rem', color: '#d4d4d8', lineHeight: '1.6' }}>
                            Consider making a donation. Your support helps keep the servers running and new features coming! Thanks a lot for your support!
                        </p>
                        <button
                            onClick={handleDonate}
                            className="btn-primary"
                            style={{
                                background: '#0070ba',
                                borderColor: '#0070ba',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                cursor: 'pointer'
                            }}
                        >
                            <span>Donate with PayPal</span>
                        </button>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <button className="btn-secondary" onClick={onBack}>
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
