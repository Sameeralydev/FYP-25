import { motion } from "framer-motion"

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description:
        "We begin with a detailed consultation to understand your style preferences, lifestyle needs, and specific requirements. This is where we discuss fabric options, design details, and create your unique vision.",
      duration: "60-90 minutes",
    },
    {
      number: 2,
      title: "Fabric Selection",
      description:
        "Choose from our extensive collection of premium fabrics sourced from the world's finest mills including Loro Piana, Ermenegildo Zegna, and Holland & Sherry.",
      duration: "30-45 minutes",
    },
    {
      number: 3,
      title: "Measurements & Pattern Creation",
      description:
        "Our master tailors take over 40 precise measurements to create a unique pattern specifically for your body. This ensures a perfect fit that flatters your physique.",
      duration: "45-60 minutes",
    },
    {
      number: 4,
      title: "First Fitting",
      description:
        "The basted suit is tried on for the first time. We make any necessary adjustments to ensure the perfect fit and silhouette.",
      duration: "30-45 minutes",
    },
    {
      number: 5,
      title: "Handcrafting",
      description:
        "Our skilled artisans hand-stitch your suit using traditional techniques. Every detail is carefully crafted, from the buttonholes to the lining.",
      duration: "4-6 weeks",
    },
    {
      number: 6,
      title: "Final Fitting & Delivery",
      description:
        "The completed suit is fitted one final time for any minor adjustments. Your bespoke suit is then ready for delivery.",
      duration: "40-60 minutes",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A] pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl eb-garamond-google font-bold  text-[#C29A5C] dark:text-white mb-16 text-center"
        >
          Our Tailoring Process
        </motion.h1>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-8"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#C29A5C] dark:bg-white text-white dark:text-gray-800 rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-semibold eb-garamond-google text-gray-800 dark:text-[#C29A5C] mb-2">{step.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">{step.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Duration: {step.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold eb-garamond-google text-[#C29A5C] dark:text-white mb-4">Total Timeline</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            6-8 weeks from initial consultation to delivery
          </p>
          <button className="md:w-[35%] w-[85%] bg-transparent text-[#C29A5C] text-lg sm:text-xl border border-[#C29A5C]
             hover:bg-[#C29A5C] hover:text-white px-8 py-3 eb-garamond-google font-semibold hover:scale-105 transition-transform duration-200" onClick={() => window.location.href = "/contact"}>Schedule Your Consultation</button>
        </motion.div>
      </div>
    </div>
  )
}

export default Process