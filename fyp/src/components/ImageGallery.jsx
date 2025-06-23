import { useState } from "react"

const ImageGallery = ({ images, title }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div>
      <h2 className="text-4xl font-light text-gray-800 text-center mb-12">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded-lg"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className={`object-cover w-full h-full transition-transform duration-300 ${
                hoveredIndex === index ? "scale-110" : "scale-100"
              }`}
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
