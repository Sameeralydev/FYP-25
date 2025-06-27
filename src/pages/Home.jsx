
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Home = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const processSteps = [
    { title: "Initial Consultation", description: "Discuss your style preferences and requirements" },
    { title: "Fabric Selection", description: "Choose from our premium collection of fabrics" },
    { title: "Measurements & Fitting", description: "Precise measurements for the perfect fit" },
    { title: "Handcrafting", description: "Expert tailors craft your bespoke suit" },
    { title: "Final Fitting", description: "Final adjustments and delivery" },
  ]

  const testimonials = [
    {
      rating: 5,
      testimonial: "Exceptional craftsmanship and attention to detail. My suit fits perfectly and looks incredible.",
      author: "Michael R.",
    },
    {
      rating: 5,
      testimonial: "The best investment I've made in my wardrobe. Truly bespoke quality.",
      author: "David L.",
    },
    {
      rating: 5,
      testimonial: "Outstanding service from consultation to final fitting. Highly recommended.",
      author: "James K.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className="absolute top-8 left-8 z-10">
          <motion.div whileHover={{ scale: 1.05 }} className="w-20 h-20 bg-white p-2 rounded shadow-lg cursor-pointer">
            <div className="w-full h-full bg-black flex items-center justify-center text-white text-xs">QR CODE</div>
          </motion.div>
        </div>

        <div className="relative inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-6xl md:text-7xl font-light mb-8 tracking-wide"
            >
              Finest Custom
              <br />
              Suits in NYC
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="space-x-4"
            >
              <Link to="/contact" className="btn-primary">
                Book Consultation
              </Link>
              <Link to="/gallery" className="btn-secondary">
                View Gallery
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* As Seen on Location Section */}
      <section className="py-20 bg-stone-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop"
              alt="Man in custom suit"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-light text-gray-800 dark:text-white">As Seen on Location</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our master tailors bring decades of experience crafting the finest custom suits in New York City. Each
              piece is meticulously handcrafted to your exact measurements and specifications, ensuring a perfect fit
              that reflects your personal style and sophistication.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              From the initial consultation to the final fitting, we guide you through every step of creating your
              bespoke garment. Our attention to detail and commitment to excellence has made us the preferred choice for
              discerning gentlemen throughout Manhattan.
            </p>
            <Link to="/about" className="btn-primary inline-block">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-gray-800 dark:text-white mb-8"
          >
            A New York Custom Suit Tailored in NYC
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12"
          >
            Experience the pinnacle of sartorial excellence with our handcrafted custom suits. Every stitch tells a
            story of tradition, craftsmanship, and uncompromising quality that has defined New York's finest tailoring
            for generations.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Fabrics",
                desc: "Sourced from the world's finest mills",
                img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=250&h=300&fit=crop",
              },
              {
                title: "Expert Craftsmanship",
                desc: "Hand-tailored by master artisans",
                img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=250&h=300&fit=crop",
              },
              {
                title: "Perfect Fit",
                desc: "Tailored to your exact measurements",
                img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=250&h=300&fit=crop",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={service.img}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-stone-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-gray-800 dark:text-white mb-12"
          >
            Our Tailoring Process
          </motion.h2>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-6 transition-all duration-300 ${
                  activeStep === index ? "scale-105" : ""
                }`}
              >
                <motion.div
                  animate={{
                    scale: activeStep === index ? 1.1 : 1,
                    backgroundColor: activeStep === index ? "#d97706" : "#374151",
                  }}
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg"
                >
                  {index + 1}
                </motion.div>
                <div className="text-left">
                  <h3 className="text-xl font-medium text-gray-800 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link to="/process" className="btn-primary">
              Learn About Our Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800 dark:bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-light mb-12"
          >
            What Clients Say
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-700 dark:bg-gray-800 rounded-lg p-6 hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex mb-4 justify-center">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.testimonial}"</p>
                <p className="font-medium">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-gray-800 dark:text-white mb-8"
          >
            Ready to Create Your Perfect Suit?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            Schedule your consultation today and experience the finest in bespoke tailoring.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-x-4"
          >
            <Link to="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link to="/gallery" className="btn-secondary">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home