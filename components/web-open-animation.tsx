'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function WebOpenAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => {
    setIsAnimating(true);
  };

  return (
    <AnimatePresence>
      {!isAnimating && (
        <>
          {/* Black overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-black pointer-events-none"
            style={{ zIndex: 40 }}
          />

          {/* Top slice that moves up on exit */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 h-1/2 bg-black pointer-events-none"
            style={{ zIndex: 39 }}
          />

          {/* Bottom slice that moves down on exit */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '100vh' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed bottom-0 left-0 right-0 h-1/2 bg-black pointer-events-none"
            style={{ zIndex: 39 }}
          />

          {/* CTA Button */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 50 }}>
            <motion.button
              initial={{ width: '80px' }}
              animate={{ width: isHovering ? '280px' : '200px' }}
              exit={{ x: '150vw', opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              onClick={handleEnter}
              className="pointer-events-auto relative h-16 bg-white rounded-full flex items-center justify-between px-6 overflow-hidden cursor-pointer group"
            >
              {/* Left text */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovering ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-black font-semibold text-sm whitespace-nowrap"
              >
                Enter Now
              </motion.span>

              {/* Main arrow with circle background */}
              <motion.div
                animate={{ y: isHovering ? -8 : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="flex items-center justify-center"
              >
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center relative">
                  <ArrowRight className="w-5 h-5 text-black" strokeWidth={2.5} />
                </div>
              </motion.div>

              {/* Secondary arrow that comes from bottom on hover */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovering ? 0 : 20, opacity: isHovering ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-black/50" strokeWidth={2.5} />
                </div>
              </motion.div>
            </motion.button>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
