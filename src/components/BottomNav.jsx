import { Home, History, Info, Download } from 'lucide-react'
import { Haptics, ImpactStyle } from '@capacitor/haptics'

const BottomNav = ({ activePage, onNavigate }) => {
    const handleNavigation = (path, page) => {
        onNavigate(path, page)
    }

    return (
        <nav className="bottom-nav">
            <button
                className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavigation('/', 'home')}
            >
                <Home size={24} />
                <span>Home</span>
            </button>
            <button
                className={`nav-item ${activePage === 'history' ? 'active' : ''}`}
                onClick={() => handleNavigation('/history', 'history')}
            >
                <History size={24} />
                <span>History</span>
            </button>
            <button
                className={`nav-item ${activePage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavigation('/about', 'about')}
            >
                <Info size={24} />
                <span>About</span>
            </button>
        </nav>
    )
}

export default BottomNav
