import { useEffect, useState, useRef, useMemo } from 'react';

const useCustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Check for touch device on mount and resize
    const checkTouchDevice = () => {
      const hasTouch = window.matchMedia('(pointer: coarse)').matches ||
                       window.matchMedia('(hover: none)').matches ||
                       'ontouchstart' in window;
      setIsTouchDevice(hasTouch);
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (isTouchDevice) {
      return;
    }

    let lastX = -100;
    let lastY = -100;

    const handleMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;

      // Use requestAnimationFrame for smooth updates
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setPosition({ x: lastX, y: lastY });

          setRingPosition(prev => {
            const lerpFactor = 0.15;
            return {
              x: prev.x + (lastX - prev.x) * lerpFactor,
              y: prev.y + (lastY - prev.y) * lerpFactor
            };
          });
          rafRef.current = null;
        });
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' ||
          e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' ||
          e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(false);
      }
    };

    // Only add listeners after initial render to prevent stuck cursor
    const timer = setTimeout(() => {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isTouchDevice]);

  // Memoize styles to prevent unnecessary re-renders
  const dotStyle = useMemo(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '10px',
    height: '10px',
    backgroundColor: '#00ff88',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isMouseDown ? 0.8 : isHovering ? 2 : 1})`,
    transition: 'transform 0.1s ease-out',
    mixBlendMode: 'difference',
    opacity: isTouchDevice ? 0 : 1,
    visibility: isTouchDevice ? 'hidden' : 'visible'
  }), [position.x, position.y, isMouseDown, isHovering, isTouchDevice]);

  const ringStyle = useMemo(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '34px',
    height: '34px',
    border: '1px solid #00ff88',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9998,
    transform: `translate3d(${ringPosition.x - 17}px, ${ringPosition.y - 17}px, 0) scale(${isHovering ? 1.5 : 1})`,
    transition: 'transform 0.15s ease-out',
    opacity: isTouchDevice ? 0 : 0.5,
    visibility: isTouchDevice ? 'hidden' : 'visible'
  }), [ringPosition.x, ringPosition.y, isHovering, isTouchDevice]);

  return { dotStyle, ringStyle, isTouchDevice };
};

export default useCustomCursor;
