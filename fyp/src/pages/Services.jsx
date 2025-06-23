import { motion } from "framer-motion"

const Services = () => {
  const services = [
    {
      title: "Bespoke Suits",
      description: "Fully custom suits tailored to your exact measurements and specifications.",
      price: "Starting at $2,500",
      features: ["Personal consultation", "Premium fabrics", "Hand-stitched details", "Multiple fittings"],
    },
    {
      title: "Made-to-Measure",
      description: "High-quality suits with personalized adjustments to our standard patterns.",
      price: "Starting at $1,200",
      features: ["Style consultation", "Quality fabrics", "Professional fitting", "Minor alterations"],
    },
    {
      title: "Alterations",
      description: "Expert alterations to ensure your existing suits fit perfectly.",
      price: "Starting at $150",
      features: ["Hemming", "Taking in/letting out", "Sleeve adjustments", "Trouser alterations"],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-light text-gray-800 dark:text-white mb-16 text-center"
        >
          Our Services
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <p className="text-xl font-bold text-gray-800 dark:text-white mb-6">{service.price}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 btn-primary"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
