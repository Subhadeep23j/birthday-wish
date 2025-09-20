import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="py-16 px-4 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Line */}
        <motion.div
          className="w-32 h-0.5 mx-auto mb-8 rounded-full"
          style={{ background: "linear-gradient(135deg, #f4c2a1 0%, #d4a7b8 50%, #be185d 100%)" }}
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Main Footer Message */}
        <motion.div
          className="glass-effect rounded-3xl p-8 mb-6 relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 15px 30px -5px rgba(190, 24, 93, 0.2)"
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Floating Hearts */}
          <div className="absolute top-2 left-4 text-xl opacity-40 animate-pulse">💕</div>
          <div className="absolute top-2 right-4 text-lg opacity-50 animate-bounce">💖</div>
          <div className="absolute bottom-2 left-6 text-lg opacity-45 animate-pulse">❤️</div>
          <div className="absolute bottom-2 right-6 text-xl opacity-35 animate-bounce">💝</div>

          <motion.p
            className="text-lg relative z-10"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#1a202c",
              fontWeight: "400"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Made with <motion.span 
              className="text-2xl mx-1"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ❤️
            </motion.span> by <strong style={{color: "#be185d"}}>Subha</strong>, only for my soulmate <strong style={{color: "#d4a7b8"}}>Sunita</strong>.
          </motion.p>
        </motion.div>

        {/* Special Date */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
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
            May 12, 2025 - A day to remember forever ✨
          </p>
        </motion.div>

        {/* Romantic Quote */}
        <motion.blockquote
          className="text-center italic mb-8 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#4a5568",
            fontSize: "1.1rem",
            lineHeight: "1.7"
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          viewport={{ once: true }}
        >
          "Every love story is beautiful, but ours is my favorite."
          <footer className="mt-2 text-sm">
            <cite style={{ color: "#be185d" }}>- Our Love Story</cite>
          </footer>
        </motion.blockquote>

        {/* Bottom Decoration */}
        <motion.div
          className="flex justify-center items-center space-x-4 text-2xl"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          viewport={{ once: true }}
        >
          <motion.span
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🌹
          </motion.span>
          
          <motion.span
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            💕
          </motion.span>
          
          <motion.span
            animate={{ 
              rotate: [0, -360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            ✨
          </motion.span>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-8 pt-6 border-t border-pink-200/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            © 2025 - A Birthday Gift From The Heart
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}