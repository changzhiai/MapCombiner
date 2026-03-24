import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, EyeOff, FileText } from 'lucide-react';

export default function PrivacyPolicy({ onBack }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-container" style={{ animation: 'fadeIn 0.5s' }}>
            <div className="card" style={{ maxWidth: '800px', textAlign: 'left' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Privacy Policy</h1>
                <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>Last Updated: February 22, 2026</p>

                <div className="policy-section" style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                        <ShieldCheck size={24} color="#8b5cf6" />
                        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Our Commitment</h2>
                    </div>
                    <p style={{ color: '#d4d4d8', lineHeight: '1.6' }}>
                        At MapCombiner, we believe that your data belongs to you. This application is designed to be as private as possible. We do not track you, we do not show ads, and we do not store your personal information on any server.
                    </p>
                </div>

                <div className="policy-section" style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                        <Lock size={24} color="#8b5cf6" />
                        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Data Processing</h2>
                    </div>
                    <p style={{ color: '#d4d4d8', lineHeight: '1.6' }}>
                        All processing of Google Maps URLs happens entirely within your browser or is passed directly to the map parser utility as part of the URL query parameters.
                    </p>
                    <ul style={{ color: '#d4d4d8', lineHeight: '1.6', marginTop: '1rem' }}>
                        <li><strong>URLs:</strong> The URLs you paste are processed locally to extract waypoints.</li>
                        <li><strong>Stops:</strong> We do not keep a log of the locations you search for.</li>
                        <li><strong>Cookies:</strong> We do not use any tracking cookies. Local storage may be used only to persist your current session preferences locally on your device.</li>
                    </ul>
                </div>

                <div className="policy-section" style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                        <EyeOff size={24} color="#8b5cf6" />
                        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Third-Party Services</h2>
                    </div>
                    <p style={{ color: '#d4d4d8', lineHeight: '1.6' }}>
                        When you click "Open in Maps" or "Parse Link," you are redirected to other services (Google Maps or the Travel Tracker MapParser). These services have their own privacy policies which we encourage you to review.
                    </p>
                </div>

                <div className="policy-section" style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                        <FileText size={24} color="#8b5cf6" />
                        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Contact</h2>
                    </div>
                    <p style={{ color: '#d4d4d8', lineHeight: '1.6' }}>
                        If you have any questions about this Privacy Policy, you can reach out via the GitHub repository or contact the developer directly via email: <a href="mailto:changzhiai@gmail.com" className="text-indigo-600 hover:underline"> changzhiai@gmail.com</a>
                    </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                    <button className="btn-secondary" onClick={onBack}>
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
