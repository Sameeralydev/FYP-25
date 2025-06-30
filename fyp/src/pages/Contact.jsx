import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A] pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-6xl text-5xl eb-garamond-google font-bold text-[#C29A5C] dark:text-white mb-16 text-center"
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold eb-garamond-google text-gray-800 dark:text-[#C29A5C] mb-8">
              Schedule a Consultation
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  await fetch("https://formsubmit.co/ajax/sameeraly2003@gmail.com", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    body: JSON.stringify({
                      name: formData.name,
                      email: formData.email,
                      phone: formData.phone,
                      service: formData.service,
                      message: formData.message,
                    }),
                  });
                  alert("Thank you for your inquiry! We will contact you soon.");
                  setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                } catch (error) {
                  alert("There was an error sending your message. Please try again later.");
                }
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 dark:focus:ring-white focus:border-transparent bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 dark:focus:ring-white focus:border-transparent bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 dark:focus:ring-white focus:border-transparent bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 dark:focus:ring-white focus:border-transparent bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-white"
                >
                  <option value="">Select a service</option>
                  <option value="bespoke">Bespoke Suits</option>
                  <option value="made-to-measure">Made-to-Measure</option>
                  <option value="alterations">Alterations</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 dark:focus:ring-white focus:border-transparent bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-white"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-transparent text-[#C29A5C] text-lg sm:text-xl border border-[#C29A5C]
             hover:bg-[#C29A5C] hover:text-white px-8 py-3 eb-garamond-google font-semibold hover:scale-105 transition-transform duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-light eb-garamond-google  text-gray-800 dark:text-[#C29A5C] mb-8">
                Visit Our Lahore Outlet
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      132 GT. Road Lahore, PAKISTAN
                      <br />
                      Lahore, LHE 54000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Phone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      (042) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@sewdivine.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">🕒</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 11:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-[#1f1f1f] dark:hover:bg-[#262626] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Over 35 years of experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Master tailors trained in Italy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Premium fabrics from renowned mills
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Lifetime alterations included
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
