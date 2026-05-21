import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}
export function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);else
      setCount(end);
    };
    requestAnimationFrame(tick);
  }, [isInView, end, duration]);
  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.span>);

}