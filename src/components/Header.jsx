import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-300/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-rose-300/25 to-pink-400/25 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-purple-200/30 to-pink-300/30 rounded-full blur-md animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Romantic Elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 text-3xl opacity-40"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🌹
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 left-1/4 text-4xl opacity-35"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.6, 0.35]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: 1
          }}
        >
          �
        </motion.div>

        <motion.div 
          className="absolute top-1/3 left-1/6 text-2xl opacity-30"
          animate={{ 
            x: [0, 10, 0],
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            delay: 2
          }}
        >
          ✨
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="text-center z-10 relative max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Pre-title */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span 
            className="text-sm sm:text-base md:text-lg tracking-wider uppercase opacity-70"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#be185d",
              letterSpacing: "3px",
              fontWeight: "300"
            }}
          >
            Today is Special Because
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#2d1b4e",
            textShadow: "3px 3px 6px rgba(45, 27, 78, 0.2)",
            letterSpacing: "-1px"
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.8, 
            type: "spring", 
            stiffness: 80,
            delay: 0.8
          }}
        >
          Happy Birthday
          <br />
          <span 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl block mt-2"
            style={{
              fontFamily: "'Dancing Script', cursive",
              background: "linear-gradient(135deg, #be185d 0%, #d4a7b8 50%, #f4c2a1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "700"
            }}
          >
            My Beautiful Love
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed mb-10 px-4"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: "#5a4a6b",
            fontWeight: "400",
            fontStyle: "italic",
            letterSpacing: "0.5px"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          My soulmate • My future wife • My Everything 
          <span className="block mt-4 text-base sm:text-lg md:text-xl" style={{ fontFamily: "'Dancing Script', cursive", color: "#be185d", fontWeight: "600" }}>
            The love of my life deserves the most magical day 💍✨
          </span>
        </motion.p>

        {/* Decorative Elements */}
        <motion.div 
          className="flex justify-center items-center space-x-8 mb-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="text-3xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🌹
          </motion.div>
          <motion.div
            className="w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <p 
            className="text-sm sm:text-base md:text-lg opacity-75 mb-8"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#7c3aed",
              letterSpacing: "1px"
            }}
          >
            Scroll down to experience all the love I have for you
          </p>
          
          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="inline-flex flex-col items-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div 
              className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center"
              style={{ borderColor: "#be185d" }}
            >
              <motion.div
                className="w-1 h-2 bg-pink-400 rounded-full mt-2"
                style={{ backgroundColor: "#be185d" }}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span 
              className="text-xs mt-2 opacity-60"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#be185d"
              }}
            >
              More Love Below
            </span>
          </motion.div>
        </motion.div>

        {/* Floating Sparkles around content */}
        <motion.div
          className="absolute -top-8 -right-8 text-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✨
        </motion.div>

        <motion.div
          className="absolute -bottom-8 -left-8 text-xl"
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🌟
        </motion.div>

        <motion.div
          className="absolute top-1/4 -right-12 text-lg"
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            delay: 1
          }}
        >
          💫
        </motion.div>
      </motion.div>
    </div>
  );
}