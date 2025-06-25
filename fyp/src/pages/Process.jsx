import { motion } from "framer-motion"

const Process = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-light text-gray-800 dark:text-white mb-16 text-center"
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
                <div className="w-16 h-16 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{step.title}</h2>
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
          <h2 className="text-3xl font-light text-gray-800 dark:text-white mb-4">Total Timeline</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            6-8 weeks from initial consultation to delivery
          </p>
          <button className="btn-primary">Schedule Your Consultation</button>
        </motion.div>
      </div>
    </div>
  )
}

export default Process