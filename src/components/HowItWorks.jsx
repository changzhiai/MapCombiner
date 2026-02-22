import { MapPin, Navigation, MousePointerClick, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            icon: <MapPin size={24} style={{ color: '#a78bfa' }} />,
            title: "Plan Your Routes",
            desc: "Go to Google Maps and plan your trip. Since Maps has a 10-stop limit, break your long trip into multiple parts (e.g. route 1, route 2)."
        },
        {
            icon: <MousePointerClick size={24} style={{ color: '#a78bfa' }} />,
            title: "Copy URLs",
            desc: "Copy the URL for each route of your trip from the browser address bar."
        },
        {
            icon: <Navigation size={24} style={{ color: '#a78bfa' }} />,
            title: "Paste & Combine",
            desc: "Paste the URLs into the inputs above. Click '+' to add more routes. Hit 'Combine Routes' to merge them."
        },
        {
            icon: <CheckCircle size={24} style={{ color: '#a78bfa' }} />,
            title: "Navigate",
            desc: "Copy the final combined link. You'll get a single continuous route with all your stops! You can parse the link to get the route data via MapParser. You can also open the link in Google Maps to navigate."
        }
    ];

    return (
        <div className="card" style={{ marginTop: '3rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>How to Use</h2>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div key={index} className="step-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{
                            background: 'rgba(139, 92, 246, 0.1)',
                            padding: '10px',
                            borderRadius: '12px',
                            height: 'fit-content'
                        }}>
                            {step.icon}
                        </div>
                        <div>
                            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{step.title}</h3>
                            <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                {step.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
