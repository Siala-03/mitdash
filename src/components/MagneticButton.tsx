import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}
export function MagneticButton({
  children,
  className = '',
  onClick,
  href
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });
  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({
      x: x * 0.3,
      y: y * 0.3
    });
  };
  const reset = () =>
  setPos({
    x: 0,
    y: 0
  });
  const inner =
  <motion.div
    animate={{
      x: pos.x,
      y: pos.y
    }}
    transition={{
      type: 'spring',
      stiffness: 150,
      damping: 15,
      mass: 0.1
    }}>
    
      {children}
    </motion.div>;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      className={className}>
      
      {href ? <a href={href}>{inner}</a> : inner}
    </div>);

}