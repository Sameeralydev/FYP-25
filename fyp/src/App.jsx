import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ProcessStep from "@/components/ProcessStep";
import TestimonialCard from "@/components/TestimonialCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Process from "./pages/Process";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Size } from "./pages/Size";
import Contact from "./pages/Contact";
import banner from "./assets/banner.jpg";
import bespoke from "./assets/bespoke.jpg";
import tailored from "./assets/Tailored.webp";
import tailored2 from "./assets/Tailored_Jacket.webp";
import tailored3 from "./assets/Tailored_overcoats.webp";
import handcrafted from "./assets/handcrafted.jpg"
import customTailor1 from "./assets/customTailored-1.webp"
import customTailor2 from "./assets/customTailored-2.webp"
import customTailor3 from "./assets/customTailored-3.webp"
import customTailor4 from "./assets/customTailored-4.webp"
import customTailor5 from "./assets/customTailored-5.webp"
import customTailor6 from "./assets/customTailored-6.webp"
import customTailor7 from "./assets/customTailored-7.webp"
import customTailor8 from "./assets/customTailored-8.webp"
import customTailor9 from "./assets/customTailored-9.webp"
import tailored4 from "./assets/tailored3.webp";
import tailored5 from "./assets/tailored5.webp";
import whatsappQR from "./assets/whatsappQR.jpeg";
import whiteLogo from "./assets/logoW.png"
import testimonialBackground from "./assets/testimonial_background.webp";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useAuth } from "./context/AuthContext";


