const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 36"
    fill="none"
    aria-label="MAS.dev logo"
    role="img"
    style={{ display: 'block', height: '100%', width: 'auto' }}
  >
    {/* Pipeline mark — three nodes connected by arrows, representing architecture + speed */}
    {/* Node 1 */}
    <rect x="2" y="12" width="10" height="10" rx="1.5" fill="none" stroke="#00ff88" strokeWidth="1.5" />
    {/* Arrow 1 */}
    <path d="M12 17 L18 17" stroke="#00ff88" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 1.5" />
    <polygon points="18,14.5 22,17 18,19.5" fill="#00ff88" opacity="0.8" />
    {/* Node 2 — active, filled */}
    <rect x="22" y="10" width="14" height="14" rx="1.5" fill="#00ff88" opacity="0.15" stroke="#00ff88" strokeWidth="1.5" />
    <rect x="26" y="14" width="6" height="6" rx="0.5" fill="#00ff88" />
    {/* Arrow 2 — faster, no dash */}
    <path d="M36 17 L42 17" stroke="#00ff88" strokeWidth="1.2" strokeLinecap="round" />
    <polygon points="42,14.5 46,17 42,19.5" fill="#00ff88" opacity="0.8" />
    {/* Node 3 */}
    <rect x="46" y="12" width="10" height="10" rx="1.5" fill="none" stroke="#00ff88" strokeWidth="1.5" opacity="0.6" />

    {/* Speed indicator — small underline slash suggesting velocity */}
    <path d="M2 27 L20 27" stroke="#00ff88" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
    <path d="M22 27 L56 27" stroke="#00ff88" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

    {/* MAS wordmark */}
    <text
      x="64"
      y="22"
      fontFamily="'IBM Plex Mono', monospace"
      fontWeight="700"
      fontSize="13"
      fill="#e8e8f0"
      letterSpacing="2"
    >
      MAS
    </text>

    {/* .dev suffix */}
    <text
      x="106"
      y="22"
      fontFamily="'IBM Plex Mono', monospace"
      fontWeight="400"
      fontSize="9"
      fill="#00ff88"
      letterSpacing="0.5"
    >
      .dev
    </text>
  </svg>
);

export default Logo;