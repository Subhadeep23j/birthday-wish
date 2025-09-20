import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Surprise() {
  const [open, setOpen] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [answer, setAnswer] = useState(null);

  const handleResponse = (response) => {
    setAnswer(response);
    setShowResponse(true);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Surprise Button */}
        <motion.button
          className="elegant-btn relative mb-4 sm:mb-6 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #be185d 0%, #d4a7b8 50%, #f4c2a1 100%)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            fontFamily: "'Poppins', sans-serif"
          }}
          whileHover={{ 
            scale: 1.05,
            y: -3,
            boxShadow: "0 20px 40px -10px rgba(190, 24, 93, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen(!open)}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            delay: 0.3 
          }}
          viewport={{ once: true }}
        >
          {/* Button Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: [-100, 300] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
          
          <span className="relative z-10">
            🎁 Click for a Surprise
          </span>
          
          {/* Floating Sparkles */}
          <motion.div
            className="absolute -top-2 -right-2 text-xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✨
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 -left-2 text-xl"
            animate={{ 
              rotate: [0, -360],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            🌟
          </motion.div>
        </motion.button>

        {/* Surprise Message */}
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              className="glass-effect rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(25px)",
                WebkitBackdropFilter: "blur(25px)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 25px 50px -15px rgba(190, 24, 93, 0.3)"
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.3, 
                rotateY: -90,
                y: 50
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotateY: 0,
                y: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.3, 
                rotateY: 90,
                y: -50
              }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Confetti Rain Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: "-10px"
                    }}
                    animate={{
                      y: [0, 400],
                      rotate: [0, 360],
                      opacity: [1, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    {['🎉', '💖', '✨', '💕', '🌟'][Math.floor(Math.random() * 5)]}
                  </motion.div>
                ))}
              </div>

              {/* Main Surprise Text */}
              <motion.div
                className="relative z-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.div
                  className="text-4xl sm:text-5xl mb-3 sm:mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💍
                </motion.div>

                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 px-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#7c2d92",
                    textShadow: "2px 2px 4px rgba(124, 45, 146, 0.3)",
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)"
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Will you be my forever wife?
                </motion.h3>

                <motion.p
                  className="text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6 px-2"
                  style={{ 
                    fontFamily: "'Dancing Script', cursive", 
                    fontSize: "clamp(1.2rem, 3vw, 1.5rem)", 
                    color: "#7c2d92",
                    fontWeight: "600",
                    textShadow: "1px 1px 2px rgba(124, 45, 146, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  Every day with you feels like magic ✨❤️✨
                </motion.p>

                {/* Yes/No Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  <motion.button
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg min-w-[120px]"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleResponse('yes')}
                  >
                    Yes! 💕
                  </motion.button>

                  <motion.button
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg min-w-[120px]"
                    style={{
                      background: "linear-gradient(135deg, #ef4444 0%, #f87171 100%)",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleResponse('no')}
                  >
                    Not yet 💔
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Heart Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #f4c2a1, #d4a7b8, #be185d)",
                  padding: "3px"
                }}
                animate={{ 
                  background: [
                    "linear-gradient(135deg, #f4c2a1, #d4a7b8, #be185d)",
                    "linear-gradient(135deg, #be185d, #f4c2a1, #d4a7b8)",
                    "linear-gradient(135deg, #d4a7b8, #be185d, #f4c2a1)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity
                }}
              >
                <div className="w-full h-full rounded-3xl bg-transparent"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Response Section */}
        <AnimatePresence mode="wait">
          {showResponse && (
            <motion.div
              className="glass-effect rounded-3xl p-4 sm:p-6 lg:p-8 mt-4 sm:mt-6 relative overflow-hidden"
              style={{
                background: answer === 'yes' 
                  ? "rgba(240, 253, 244, 0.3)" 
                  : "rgba(254, 242, 242, 0.3)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: answer === 'yes' 
                  ? "2px solid rgba(34, 197, 94, 0.3)" 
                  : "2px solid rgba(239, 68, 68, 0.3)",
                boxShadow: answer === 'yes' 
                  ? "0 25px 50px -15px rgba(34, 197, 94, 0.2)" 
                  : "0 25px 50px -15px rgba(239, 68, 68, 0.2)"
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.3, 
                y: 50
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.3, 
                y: -50
              }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 150
              }}
            >
              {answer === 'yes' ? (
                // YES Response - Love Note
                <motion.div
                  className="text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {/* Celebration Icons */}
                  <motion.div
                    className="text-5xl sm:text-6xl mb-3 sm:mb-4"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🎊💖🎊
                  </motion.div>

                  <motion.h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 px-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#047857",
                      textShadow: "2px 2px 4px rgba(4, 120, 87, 0.3)",
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)"
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    My Heart is Overflowing! 💕
                  </motion.h3>

                  {/* Special Love Note */}
                  <motion.div
                    className="text-left max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                  >
                    <p 
                      className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "#1f2937",
                        lineHeight: "1.8",
                        fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)"
                      }}
                    >
                      <span 
                        className="text-xl sm:text-2xl block mb-3 text-center"
                        style={{
                          fontFamily: "'Dancing Script', cursive",
                          color: "#047857",
                          fontWeight: "700",
                          textShadow: "1px 1px 2px rgba(4, 120, 87, 0.3)",
                          fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)"
                        }}
                      >
                        "My Dearest Future Wife"
                      </span>
                      
                      You've just made me the <strong style={{color: "#047857", fontWeight: "700"}}>happiest person alive</strong>! 🌟 
                      <br/><br/>
                      I promise to love you through every sunrise and sunset, through every storm and rainbow. You are my <em style={{color: "#059669", fontWeight: "600", fontStyle: "normal"}}>home</em>, my <em style={{color: "#059669", fontWeight: "600", fontStyle: "normal"}}>adventure</em>, and my <em style={{color: "#059669", fontWeight: "600", fontStyle: "normal"}}>forever</em>.
                      <br/><br/>
                      Together, we'll write the most beautiful love story the world has ever seen. ✨
                      <br/><br/>
                      <span 
                        className="text-lg sm:text-xl"
                        style={{
                          fontFamily: "'Dancing Script', cursive",
                          color: "#047857",
                          fontWeight: "700",
                          textShadow: "1px 1px 2px rgba(4, 120, 87, 0.3)",
                          fontSize: "clamp(1.1rem, 3vw, 1.4rem)"
                        }}
                      >
                        I can't wait to call you my wife! 💍👰‍♀️🤵‍♂️
                      </span>
                    </p>
                  </motion.div>

                  {/* Floating Success Hearts */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-2xl"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          color: "#10b981"
                        }}
                        animate={{
                          y: [0, -30, 0],
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      >
                        {['💕', '💖', '💗', '💝', '💘', '❤️'][Math.floor(Math.random() * 6)]}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                // NO Response
                <motion.div
                  className="text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.div
                    className="text-4xl sm:text-5xl mb-2 sm:mb-3"
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    💔😢
                  </motion.div>

                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 px-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#b91c1c",
                      textShadow: "1px 1px 2px rgba(185, 28, 28, 0.3)",
                      fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)"
                    }}
                  >
                    I understand, my love...
                  </h3>

                  <p 
                    className="text-base sm:text-lg px-4"
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      color: "#b91c1c",
                      fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                      fontWeight: "600",
                      textShadow: "1px 1px 2px rgba(185, 28, 28, 0.2)"
                    }}
                  >
                    I'll wait for you, forever and always. 💕<br/>
                    When you're ready, I'll be here with all my love. ❤️
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Hearts around the button */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-lg sm:text-xl lg:text-2xl opacity-20 sm:opacity-30"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${25 + (i % 2 * 40)}%`,
                fontSize: "clamp(1rem, 3vw, 1.5rem)"
              }}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3 + (i * 0.5),
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              {['💖', '💕', '❤️', '💝', '💘', '💗'][i]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}