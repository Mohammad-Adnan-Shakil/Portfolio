const Footer = () => {
  return (
    <footer
      style={{
        padding: '2rem 4rem',
        borderTop: '1px solid rgba(0,255,136,0.12)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <p
        style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.68rem',
          color: '#6b6b80'
        }}
      >
        © 2025 Mohammad Adnan Shakil
      </p>

      <div className="flex items-center gap-2">
        <div
          className="rounded-full"
          style={{
            width: '6px',
            height: '6px',
            background: '#00ff88',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />
        <p
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: '0.68rem',
            color: '#00ff88'
          }}
        >
          Open to internships
        </p>
      </div>
    </footer>
  );
};

export default Footer;
