"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, X, ExternalLink, Mail, Phone, MapPin, Code, Smartphone, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const portfolioItems = [
  {
    id: 1,
    title: "TechCorp Solutions",
    description: "Enterprise software development and cloud migration services for Fortune 500 companies.",
    logo: "/placeholder.svg?height=80&width=80",
    website: "https://techcorp-solutions.com",
    category: "Enterprise",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "FinanceFlow",
    description: "Revolutionary fintech platform for seamless digital payments and financial management.",
    logo: "/placeholder.svg?height=80&width=80",
    website: "https://financeflow.app",
    category: "Fintech",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "HealthHub Pro",
    description: "Comprehensive healthcare management system connecting patients with healthcare providers.",
    logo: "/placeholder.svg?height=80&width=80",
    website: "https://healthhub-pro.com",
    category: "Healthcare",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "EduTech Academy",
    description: "Next-generation e-learning platform with AI-powered personalized learning experiences.",
    logo: "/placeholder.svg?height=80&width=80",
    website: "https://edutech-academy.com",
    category: "Education",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "RetailMax",
    description: "Omnichannel retail solution with advanced inventory management and customer analytics.",
    logo: "/placeholder.svg?height=80&width=80",
    website: "https://retailmax.com",
    category: "Retail",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "GreenEnergy Systems",
    description: "Smart energy management platform for renewable energy monitoring and optimization.",
    logo: "/placeholder.svg?height=80&width=80",
    website: "https://greenenergy-systems.com",
    category: "Energy",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies and modern frameworks.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for enterprise applications.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation consulting and implementation services.",
  },
]

export default function MedhavTechWebsite() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg"
        >
          Please wait, content is loading
        </motion.p>
      </div>
    </motion.div>
  )

  const Navigation = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-emerald-400">
            Medhav Tech
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 10 }}
                  className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )

  const HeroSection = () => (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Innovating the
          <span className="text-emerald-400 block">Digital Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          We craft exceptional digital experiences through cutting-edge technology and innovative solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-8 py-3 rounded-full"
          >
            View Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  )

  const ServicesSection = () => (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-black/50 border-gray-800 hover:border-emerald-400/50 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <service.icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  const PortfolioSection = () => (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing our successful partnerships and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-400/50 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black"
                      onClick={() => window.open(item.website, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Site
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={`${item.title} logo`}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-400/20">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-emerald-400 hover:text-emerald-300 p-0"
                    onClick={() => window.open(item.website, "_blank")}
                  >
                    View Project
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  const AboutSection = () => (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Medhav Tech</h2>
            <p className="text-gray-400 text-lg mb-6">
              We are a forward-thinking technology company dedicated to transforming businesses through innovative
              digital solutions. With years of experience and a passion for excellence, we deliver cutting-edge
              applications that drive growth and success.
            </p>
            <p className="text-gray-400 text-lg mb-8">
              Our team of expert developers, designers, and strategists work collaboratively to bring your vision to
              life, ensuring every project exceeds expectations and delivers measurable results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-12 w-12 text-emerald-400" />
                </div>
                <p className="text-white text-lg">Innovation in Every Line of Code</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )

  const ContactSection = () => (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">hello@medhavtech.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )

  const Footer = () => (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-emerald-400 font-bold text-xl mb-4 md:mb-0">Medhav Tech</div>
          <div className="text-gray-400 text-sm">© 2024 Medhav Tech. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <>
          {/* Custom cursor effect */}
          <motion.div
            className="fixed w-4 h-4 bg-emerald-400/50 rounded-full pointer-events-none z-50 mix-blend-difference"
            style={{
              left: mousePosition.x - 8,
              top: mousePosition.y - 8,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.3,
            }}
          />

          <Navigation />
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  )
}
