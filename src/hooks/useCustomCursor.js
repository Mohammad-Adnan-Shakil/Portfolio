import { useEffect, useState, useRef } from 'react';

const useCustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    
    if (isTouchDevice) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setRingPosition(prev => {
        const lerpFactor = 0.12;
        return {
          x: prev.x + (e.clientX - prev.x) * lerpFactor,
          y: prev.y + (e.clientY - prev.y) * lerpFactor
        };
      });
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

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const dotStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '10px',
    height: '10px',
    backgroundColor: '#00ff88',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: `translate(${position.x - 5}px, ${position.y - 5}px) scale(${isMouseDown ? 0.8 : isHovering ? 2 : 1})`,
    transition: 'transform 0.1s ease',
    mixBlendMode: 'difference'
  };

  const ringStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '34px',
    height: '34px',
    border: '1px solid #00ff88',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9998,
    transform: `translate(${ringPosition.x - 17}px, ${ringPosition.y - 17}px) scale(${isHovering ? 1.5 : 1})`,
    transition: 'transform 0.15s ease',
    opacity: 0.5
  };

  return { dotStyle, ringStyle };
};

export default useCustomCursor;
