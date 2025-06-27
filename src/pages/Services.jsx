import { motion } from "framer-motion"

const Services = () => {
  const services = [
    {
      title: "Bespoke Suits",
      description: "Custom-designed suits crafted precisely to match your measurements and preferences.",
      price: "Starting at PKR 15,000",
      features: ["Personal consultation", "Premium fabrics", "Hand-stitched details", "Multiple fittings"],
    },
    {
      title: "Ethnic Essentials",
      description: "High-quality suits with bespoke detailing inspired by traditional patterns and personalized adjustments.",
      price: "Starting at PKR 4,000",
      features: ["Style consultation", "Quality fabrics", "Professional fitting", "Minor alterations"],
    },
    {
      title: "Alterations",
      description: "Expert alterations tailored to elevate your existing suits with a flawless, personalized fit",
      price: "Starting at PKR 1500",
      features: ["Hemming", "Taking in/letting out", "Sleeve adjustments", "Trouser alterations"],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A] pt-12">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-6xl text-5xl font-bold eb-garamond-google text-[#C29A5C] dark:text-white mb-16 text-center"
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
              className="bg-white dark:bg-[#1f1f1f] rounded-lg shadow-lg p-8 border border-gray-200 dark:border-[#C29A5C]"
            >
              <h2 className="text-3xl font-semibold eb-garamond-google text-gray-800 dark:text-[#C29A5C] mb-4">{service.title}</h2>
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
                className="w-full mt-8  bg-transparent text-[#C29A5C] text-lg sm:text-xl border border-[#C29A5C]
             hover:bg-[#C29A5C] hover:text-white px-8 py-3 eb-garamond-google font-semibold hover:scale-105 transition-transform duration-200"
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
