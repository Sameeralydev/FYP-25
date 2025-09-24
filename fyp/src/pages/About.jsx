"use client"

import { motion } from "framer-motion"
import divider from "../assets/divider.svg"

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A] pt-20 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto py-4 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-5xl md:font-extrabold eb-garamond-google font-semibold text-3xl md:px-0 px-4 text-[#C29A5C] dark:text-white mb-8 text-center leading-tight"
        >
          5 Star Rated Custom Suit Tailors in PAK. Finest Custom tailored suits in Lahore from world famous fabric
          brands.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 w-full flex flex-col items-center"
        >
          <img src={divider} alt="" />

          <div className="my-16 w-full flex flex-col gap-12 items-center">
            <div className="w-full">
              <h2 className="md:text-xl  text-[14px] font-bold eb-garamond-google text-gray-800 dark:text-white mb-4 text-center">
                PREMIUM CUSTOM CLOTHING IN PAK, SINCE 2024
              </h2>
              <p className="leading-relaxed md:text-base text-[14px] text-center mx-4">
                Sew Divine is a premier bespoke tailor based in Lahore, Pakistan, with over 45 years of expertise in
                crafting the finest custom clothing. We specialize in meticulously hand-crafted Custom Suits, Dress
                Shirts, Tuxedos, Women’s Custom Suits, Sports Blazers, Formal Wear, and Custom Overcoats, delivering
                exceptional quality and timeless style across PAK.
              </p>
            </div>

            <div className="w-full">
              <h2 className="md:text-xl text-[14px] font-bold eb-garamond-google text-gray-800 dark:text-white mb-4 text-center">
                PREMIUM FABRICS ONLY
              </h2>
              <p className="leading-relaxed md:text-base text-[14px] text-center mx-4">
                At Sew Divine, every custom suit is crafted using only premium international fabric brands renowned for
                their lasting quality and refined elegance. Our fabric collection features iconic names like Dormeuil,
                Ermenegildo Zegna, Loro Piana, Holland & Sherry, Alumo, Thomas Mason, and more—ensuring garments that
                stand the test of time. We pride ourselves on offering only the finest materials, with no compromise on
                quality.
              </p>
            </div>
            <div className="w-full">
              <h2 className="md:text-xl text-[14px] font-bold eb-garamond-google text-gray-800 dark:text-white mb-4 text-center">
                AFFORDABLE PRICING
              </h2>
              <p className="leading-relaxed md:text-base text-[14px] text-center mx-4">
                At Sew Divine, we guarantee the most competitive prices for custom tailored clothing in Lahore,
                Pakistan. If you find a custom suit of equivalent quality priced PKR 25,000 less anywhere in the city,
                we’ll refund you PKR 50,000—no questions asked. With thousands of luxurious fabrics to choose from,
                there’s something for every style and every budget. And yes, premium international brands are available
                here at surprisingly affordable prices. Visit our showroom in Lahore to explore exceptional value
                without compromising on elegance. Let me know if you'd like me to create a landing page or flyer for
                this promo!
              </p>
            </div>
            <div className="w-full">
              <h2 className="md:text-xl text-[14px] font-bold eb-garamond-google text-gray-800 dark:text-white mb-4 text-center">
                FAST DELIVERY AND RUSH SERVICE
              </h2>
              <p className="leading-relaxed md:text-base text-[14px] text-center mx-4">
                At Sew Divine, our bespoke tailoring ateliers in Lahore and Hong Kong are dedicated to the art of custom
                craftsmanship. Each suit is meticulously hand-made, with a turnaround time of 3 to 4 weeks, and can be
                delivered directly to your home anywhere in Pakistan or collected from our Lahore studio. For clients
                with pressing timelines, we also offer an expedited 3-week rush service without compromising on quality
                or fit. Discover the precision, elegance, and tradition of true bespoke tailoring—only at Sew Divine,
                Pakistan's finest destination for tailored menswear. Would you like me to help draft an introductory
                paragraph for your website, or perhaps a brochure-style overview next?
              </p>
            </div>
            <div className="w-full">
              <h2 className="md:text-xl text-[14px] font-bold eb-garamond-google text-gray-800 dark:text-white mb-4 text-center">
                PERFECT FIT GUARANTEE
              </h2>
              <p className="leading-relaxed md:text-base text-[14px] text-center mx-4">
                At Sew Divine, we take immense pride in delivering exceptional men’s custom suits. Each garment is
                backed by our Perfect Fit Guarantee—if you’re not fully satisfied, we will re-cut or remake your suit at
                no additional cost, no questions asked. Please note, as each piece is uniquely tailored, custom garments
                are non-refundable.
              </p>
            </div>
            <div className="w-full">
              <h2 className="md:text-xl text-[14px] font-bold eb-garamond-google text-gray-800 dark:text-white mb-4 text-center">
                QUALITY CRAFTSMANSHIP
              </h2>
              <p className="leading-relaxed md:text-base text-[14px] text-center mx-4">
                At Sew Divine, every garment is meticulously hand-crafted using international premium fabrics, ensuring
                luxury, durability, and timeless style. All our custom-tailored pieces are constructed with a
                full-canvas foundation—a mark of true sartorial excellence. Using our advanced measurement system, we
                capture your precise body profile to guarantee the perfect fit, every time
              </p>
            </div>
            <div className="w-full flex flex-col items-center">
              <button
                className="bg-transparent text-[#C29A5C] font-serif md:text-[16px] sm:text-xl border border-[#C29A5C]
                                            hover:bg-[#C29A5C] hover:text-white px-8 py-3 hover:scale-105 transition-transform duration-200"
                onClick={() => (window.location.href = "/contact")}
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
