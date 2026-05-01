const Footer = () => {
  return (
    <footer
      className="px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0"
      style={{
        borderTop: '1px solid rgba(0,255,136,0.12)'
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
