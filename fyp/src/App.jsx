import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ProcessStep from "@/components/ProcessStep";
import TestimonialCard from "@/components/TestimonialCard";
import ImageGallery from "@/components/ImageGallery";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import banner from "./assets/banner.jpg";
import bespoke from "./assets/bespoke.jpg";
import "./App.css";

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

  // Handle consultation booking
  const handleConsultationClick = () => {
    alert("Consultation booking functionality would be implemented here!");
  };

  // Handle appointment booking
  const handleAppointmentClick = () => {
    alert("Appointment booking functionality would be implemented here!");
  };

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
      author: "Michael R.",
    },
    {
      rating: 5,
      testimonial:
        "The best investment I've made in my wardrobe. Truly bespoke quality.",
      author: "David L.",
    },
    {
      rating: 5,
      testimonial:
        "Outstanding service from consultation to final fitting. Highly recommended.",
      author: "James K.",
    },
  ];

  // Process gallery images
  const processImages = Array.from({ length: 16 }, (_, i) => ({
    src: `https://images.unsplash.com/photo-${
      1556905055 + i
    }-8f358a7a47b2?w=200&h=200&fit=crop`,
    alt: `Process step ${i + 1}`,
  }));

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
                  className="relative top-[14vh] h-[90vh] min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner})`,
                    transform: `translateY(${scrollY * 0.1}px)`,
                  }}
                >
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white animate-fade-in px-2">
                      <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-4xl font-extrabold eb-garamond-google mb-4 -tracking-normal leading-tight">
                        Finest Custom
                        <br />
                        Suits in PAK
                      </h1>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div
                    className="
                      w-full
                      p-4
                      absolute
                      top-[75vh] left-0
                      md:absolute
                      md:left-1/2
                      md:top-[75vh]
                      md:transform md:-translate-x-1/2
                      md:w-[95%] md:max-w-5xl
                      bg-white
                      rounded-lg
                      shadow-xl
                      flex flex-col md:flex-row
                      items-center
                      justify-between
                      gap-4 md:gap-0
                      z-10
                    "
                  >
                    {/* QR Code */}
                    <div className="mb-4 md:mb-0 md:mr-8 flex-shrink-0 flex justify-center w-full md:w-auto">
                      <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-white p-2 rounded hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                        <div className="w-full h-full bg-black flex items-center justify-center text-white text-xs cursor-pointer">
                          QR CODE
                        </div>
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
                        tailored suits in PAK, LAHORE. Perfect Fit Guarantee on
                        custom clothing. Our Lahore City based{" "}
                        <span className="font-bold">bespoke tailors</span>{" "}
                        create full custom suits, nothing is “made-to-measure”.
                      </p>
                    </div>
                    {/* Button */}
                    <div className="mt-4 md:mt-0 flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
                      <button
                        className="btn-primary w-full sm:w-40 bg-transparent text-[#C29A5C] font-serif text-lg sm:text-xl border border-[#C29A5C]
                        hover:bg-[#C29A5C] hover:text-white duration-200 py-2 sm:py-3 rounded"
                      >
                        Contact Us
                      </button>
                    </div>
                    </div>
                    </section>
                    <section className="relative top-[47vh] mt-16 sm:mt-24 py-10 sm:py-16 md:py-20 bg-stone-50 lg:relative lg:top-20">
                      <div className="mt-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-8">
                        <div className="overflow-hidden rounded-lg mb-6 md:mb-0">
                          <img
                            src={bespoke}
                            alt="Man in custom suit"
                            className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh] object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="space-y-4 sm:space-y-6">
                          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C29A5C] eb-garamond-google">
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

                    {/* NYC Custom Suit Section */}
                <section className="py-28 bg-white">
                  <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-light text-gray-800 mb-8">
                      A New York Custom Suit Tailored in NYC
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-12">
                      Experience the pinnacle of sartorial excellence with our
                      handcrafted custom suits. Every stitch tells a story of
                      tradition, craftsmanship, and uncompromising quality that
                      has defined New York's finest tailoring for generations.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="overflow-hidden rounded-lg mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=250&h=300&fit=crop"
                              alt="Suit detail"
                              className="w-full h-auto hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-xl font-medium text-gray-800 mb-2">
                            Premium Fabrics
                          </h3>
                          <p className="text-gray-600">
                            Sourced from the world's finest mills
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="overflow-hidden rounded-lg mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=250&h=300&fit=crop"
                              alt="Tailoring process"
                              className="w-full h-auto hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-xl font-medium text-gray-800 mb-2">
                            Expert Craftsmanship
                          </h3>
                          <p className="text-gray-600">
                            Hand-tailored by master artisans
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="overflow-hidden rounded-lg mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=250&h=300&fit=crop"
                              alt="Perfect fit"
                              className="w-full h-auto hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-xl font-medium text-gray-800 mb-2">
                            Perfect Fit
                          </h3>
                          <p className="text-gray-600">
                            Tailored to your exact measurements
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>

                {/* Handcrafted Custom Suits Section */}
                <section className="py-20 bg-stone-50">
                  <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-light text-gray-800 mb-12">
                      Handcrafted Custom Suits in NYC
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                      <div className="text-left">
                        <h3 className="text-2xl font-light text-gray-800 mb-4">
                          The Art of Bespoke Tailoring
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Our bespoke process begins with understanding your
                          lifestyle, preferences, and vision. We create a
                          pattern unique to your body, ensuring every suit is a
                          perfect reflection of your personal style.
                        </p>
                        <Button
                          className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 hover:scale-105 transition-transform duration-200"
                          onClick={handleConsultationClick}
                        >
                          Schedule Consultation
                        </Button>
                      </div>
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=350&h=400&fit=crop"
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
                    <ImageGallery
                      images={processImages}
                      title="Our Tailoring Process"
                    />
                  </div>
                </section>

                {/* Custom Tailoring Process */}
                <section className="py-20 bg-stone-50">
                  <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-light text-gray-800 mb-12">
                      Custom Tailoring Process
                    </h2>
                    <div className="space-y-8">
                      {processSteps.map((step, index) => (
                        <ProcessStep
                          key={index}
                          number={index + 1}
                          title={step.title}
                          description={step.description}
                          isActive={activeStep === index}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* What Clients Say */}
                <section className="py-20 bg-gray-800 text-white">
                  <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-light mb-12">
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

                {/* Our Location */}
                <section className="py-20 bg-white">
                  <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-light text-gray-800 text-center mb-12">
                      Our Location
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=200&h=200&fit=crop",
                            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200&h=200&fit=crop",
                            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop",
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
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
                        <h3 className="text-2xl font-light text-gray-800">
                          Visit Our Manhattan Showroom
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 hover:text-gray-800 transition-colors duration-200">
                            <MapPin className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-600">
                              123 Madison Avenue, New York, NY 10016
                            </span>
                          </div>
                          <div className="flex items-center gap-3 hover:text-gray-800 transition-colors duration-200">
                            <Phone className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-600">
                              (212) 555-0123
                            </span>
                          </div>
                          <div className="flex items-center gap-3 hover:text-gray-800 transition-colors duration-200">
                            <Mail className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-600">
                              info@nycfinestuits.com
                            </span>
                          </div>
                          <div className="flex items-center gap-3 hover:text-gray-800 transition-colors duration-200">
                            <Clock className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-600">
                              Mon-Sat: 9AM-7PM, Sun: 11AM-5PM
                            </span>
                          </div>
                        </div>
                        <Button
                          className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 hover:scale-105 transition-transform duration-200"
                          onClick={handleAppointmentClick}
                        >
                          Book Appointment
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Special Offers */}
                <section className="py-20 bg-stone-50">
                  <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-light text-gray-800 mb-12">
                      Special Offers and Consultations
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                      {[
                        {
                          src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop",
                          title: "Classic Collection",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
                          title: "Business Formal",
                        },
                        {
                          src: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop",
                          title: "Summer Collection",
                        },
                      ].map((item, index) => (
                        <div key={index} className="group">
                          <div className="overflow-hidden rounded-lg mb-4">
                            <img
                              src={item.src || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-xl font-medium text-gray-800">
                            {item.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="bg-gray-800 hover:bg-gray-700 text-white px-12 py-4 text-lg hover:scale-105 transition-transform duration-200"
                      onClick={handleConsultationClick}
                    >
                      Schedule Your Consultation
                    </Button>
                  </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                  <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                      <div>
                        <h3 className="text-xl font-medium mb-4">
                          NYC Finest Suits
                        </h3>
                        <p className="text-gray-400">
                          Crafting excellence since 1985
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                          <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                            Custom Suits
                          </li>
                          <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                            Alterations
                          </li>
                          <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                            Formal Wear
                          </li>
                          <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                            Accessories
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                          <li>123 Madison Avenue</li>
                          <li>New York, NY 10016</li>
                          <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                            (212) 555-0123
                          </li>
                          <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                            info@nycfinestuits.com
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                          <div className="w-8 h-8 bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-200 cursor-pointer"></div>
                          <div className="w-8 h-8 bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-200 cursor-pointer"></div>
                          <div className="w-8 h-8 bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-200 cursor-pointer"></div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                      <p>&copy; 2024 NYC Finest Suits. All rights reserved.</p>
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
