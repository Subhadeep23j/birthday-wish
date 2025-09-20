import { motion } from "framer-motion";

const photos = [
  { 
    src: "./our_cutest_memory.png", 
    caption: "Our cutest memory 💖" 
  },
  { 
    src: "./smile.png", 
    caption: "Your prettiest smile 😍" 
  },
  { 
    src: "./first_day.png", 
    caption: "First Day ❤️" 
  },
  { 
    src: "./beautiful_moments.png", 
    caption: "Beautiful moments 🌹" 
  },
  { 
    src: "./love.png", 
    caption: "Love in every frame 💕" 
  },
  { 
    src: "./forever.png", 
    caption: "Together forever 💖" 
  },
];

export default function Gallery() {
  return (
    <div className="py-20 px-4">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(135deg, #be185d 0%, #d4a7b8 50%, #f4c2a1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          📸 Our Memorable Moments
        </h2>
        
        <motion.div
          className="w-24 h-1 mx-auto rounded-full mt-4"
          style={{ background: "linear-gradient(135deg, #f4c2a1 0%, #d4a7b8 50%, #be185d 100%)" }}
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Photo Gallery */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  duration: 0.3
                }
              }}
            >
              {/* Photo Card */}
              <div 
                className="glass-effect rounded-3xl overflow-hidden shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300 ease-out relative transform group-hover:scale-105"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                {/* Photo Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.caption} 
                    className="w-full h-72 object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                    onError={(e) => {
                      // Enhanced fallback with romantic SVG
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZGYyZjg7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZjZTdmMztzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQpIi8+CiAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI0MCIgZmlsbD0iI2JlMTg1ZCIgb3BhY2l0eT0iMC4zIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI0MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2JlMTg1ZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk91ciBMb3ZlPC90ZXh0PgogIDx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZpbGw9IiNiZTE4NWQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5KWPC90ZXh0PgogIDx0ZXh0IHg9IjUwJSIgeT0iODAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNkNGE3YjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5NZW1vcnkgQ29taW5nIFNvb248L3RleHQ+Cjwvc3ZnPgo=';
                    }}
                    onLoad={(e) => {
                      // Add a subtle fade-in effect when image loads
                      e.target.style.opacity = '0';
                      setTimeout(() => {
                        e.target.style.transition = 'opacity 0.5s ease-in-out';
                        e.target.style.opacity = '1';
                      }, 100);
                    }}
                  />
                  
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 via-pink-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                  
                  {/* Heart Icon Overlay */}
                  <motion.div 
                    className="absolute top-4 right-4 text-2xl opacity-70 group-hover:opacity-100"
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 12,
                      transition: { 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 15,
                        duration: 0.2
                      }
                    }}
                    style={{ transition: "opacity 0.3s ease-out" }}
                  >
                    💖
                  </motion.div>
                </div>

                {/* Caption */}
                <div className="p-6 text-center">
                  <p 
                    className="text-lg font-medium"
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      color: "#be185d",
                      fontSize: "1.5rem"
                    }}
                  >
                    {photo.caption}
                  </p>
                </div>

                {/* Decorative Border */}
                <div 
                  className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-60 transition-all duration-300 ease-out"
                  style={{
                    background: "linear-gradient(135deg, #f4c2a1, #d4a7b8, #be185d)",
                    padding: "1px"
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-transparent"></div>
                </div>
              </div>

              {/* Floating Hearts Animation */}
              <motion.div
                className="absolute -top-2 -right-2 text-xl pointer-events-none"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                💕
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Add More Photos Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-xl text-pink-600"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            So many beautiful memories together... ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}