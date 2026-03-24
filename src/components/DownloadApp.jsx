import { motion } from 'framer-motion';
import { Smartphone, ArrowLeft, Download, Apple, Play, Scan, Globe } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import './DownloadApp.css';

export default function DownloadApp({ onBack }) {
    const iosUrl = "https://apps.apple.com/us/app/map-combiner/id6759537456";
    const androidUrl = "https://play.google.com/store/apps/details?id=org.traveltracker.mapcombiner&pcampaignid=web_share";

    return (
        <main className="download-page">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-panel-large"
                >
                    <div className="header-section">

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <h1 className="title-gradient">
                                Take MapCombiner Anywhere
                            </h1>
                            <p className="subtitle">
                                Download our mobile app to combine your routes on the go.
                                Enjoy a native, seamlessly synchronized experience on your favorite device.
                            </p>
                        </div>
                    </div>

                    <div className="stores-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="platform-card"
                        >
                            <div className="platform-header">
                                <Apple size={24} />
                                <span>iOS App</span>
                            </div>

                            <div className="qr-wrapper">
                                <QRCodeSVG
                                    value={iosUrl}
                                    size={180}
                                    level="H"
                                    fgColor="#4f46e5"
                                    includeMargin={false}
                                />
                            </div>

                            <p className="qr-text">Scan for App Store</p>

                            <a
                                href={iosUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="store-button store-button-ios"
                            >
                                <Apple size={28} />
                                <div className="store-button-text">
                                    <p className="small">Download on the</p>
                                    <p className="large">App Store</p>
                                </div>
                                <Download className="download-icon" size={20} />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="platform-card android-card"
                        >
                            <div className="platform-header">
                                <Play size={24} fill="currentColor" />
                                <span>Android App</span>
                            </div>

                            <div className="qr-wrapper">
                                <QRCodeSVG
                                    value={androidUrl}
                                    size={180}
                                    level="H"
                                    fgColor="#059669"
                                    includeMargin={false}
                                />
                            </div>

                            <p className="qr-text">Scan for Google Play</p>

                            <a
                                href={androidUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="store-button store-button-android"
                            >
                                <Play size={28} fill="currentColor" />
                                <div className="store-button-text">
                                    <p className="small">Get it on</p>
                                    <p className="large">Google Play</p>
                                </div>
                                <Download className="download-icon" size={20} />
                            </a>
                        </motion.div>
                    </div>

                    <div className="info-section">
                        <div className="info-grid">
                            <div className="info-item">
                                <h3 className="info-title">
                                    <Scan className="text-purple-400" /> &nbsp;
                                    How to Scan
                                </h3>
                                <p className="info-desc">
                                    Open your smartphone's camera app and point it at the QR code for your device.
                                    Tap the link that appears to visit the store page.
                                </p>
                            </div>
                            <div className="info-item">
                                <h3 className="info-title">
                                    <Smartphone className="text-indigo-400" /> &nbsp;
                                    Why Mobile?
                                </h3>
                                <p className="info-desc">
                                    Combine routes directly from Google Maps, persistent history,
                                    and native performance optimized for your device.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
                    <button className="btn-secondary" onClick={onBack}>
                        Back to Home
                    </button>
                </div>
            </div>
        </main>
    );
}
