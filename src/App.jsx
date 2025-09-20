import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Message from './components/Message';
import LoveLetter from './components/LoveLetter';
import Gallery from './components/Gallery';
import Surprise from './components/Surprise';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background with Image Overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 25%, #fce7f3 50%, #fdf4ff 75%, #fef7ff 100%)"
        }}
      >
        {/* Main Background Image with Low Fade */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("https://photos.fife.usercontent.google.com/pw/AP1GczMAoakfA9X4cATPAtXQN_Aw4Q3zOvlUatnOzbJXuJoX9DEJojURPx5QJQ=w1236-h928-s-no-gm?authuser=0")`,
            backgroundSize: '400px 400px',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Romantic Rose Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='rose-gradient' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23be185d;stop-opacity:0.15'/%3E%3Cstop offset='100%25' style='stop-color:%23f4c2a1;stop-opacity:0.05'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg fill='url(%23rose-gradient)'%3E%3Ccircle cx='100' cy='100' r='30'/%3E%3Cpath d='M100 80 c8 0 15 7 15 15 c0 8-7 15-15 15 c-8 0-15-7-15-15 c0-8 7-15 15-15 z' opacity='0.3'/%3E%3Cpath d='M85 85 c5 0 10 5 10 10 s-5 10-10 10 s-10-5-10-10 s5-10 10-10 z' opacity='0.2'/%3E%3Cpath d='M115 85 c5 0 10 5 10 10 s-5 10-10 10 s-10-5-10-10 s5-10 10-10 z' opacity='0.2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundPosition: '25% 25%'
          }}
        />

        {/* Subtle Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-12"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23be185d' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='15' cy='15' r='1.5'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3Ccircle cx='45' cy='15' r='1'/%3E%3Ccircle cx='15' cy='45' r='2.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Overlay gradient for better content readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(253, 242, 248, 0.3) 0%, rgba(252, 231, 243, 0.2) 50%, rgba(253, 244, 255, 0.3) 100%)"
          }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-200 opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${1 + Math.random() * 2}rem`
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            >
              {['💖', '💕', '❤️', '💝', '🌹', '✨', '💘', '💗'][Math.floor(Math.random() * 8)]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Message />
        <LoveLetter />
        <Gallery />
        <Surprise />
        <Footer />
        <MusicPlayer />
      </div>

      {/* Add Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Dancing+Script:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Poppins', sans-serif;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </div>
  );
}