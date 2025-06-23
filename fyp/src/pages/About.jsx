import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-light text-gray-800 dark:text-white mb-8 text-center"
        >
          About NYC Finest Suits
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300"
        >
          <p className="text-xl leading-relaxed mb-8">
            Since 1985, NYC Finest Suits has been the premier destination for bespoke tailoring in Manhattan. Our master
            craftsmen combine traditional techniques with modern precision to create suits that are not just clothing,
            but works of art.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-16">
            <div>
              <h2 className="text-3xl font-light text-gray-800 dark:text-white mb-4">Our Heritage</h2>
              <p className="leading-relaxed">
                Founded by master tailor Giovanni Rossi, our atelier has dressed some of New York's most distinguished
                gentlemen. From Wall Street executives to Broadway stars, our suits have graced the most important
                moments in our clients' lives.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light text-gray-800 dark:text-white mb-4">Our Craft</h2>
              <p className="leading-relaxed">
                Every suit is handcrafted using time-honored techniques passed down through generations. We source the
                finest fabrics from renowned mills in Italy and England, ensuring each garment meets our exacting
                standards of quality and elegance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About