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
    <AnimatePresence mode="wait">
      {!isAnimating && (
        <>
          {/* Black overlay background - full viewport cover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-black"
            style={{ zIndex: 9998 }}
          />

          {/* Top slice that moves up on exit */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 h-1/2 bg-black/50 backdrop-blur-sm"
            style={{ zIndex: 9997 }}
          />

          {/* Bottom slice that moves down on exit */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '100vh' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed bottom-0 left-0 right-0 h-1/2 bg-black/50 backdrop-blur-sm"
            style={{ zIndex: 9997 }}
          />

          {/* CTA Button Container */}
          <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 9999 }}>
            <motion.button
              initial={{ width: '80px' }}
              animate={{ width: isHovering ? '240px' : '200px' }}
              exit={{ x: '150vw', opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              onClick={handleEnter}
              className="relative h-14 bg-transparent border-3 border-white rounded-full flex items-center justify-between px-1.5 gap-3 overflow-visible cursor-pointer focus:outline-none"
            >
              {/* Left text - visible immediately */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-white font-medium text-[16px] whitespace-nowrap"
              >
                Enter on website
              </motion.span>

              {/* Arrow circle - static background */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden relative">
                {/* Main arrow - exits right on hover */}
                <motion.div
                  animate={{
                    x: isHovering ? 40 : 0,
                    opacity: isHovering ? 0 : 1
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute"
                >
                  <ArrowRight className="w-5 h-5 text-black" strokeWidth={2.5} />
                </motion.div>

                {/* Secondary arrow - enters from left on hover */}
                <motion.div
                  animate={{
                    x: isHovering ? 0 : -40,
                    opacity: isHovering ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute"
                >
                  <ArrowRight className="w-5 h-5 text-black" strokeWidth={2.5} />
                </motion.div>
              </div>
            </motion.button>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