function App() {
  const [activeStep, setActiveStep] = useState(0);
  const { scrollY } = useScrollAnimation();

  // Auto-advance process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Process steps data
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "Discuss your style preferences and requirements",
    },
    {
      title: "Fabric Selection",
      description: "Choose from our premium collection of fabrics",
    },
    {
      title: "Measurements & Fitting",
      description: "Precise measurements for the perfect fit",
    },
    {
      title: "Handcrafting",
      description: "Expert tailors craft your bespoke suit",
    },
    {
      title: "Final Fitting",
      description: "Final adjustments and delivery",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      rating: 5,
      testimonial:
        "Exceptional craftsmanship and attention to detail. My suit fits perfectly and looks incredible.",
      author: "Zahid White.",
    },
    {
      rating: 5,
      testimonial:
        "The best investment I've made in my wardrobe. Truly bespoke quality.",
      author: "Saim Kuku.",
    },
    {
      rating: 5,
      testimonial:
        "Outstanding service from consultation to final fitting. Highly recommended.",
      author: "Usama Bossard.",
    },
  ];

  // Process gallery images
  // Custom images for process gallery
  const processImages = [
    {
      src: customTailor1,
      alt: "Consultation with tailor",
    },
    {
      src: customTailor2,
      alt: "Fabric selection",
    },
    {
      src: customTailor3,
      alt: "Taking measurements",
    },
    {
      src: customTailor4,
      alt: "Cutting fabric",
    },
    {
      src: customTailor5,
      alt: "Sewing suit pieces",
    },
    {
      src: customTailor6,
      alt: "Hand stitching details",
    },
    {
      src: customTailor7,
      alt: "Pressing the suit",
    },
    {
      src: customTailor8,
      alt: "First fitting",
    },
    {
      src: customTailor9,
      alt: "Adjustments",
    }
  ];
  const { user } = useAuth();


  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section
                  className="md:relative md:top-[10vh] md:h-[90vh] md:min-h-[500px] relative top-[6vh] h-[90vh] min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner})`,
                    transform: `translateY(${scrollY * 0.1}px)`,
                  }}
                >
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white animate-fade-in px-2">
                      <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
                       md:drop-shadow-4xl drop-shadow-4xl font-extrabold eb-garamond-google mb-4 -tracking-normal sm:leading-tight">
                        Finest Custom
                        <br />
                        Suits in PAK
                      </h1>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div
                    className="w-full p-4 absolute top-[90vh] left-0 md:absolute md:left-1/2 md:top-[75vh] md:transform md:-translate-x-1/2 md:w-[95%]
                     md:max-w-5xl bg-white rounded-lg shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 z-10"
                  >
                    {/* QR Code - hidden on mobile */}
                    <div className="mb-4 md:mb-0 md:mr-8 flex-shrink-0 justify-center w-full md:w-auto hidden md:flex">
                      <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-white p-2 rounded  flex items-center justify-center">
                        <img src={whatsappQR} alt="QR Code" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="flex-1 w-full md:w-auto flex flex-col gap-2 md:mr-8">
                      <h1 className="font-bold eb-garamond-google text-lg sm:text-xl md:text-2xl mb-2 md:mb-4">
                        SEW DIVINE CUSTOM SUIT TAILORS
                      </h1>
                      <p className="text-gray-900 text-sm sm:text-base">
                        5 Star Rated
                        <span className="font-bold">
                          {" "}
                          Custom Suit tailor in PAK{" "}
                        </span>
                        with more than 45 years of experience. Premium Custom
                        tailored suits in LHE, PAKISTAN. Perfect Fit Guarantee on
                        custom clothing. Our Lahore City based{" "}
                        <span className="font-bold">bespoke tailors</span>{" "}
                        create full custom suits, nothing is “made-to-measure”.
                      </p>
                    </div>
                    {/* Button */}
                    <div className="mt-4 md:mt-0 flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
                      <button
  className="btn-primary w-full sm:w-40 bg-transparent text-[#C29A5C] 
    font-serif text-lg sm:text-xl border border-[#C29A5C]
    hover:bg-[#C29A5C] hover:text-white duration-200 py-2 sm:py-3 rounded"
  onClick={() => {
    if (!user) {
      alert("Please login first to access Contact page.");
      window.location.href = "/login"; // 👈 Direct login page bhej do
    } else {
      window.location.href = "/contact"; // 👈 Agar login hai to Contact khul jaye
    }
  }}
>
  Contact Us
</button>
                    </div>
                  </div>
                </section>
                <section className="relative top-[47vh] mt-16 sm:mt-24 py-10 sm:py-16 md:py-20 bg-stone-50 lg:relative lg:top-40">
                  <div className="mt-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-8">
                    <div className="overflow-hidden rounded-lg mb-6 md:mb-0">
                      <img
                        src={bespoke}
                        alt="Man in custom suit"
                        className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh] object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-4 sm:space-y-6">
                      <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-[#C29A5C] eb-garamond-google">
                        Custom Suits PAK
                      </h2>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        Premium handcrafted custom suits in Lahore—crafted to
                        perfection, delivered at unmatched value. Every tailored
                        suit is constructed with full-canvas precision, offering
                        superior comfort, structure, and lasting shape. At{" "}
                        <span className="eb-garamond-google font-semibold text-gray-900">
                          Sew Divine
                        </span>
                        , your satisfaction is our guarantee. If the fit isn’t
                        flawless, we will either re-cut your suit or offer a
                        full refund—no compromises. With thousands of luxurious
                        fabrics sourced from world-renowned mills, we ensure
                        each garment reflects your personal style and our
                        dedication to excellence.
                      </p>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        Investing in our bespoke suits opens the door to endless
                        personalization and design freedom. From fabric to fit,
                        every detail is an opportunity to showcase your
                        individuality—something no ready-made garment can
                        replicate. We are proud to consistently deliver some of
                        the finest handcrafted custom suits in Lahore. Our
                        commitment to precision tailoring, timeless elegance,
                        and premium fabrics has made us the preferred choice for
                        those who seek sartorial distinction across Pakistan.
                      </p>
                    </div>
                  </div>
                </section>

                {/* PAK Custom Suit Section */}
                <section className="md:py-48 py-[50vh]  bg-white">
                  <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl eb-garamond-google font-bold text-[#C29A5C] mb-8">
                      A Sew Divine Custom Suit Tailored in PAK
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-12">
                      Discover the pinnacle of sartorial excellence with our
                      handcrafted custom suits. Each stitch embodies the rich
                      tradition, exceptional craftsmanship, and unwavering
                      quality that have made Pakistan's tailoring, rooted in
                      Lahore, a hallmark of distinction for generations.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                      <Card className="border-0 shadow-lg md:h-[50vh] h-[55vh] hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="overflow-hidden rounded-lg mb-4">
                            <img
                              src={tailored}
                              alt="Suit detail"
                              className="w-full md:h-[30vh] h-[35vh] hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-xl font-bold eb-garamond-google text-gray-800 mb-2">
                            Wedding Suits
                          </h3>
                          <p className="text-gray-600">
                            Because every detail counts on your big day
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg md:h-[50vh] h-[55vh] hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="overflow-hidden rounded-lg mb-4">
                            <img
                              src={tailored2}
                              alt="Tailoring process"
                              className="w-full hover:scale-105 md:h-[30vh] h-[35vh] transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-xl font-bold eb-garamond-google text-gray-800 mb-2">
                            Custom Dress Coats
                          </h3>
                          <p className="text-gray-600">
                            Crafted to fit, tailored to impress
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg md:h-[50vh] h-[55vh] hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="overflow-hidden rounded-lg mb-4">
                            <img
                              src={tailored3}
                              alt="Perfect fit"
                              className="w-full hover:scale-105 md:h-[30vh] h-[35vh] transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-xl font-bold eb-garamond-google text-gray-800 mb-2">
                            Custom Overcoats
                          </h3>
                          <p className="text-gray-600">
                            Wrap yourself in bespoke elegance
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>
                {/* Handcrafted Custom Suits Section */}
                <section className="py-20 bg-stone-50">
                  <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-6xl font-semibold eb-garamond-google text-[#C29A5C] mb-12">
                      Handcrafted Custom Suits in PAK
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                      <div className="text-left flex flex-col">
                        <h3 className="text-2xl font-semibold eb-garamond-google text-gray-800 mb-4">
                          The Art of Bespoke Tailoring
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Handcrafted custom suits are an exceptional addition
                          to any wardrobe. Unlike factory-made garments, they
                          offer unparalleled quality and longevity. Investing in
                          a handcrafted suit ensures a timeless piece you'll
                          appreciate for years to come
                        </p>
                        <div className="flex justify-center md:justify-start">
                          <Button
                            className="bg-transparent text-[#C29A5C] text-lg sm:text-xl border border-[#C29A5C]
                            hover:bg-[#C29A5C] hover:text-white px-8 py-3 eb-garamond-google font-semibold hover:scale-105 transition-transform duration-200"
                             onClick={() => {
    if (!user) {
      alert("Please login first to access Contact page.");
      window.location.href = "/login"; // 👈 Direct login page bhej do
    } else {
      window.location.href = "/contact"; // 👈 Agar login hai to Contact khul jaye
    }}}
                          >
                            Schedule Consultation
                          </Button>
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-lg shadow-2xl">
                        <img
                          src={handcrafted}
                          alt="Bespoke tailoring"
                          className="w-full h-auto hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process Gallery */}
                <section className="py-20 bg-white">
                  <div className="max-w-6xl mx-auto px-4">
                    <h2 className="md:text-5xl text-4xl font-bold eb-garamond-google text-[#C29A5C] mb-12 text-center">
                      Custom Tailoring Photo Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {processImages.map((img, idx) => (
                        <div key={idx} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="py-20 bg-stone-50">
                  <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="md:text-5xl text-4xl font-bold eb-garamond-google text-[#C29A5C] mb-12">
                      Custom Tailoring Process
                    </h2>
                    <div className="space-y-8">
                      {processSteps.map((step, index) => (
                        <ProcessStep
                          key={index}
                          number={index + 1}
                          title={
                            <span className="eb-garamond-google font-bold">{step.title}</span>
                          }
                          description={step.description}
                          isActive={activeStep === index}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* What Clients Say */}
                        <section
                          className="py-20 text-white bg-cover bg-center bg-no-repeat"
                          style={{
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${testimonialBackground})`,
                          }}
                        >
                          <div className="max-w-4xl mx-auto px-4 text-center rounded-lg py-8">
                          <h2 className="text-4xl font-semibold eb-garamond-google mb-12">
                            What Clients Say
                          </h2>
                          <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                              key={index}
                              rating={testimonial.rating}
                              testimonial={testimonial.testimonial}
                              author={testimonial.author}
                            />
                            ))}
                          </div>
                          </div>
                        </section>
                        <section className="py-20 bg-white">
                          <div className="max-w-6xl mx-auto px-4">
                          <h2 className="md:text-5xl text-4xl font-bold eb-garamond-google text-[#C29A5C] text-center mb-12">
                            Our Location
                          </h2>
                          <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                            <div className="grid md:h-[49vh] h-[29vh] grid-cols-2 gap-4">
                              {[
                              tailored, tailored4,
                              tailored5, tailored2,
                              ].map((src, index) => (
                              <div
                                key={index}
                                className="overflow-hidden rounded-lg"
                              >
                                <img
                                src={src || "/placeholder.svg"}
                                alt={`Location image ${index + 1}`}
                                className="w-full h-auto hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                              ))}
                            </div>
                            </div>
                            <div className="space-y-6">
                            <h3 className="text-2xl font-semibold eb-garamond-google text-black">
                              Visit Our Lahore Outlet
                            </h3>
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 hover:text-gray-800 transition-colors duration-200">
                              <MapPin className="w-5 h-5 text-gray-600" />
                              <span className="text-gray-600">
                                132 GT. Road Lahore, PAK
                              </span>
                              </div>
                              <div className="flex items-center gap-3 hover:text-gray-800 transition-colors duration-200">
                              <Phone className="w-5 h-5 text-gray-600" />
                              <span className="text-gray-600">
                                (042) 123-4567
                              </span>
                              </div>
                              <div className="flex items-center gap-3 hover:text-gray-800 transition-colors duration-200">
                              <Mail className="w-5 h-5 text-gray-600" />
                              <span className="text-gray-600">
                                info@sewdivine.com
                              </span>
                              </div>
                              <div className="flex items-center gap-3 hover:text-gray-800 transition-colors duration-200">
                              <Clock className="w-5 h-5 text-gray-600" />
                              <span className="text-gray-600">
                                Mon-Sat: 9AM-7PM, Sun: 11AM-5PM
                              </span>
                              </div>
                            </div>
                            <div className="flex justify-center md:justify-start">
                              <Button
                              className="bg-transparent text-[#C29A5C] font-serif text-lg sm:text-xl border border-[#C29A5C]
                              hover:bg-[#C29A5C] hover:text-white px-8 py-3 hover:scale-105 transition-transform duration-200"
                               onClick={() => {
    if (!user) {
      alert("Please login first to access Contact page.");
      window.location.href = "/login"; // 👈 Direct login page bhej do
    } else {
      window.location.href = "/contact"; // 👈 Agar login hai to Contact khul jaye
    }}}
                              >
                              Book Appointment
                              </Button>
                            </div>
                            </div>
                          </div>
                          </div>
                        </section>
                        {/* Footer */}
                <footer className="bg-[#1A1A1A] text-white py-12">
                  <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-">
                      <div className="md:flex md:flex-col md:w-44 md:items-center flex flex-col items-center w-full gap-2 mb-4" >
                        <img src={whiteLogo} alt="NYC Suit" className="md:h-20 h-16 md:w-20 " />
                        <h3 className="text-4xl eb-garamond-google text-[#C29A5C] font-semibold mb-4">
                          Sew Divine Finest Suits
                        </h3>
                      </div>
                      <div>
                        <h4 className="text-2xl eb-garamond-google text-[#C29A5C] font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                          <li className="hover:text-[#C29A5C] text-white transition-colors duration-200 cursor-pointer">
                            About
                          </li>
                          <li className="hover:text-[#C29A5C] text-white transition-colors duration-200 cursor-pointer">
                            Services
                          </li>
                          <li className="hover:text-[#C29A5C] text-white transition-colors duration-200 cursor-pointer">
                            Gallery
                          </li>
                          <li className="hover:text-[#C29A5C] text-white transition-colors duration-200 cursor-pointer">
                            Process
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-2xl eb-garamond-google text-[#C29A5C] font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                          <li className="hover:text-[#C29A5C] text-white cursor-pointer">132 GT. Road Lahore, PAK</li>
                          <li className="hover:text-[#C29A5C] text-white cursor-pointer">Lahore, LHE 54000</li>
                          <li className="hover:text-[#C29A5C] text-white transition-colors duration-200 cursor-pointer">
                            (042) 123-4567
                          </li>
                          <li className="hover:text-[#C29A5C] text-white transition-colors duration-200 cursor-pointer">
                            info@sewdivine.com
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-2xl eb-garamond-google text-[#C29A5C] font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                          <div className="w-8 h-8 transition-colors duration-200 cursor-pointer" whileHover={{ scale: 1.1 }}><FontAwesomeIcon icon={faFacebookF} /></div>
                          <div className="w-8 h-8 transition-colors duration-200 cursor-pointer"><FontAwesomeIcon icon={faInstagram} /></div>
                          <div className="w-8 h-8 transition-colors duration-200 cursor-pointer"><FontAwesomeIcon icon={faXTwitter} /></div>
                          <div className="w-8 h-8 transition-colors duration-200 cursor-pointer"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                      <p>&copy; 2024 Sew Divine Suits. All rights reserved.</p>
                    </div>
                  </div>
                </footer>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/process" element={<Process />} />
          <Route path="/size" element={<Size />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
