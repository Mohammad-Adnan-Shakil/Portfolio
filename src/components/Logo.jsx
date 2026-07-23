const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 32"
    fill="none"
    aria-label="MAS.dev logo"
    role="img"
    style={{ display: 'block', height: '100%', width: 'auto' }}
  >
    {/* Terminal cursor mark — geometric, no text glyphs */}
    <rect x="2" y="6" width="10" height="20" rx="3" fill="#DC143C" className="animate-pulse" />

    {/* Network activity dot — green node suggesting a live system */}
    <circle cx="16" cy="8" r="2.5" fill="#00ff88" />

    {/* Connection trace linking cursor to node */}
    <path d="M12 9.5 L13.5 9.5" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />

    {/* MAS wordmark — JetBrains Mono, off-white */}
    <text
      x="26"
      y="22"
      fontFamily="'JetBrains Mono', monospace"
      fontWeight="700"
      fontSize="13"
      fill="#e8e8f0"
      letterSpacing="1.5"
    >
      MAS
    </text>

    {/* .dev suffix — muted green */}
    <text
      x="66"
      y="22"
      fontFamily="'JetBrains Mono', monospace"
      fontWeight="500"
      fontSize="9"
      fill="#00ff88"
      letterSpacing="0.5"
    >
      .dev
    </text>
  </svg>
);

export default Logo;
