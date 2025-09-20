import { motion } from "framer-motion";
import { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        duration: 1, 
        delay: 2,
        type: "spring",
        stiffness: 200
      }}
    >
      {/* Elegant Music Player Container */}
      <div 
        className="glass-effect rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-500 group"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 15px 35px -5px rgba(190, 24, 93, 0.4)"
        }}
      >
        {/* Music Controls */}
        <div className="flex items-center space-x-3 min-w-[200px]">
          {/* Music Icon */}
          <motion.div
            className="text-2xl"
            animate={{ 
              rotate: isPlaying ? [0, 360] : 0,
              scale: isPlaying ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
          >
            🎵
          </motion.div>

          {/* Audio Element */}
          <audio 
            controls 
            autoPlay 
            loop 
            className="w-40 h-8"
            style={{
              filter: "sepia(100%) saturate(200%) hue-rotate(315deg) brightness(0.8)",
              borderRadius: "20px"
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="./Perfect.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>

          {/* Animated Music Note */}
          <motion.div
            className="text-xl"
            animate={{ 
              y: isPlaying ? [0, -10, 0] : 0,
              opacity: isPlaying ? [0.5, 1, 0.5] : 0.5
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎶
          </motion.div>
        </div>

        {/* Now Playing Text */}
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          <div 
            className="glass-effect px-3 py-1 rounded-full text-sm whitespace-nowrap"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              color: "#be185d",
              fontFamily: "'Dancing Script', cursive",
              fontSize: "0.9rem"
            }}
          >
            Our Love Song 💕
          </div>
        </motion.div>

        {/* Floating Musical Notes */}
        {isPlaying && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-lg opacity-60"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${10 + (i % 2 * 60)}%`,
                  color: "#be185d"
                }}
                animate={{
                  y: [-20, -80],
                  opacity: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              >
                {['♪', '♫', '♬', '♭', '♯'][i]}
              </motion.div>
            ))}
          </div>
        )}

        {/* Pulse Ring Animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 pointer-events-none"
          style={{ borderColor: "#be185d" }}
          animate={{
            scale: isPlaying ? [1, 1.3, 1] : 1,
            opacity: isPlaying ? [0.6, 0, 0.6] : 0
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        {/* Heart Beat Effect */}
        <motion.div
          className="absolute -top-2 -right-2 text-xl pointer-events-none"
          animate={{
            scale: isPlaying ? [1, 1.4, 1] : [1, 1.1, 1],
            rotate: isPlaying ? [0, 15, -15, 0] : [0, 5, -5, 0]
          }}
          transition={{
            duration: isPlaying ? 1 : 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💖
        </motion.div>
      </div>
    </motion.div>
  );
}