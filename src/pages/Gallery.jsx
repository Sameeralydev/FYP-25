
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import charcoalblack from "../assets/charcoalBlack.jpg"
import navysuit from "../assets/navySuit.jpg"
import kurtagrey from "../assets/kurtaGrey.jpg"
import shalwarKameez from "../assets/shalwarKameez.jpg"
import weddingTuxedo from "../assets/weddingTuxedo.jpg"
import casualBlazer from "../assets/casualBlazer.jpg"
import divider from "../assets/divider.svg"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: navysuit,
      alt: "Classic Navy Suit",
    },
    {
      id: 2,
      src: charcoalblack,
      alt: "Charcoal Business Suit",
    },
    {
      id: 3,
      src: kurtagrey,
      alt: "Light Gray Kurta",
    },
    {
      id: 4,
      src: shalwarKameez,
      alt: "Shalwar Kameez",
    },
    {
      id: 5,
      src: weddingTuxedo,
      alt: "Wedding Tuxedo",
    },
    {
      id: 6,
      src: casualBlazer,
      alt: "Casual Blazer",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A] pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-6xl text-5xl font-bold eb-garamond-google text-[#C29A5C] dark:text-white mb-16 text-center"
        >
          Our Gallery
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-white border border-t-0 border-l-0 border-r-0 border-b-[#C29A5C] dark:bg-[#1f1f1f]">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <img src={divider} alt="Divider" className="my-10 w-[40vh] mx-auto" />
      </div>
    </div>
  )
}

export default Gallery
