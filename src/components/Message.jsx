import { motion } from "framer-motion";

export default function Message() {
  return (
    <div className="py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Glass Morphism Card */}
        <div 
          className="glass-effect rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 25px 50px -10px rgba(190, 24, 93, 0.25)"
          }}
        >
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-4 left-4 text-3xl opacity-40 animate-pulse">💖</div>
          <div className="absolute top-4 right-4 text-2xl opacity-50 animate-bounce">✨</div>
          <div className="absolute bottom-4 left-4 text-2xl opacity-45 animate-pulse">🌹</div>
          <div className="absolute bottom-4 right-4 text-3xl opacity-35 animate-bounce">💕</div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg sm:text-xl md:text-2xl leading-relaxed text-center relative z-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2d1b4e",
                lineHeight: "1.9",
                fontWeight: "400",
                letterSpacing: "0.3px",
                textShadow: "1px 1px 2px rgba(45, 27, 78, 0.1)"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span 
                className="text-2xl sm:text-3xl md:text-4xl block mb-6"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  color: "#be185d",
                  fontWeight: "700",
                  textShadow: "2px 2px 4px rgba(190, 24, 93, 0.3)",
                  letterSpacing: "0.5px",
                  lineHeight: "1.2"
                }}
              >
                "Happy Birthday, my love ❤️🎂✨"
              </span>
              
              You're not only my girlfriend, you're my <strong style={{color: "#be185d", fontFamily: "'Dancing Script', cursive", fontSize: "1.1em", fontWeight: "700"}}>soulmate</strong>, my <strong style={{color: "#be185d", fontFamily: "'Dancing Script', cursive", fontSize: "1.1em", fontWeight: "700"}}>best friend</strong>, and my <strong style={{color: "#be185d", fontFamily: "'Dancing Script', cursive", fontSize: "1.1em", fontWeight: "700"}}>future wife</strong>. You are my present and my forever. Every single day with you feels like a blessing, and I can't imagine a future without you by my side. 🥰
              <br/><br/>
              On your special day, I want you to know how deeply I love you, how much I care for you, and how grateful I am that you chose me. You're the reason my heart beats faster, the reason I smile without any reason, and the reason I believe in <em style={{color: "#d4a7b8", fontSize: "1.2em", fontFamily: "'Dancing Script', cursive", fontWeight: "600", fontStyle: "normal"}}>true love</em>. 💕
              <br/><br/>
              I promise to stand by you in every storm, to hold your hand in every journey, and to love you endlessly through every season of life. My dream is to see you as my wife, to wake up next to you every morning, and to grow old loving you more and more each day.
              <br/><br/>
              <span 
                className="text-xl sm:text-2xl block mt-4"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  color: "#be185d",
                  fontWeight: "700",
                  textAlign: "center",
                  textShadow: "2px 2px 4px rgba(190, 24, 93, 0.2)",
                  letterSpacing: "0.3px",
                  lineHeight: "1.4",
                  fontStyle: "italic"
                }}
              >
                Happy Birthday, meri jaan… my love, my soulmate, my future wife, my forever girl. You are the best part of my life, and you always will be. ❤️🎉
              </span>
            </motion.p>

            {/* Elegant Quote Mark */}
            <motion.div 
              className="absolute -top-4 -left-4 text-6xl opacity-20"
              style={{ color: "#be185d" }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              "
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -right-4 text-6xl opacity-20 rotate-180"
              style={{ color: "#be185d" }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              "
            </motion.div>
          </motion.div>

          {/* Enhanced Border Animation */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, #f4c2a1, #d4a7b8, #be185d)",
              padding: "3px"
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            animate={{
              background: [
                "linear-gradient(135deg, #f4c2a1, #d4a7b8, #be185d)",
                "linear-gradient(225deg, #be185d, #f4c2a1, #d4a7b8)",
                "linear-gradient(315deg, #d4a7b8, #be185d, #f4c2a1)",
                "linear-gradient(45deg, #f4c2a1, #d4a7b8, #be185d)"
              ]
            }}
            transition={{
              opacity: { duration: 1.5, delay: 1.2 },
              background: { duration: 6, repeat: Infinity }
            }}
          >
            <div className="w-full h-full rounded-3xl bg-transparent"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}