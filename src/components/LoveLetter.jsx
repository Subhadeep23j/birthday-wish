import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <div className="py-20 px-4">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Love Letter Container */}
        <div 
          className="relative glass-effect rounded-3xl p-8 sm:p-12 overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            border: "2px solid rgba(244, 194, 161, 0.3)",
            boxShadow: "0 30px 60px -15px rgba(190, 24, 93, 0.3)"
          }}
        >
          {/* Decorative Letter Seal */}
          <motion.div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
              style={{
                background: "linear-gradient(135deg, #be185d 0%, #d4a7b8 50%, #f4c2a1 100%)",
                color: "white"
              }}
            >
              💌
            </div>
          </motion.div>

          {/* Letter Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-2 color-[#be185d]"
              style={{
                fontFamily: "'Playfair Display', serif",
                // background: "linear-gradient(135deg, #be185d 0%, #d4a7b8 50%, #f4c2a1 100%)",
                WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              My Love Letter
            </h2>
            
            <motion.div
              className="w-16 h-0.5 mx-auto rounded-full"
              style={{ background: "linear-gradient(135deg, #f4c2a1 0%, #d4a7b8 50%, #be185d 100%)" }}
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Letter Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Elegant Quote Start */}
            <motion.div 
              className="absolute -top-4 -left-4 text-6xl opacity-20"
              style={{ color: "#be185d" }}
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              "
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl leading-relaxed text-center relative z-10"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#1a202c",
                lineHeight: "1.9"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <span 
                className="text-2xl sm:text-3xl block mb-6"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  color: "#be185d",
                  fontWeight: "600"
                }}
              >
                "My Dearest Love,"
              </span>
              
              On this special day, I just want to say: you are my <strong style={{color: "#be185d"}}>happiness</strong>, my <strong style={{color: "#be185d"}}>peace</strong>, my <strong style={{color: "#be185d"}}>strength</strong>, and my <strong style={{color: "#be185d"}}>forever</strong>. 
              <br/><br/>
              My dream is to see you as my wife, to wake up next to you every morning, and to grow old loving you more every day.
              <br/><br/>
              <span 
                className="text-xl sm:text-2xl"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  color: "#d4a7b8",
                  fontWeight: "600"
                }}
              >
                Happy Birthday, my soulmate, my future wife, my everything ❤️
              </span>
            </motion.p>

            {/* Elegant Quote End */}
            <motion.div 
              className="absolute -bottom-4 -right-4 text-6xl opacity-20 rotate-180"
              style={{ color: "#be185d" }}
              initial={{ scale: 0, rotate: 135 }}
              whileInView={{ scale: 1, rotate: 180 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              "
            </motion.div>
          </motion.div>

          {/* Letter Signature */}
          <motion.div
            className="text-right mt-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <p 
              className="text-xl"
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: "#be185d",
                fontWeight: "600"
              }}
            >
              Forever yours,
              <br/>
              <span className="text-2xl">Subha 💕</span>
            </p>
          </motion.div>

          {/* Enhanced Decorative Elements */}
          <div className="absolute top-4 left-4 text-2xl opacity-40 animate-pulse">💖</div>
          <div className="absolute top-4 right-4 text-xl opacity-50 animate-bounce">✨</div>
          <div className="absolute bottom-4 left-4 text-xl opacity-45 animate-pulse">🌹</div>
          <div className="absolute bottom-4 right-4 text-2xl opacity-35 animate-bounce">💕</div>

          {/* Floating Hearts Animation */}
          <motion.div
            className="absolute top-1/2 left-8 text-lg opacity-20"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💘
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-8 text-lg opacity-25"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -15, 15, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            💝
          </motion.div>

          {/* Elegant Border Animation */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, #f4c2a1, #d4a7b8, #be185d)",
              padding: "2px"
            }}
            animate={{ 
              background: [
                "linear-gradient(135deg, #f4c2a1, #d4a7b8, #be185d)",
                "linear-gradient(225deg, #be185d, #f4c2a1, #d4a7b8)",
                "linear-gradient(315deg, #d4a7b8, #be185d, #f4c2a1)",
                "linear-gradient(45deg, #f4c2a1, #d4a7b8, #be185d)"
              ]
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ 
              opacity: { duration: 1.5, delay: 1.6 },
              background: { duration: 8, repeat: Infinity }
            }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full rounded-3xl bg-transparent"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}