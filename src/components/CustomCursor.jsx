import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ isModalOpen }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on non-touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('button') || target.closest('a') || target.closest('select') || target.closest('input')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible]);

  // Hide cursor if touch device or modal is open
  if (!isVisible || isModalOpen) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#C6A868] shadow-gold-glow"
      animate={{
        x: mousePosition.x - (isHovered ? 14 : 4),
        y: mousePosition.y - (isHovered ? 14 : 4),
        width: isHovered ? 28 : 8,
        height: isHovered ? 28 : 8,
        backgroundColor: isHovered ? 'rgba(198, 168, 104, 0.12)' : '#C6A868',
        scale: isClicked ? 0.75 : 1,
      }}
      transition={{ type: 'spring', damping: 28, stiffness: 450, mass: 0.1 }}
    />
  );
}
