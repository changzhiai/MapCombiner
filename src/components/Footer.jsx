const Footer = ({ onNavigate }) => {
  return (
    <footer className="app-footer">
      <p style={{ fontSize: '0.875rem' }}>
        {/* Laptop version: About • History • Privacy • Donate • Download */}
        <span className="footer-nav hide-on-mobile">
          <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('/about', 'about'); }}>About</a> &bull;
          <a href="/history" onClick={(e) => { e.preventDefault(); onNavigate('/history', 'history'); }}>History</a> &bull;
          <a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy', 'privacy'); }}>Privacy</a> &bull;
          <a href="/donate" onClick={(e) => { e.preventDefault(); onNavigate('/donate', 'donate'); }} className="footer-logo-link">Donate</a> &bull;
          <a href="/download" onClick={(e) => { e.preventDefault(); onNavigate('/download', 'download'); }}>Download</a>
        </span>

        {/* Mobile version: Privacy • Donate • Download */}
        <span className="footer-nav hide-on-desktop">
          <a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy', 'privacy'); }}>Privacy</a> &bull;
          <a href="/donate" onClick={(e) => { e.preventDefault(); onNavigate('/donate', 'donate'); }} className="footer-logo-link">Donate</a> &bull;
          <a href="/download" onClick={(e) => { e.preventDefault(); onNavigate('/download', 'download'); }}>Download</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
