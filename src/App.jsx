import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, CheckCircle, Droplets, Thermometer, Zap, Clock, Shield, FileText, PhoneCall } from 'lucide-react'
import { QuoteModal } from './components/QuoteModal'
import logoImage from './assets/leak-detection-local-logo.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const services = [
    {
      title: "Water Leak Detection",
      description: "Our comprehensive water leak detection service utilises advanced acoustic listening devices, electronic leak detection equipment, and high-resolution thermal imaging cameras to locate hidden water leaks with surgical precision. Whether behind walls, under concrete slabs, or within buried pipe networks, our non-invasive methodology ensures zero damage to your property structure. We provide detailed leak location mapping, photographic evidence, and comprehensive written reports suitable for insurance claims. Our certified technicians can detect leaks as small as 0.1 litres per hour, preventing costly water damage and reducing utility bills.",
      icon: Droplets,
      color: "text-blue-600"
    },
    {
      title: "Central Heating Leak Detection", 
      description: "Specialising in complex central heating system diagnostics, we identify leaks in radiators, pipework, boiler connections, and circulation pumps using pressure testing and thermal imaging analysis. Our systematic approach includes system isolation testing, pressure decay analysis, and thermal profiling to pinpoint exact leak locations without dismantling your heating system. We work with all heating system types including conventional, combi, and system boilers, providing detailed repair recommendations and working closely with heating engineers to minimise system downtime and prevent further damage.",
      icon: Thermometer,
      color: "text-orange-600"
    },
    {
      title: "Underfloor Heating Leaks",
      description: "Underfloor heating leak detection requires specialist expertise and precision equipment. Using advanced thermal imaging technology and pressure testing protocols, we locate leaks in both water-based and electric underfloor heating systems without lifting floors or causing structural damage. Our process includes thermal mapping, pressure differential analysis, and moisture detection to identify the exact leak location. We provide detailed floor plans showing leak positions, enabling targeted repairs that preserve your flooring investment while restoring system efficiency.",
      icon: Zap,
      color: "text-yellow-600"
    },
    {
      title: "Underground Water Leaks",
      description: "Underground water leak detection demands sophisticated acoustic equipment and ground-penetrating technology. Our certified technicians use electronic ground microphones, correlating equipment, and acoustic loggers to trace underground pipe networks and identify leak positions without excavation. We detect leaks in mains water supplies, private water pipes, and underground distribution systems, providing accurate depth measurements and GPS coordinates for precise excavation planning. Our service includes utility mapping, leak flow rate estimation, and coordination with utility companies for efficient repairs.",
      icon: Droplets,
      color: "text-blue-500"
    },
    {
      title: "Thermal Imaging Services",
      description: "Our professional thermal imaging services extend beyond leak detection to comprehensive building diagnostics. Using calibrated FLIR thermal cameras with temperature accuracy to ±2°C, we identify moisture ingress, insulation defects, electrical hotspots, and structural anomalies. Our thermographic surveys include detailed thermal reports with temperature analysis, moisture mapping, and energy efficiency assessments. We provide thermal imaging for insurance investigations, building surveys, preventive maintenance programs, and energy audits, delivering professional reports with thermal images and technical recommendations.",
      icon: Thermometer,
      color: "text-red-600"
    },
    {
      title: "Emergency Leak Detection",
      description: "Our 24/7 emergency leak detection service provides rapid response for urgent water damage situations. With strategically located teams across the UK, we guarantee attendance within 2 hours for emergency callouts. Our emergency service includes immediate leak location, temporary isolation procedures, and damage limitation advice. We work directly with insurance companies, loss adjusters, and emergency restoration contractors to provide comprehensive documentation and expert witness services. Our emergency technicians carry portable thermal imaging equipment and acoustic detection devices for immediate leak identification and damage assessment.",
      icon: Clock,
      color: "text-red-500"
    }
  ]

  const trustPoints = [
    "Fully Insured & Licensed",
    "No Damage Detection Methods", 
    "24/7 Emergency Response",
    "Free Written Reports",
    "No Call-Out Charges",
    "Advanced Thermal Imaging"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src={logoImage} alt="Leak Detection Local" className="h-16 w-auto" />
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6">
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              </nav>
              <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                <Phone className="h-4 w-4" />
                <span>0148 367 7123</span>
              </div>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <div className="flex items-center space-x-2 py-2 text-blue-600 font-semibold">
              <Phone className="h-4 w-4" />
              <span>0148 367 7123</span>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Leak Detection Services
              <span className="block text-blue-600">Across the UK</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Using cutting-edge thermal imaging cameras and acoustic detection equipment, we locate hidden water leaks with pinpoint accuracy. Our non-invasive methods protect your property while delivering comprehensive leak detection services across residential, commercial, and industrial properties throughout the UK. With over a decade of experience and state-of-the-art technology, we provide same-day emergency response and detailed written reports for insurance claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Free Quote Today
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0148 367 7123
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Accreditations
            </h2>
            <p className="text-xl text-gray-300">
              Certified and accredited by leading industry bodies for your peace of mind
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="text-center">
              <div className="bg-yellow-400 rounded-lg p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center">
                <span className="text-black font-bold text-sm">Gas Safe</span>
              </div>
              <p className="text-white text-sm font-medium">Gas Safe Registered</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 rounded-lg p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center">
                <span className="text-white font-bold text-xs">EUSR</span>
              </div>
              <p className="text-white text-sm font-medium">Energy & Utility Skills Register</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-lg p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center">
                <span className="text-white font-bold text-xs">WIAPS</span>
              </div>
              <p className="text-white text-sm font-medium">Water Industry Approved</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-lg p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center">
                <span className="text-white font-bold text-xs">BDMA</span>
              </div>
              <p className="text-white text-sm font-medium">British Damage Management</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-lg p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center">
                <span className="text-white font-bold text-xs">CHAS</span>
              </div>
              <p className="text-white text-sm font-medium">CHAS Accredited</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 rounded-lg p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center">
                <span className="text-white font-bold text-xs">SWQR</span>
              </div>
              <p className="text-white text-sm font-medium">Streetworks Qualification</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our comprehensive accreditations demonstrate our commitment to professional standards, safety, and quality service delivery. 
              These certifications ensure we meet the highest industry standards for leak detection and water damage prevention services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Leak Detection Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced detection methods ensure accurate results without causing damage to your property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <IconComponent className={`h-8 w-8 ${service.color}`} />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Leak Detection Local?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Complete insurance coverage for your peace of mind</p>
            </div>
            <div className="text-center">
              <Thermometer className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art thermal imaging and acoustic detection</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">Round-the-clock emergency response service</p>
            </div>
            <div className="text-center">
              <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
              <p className="text-gray-600">Comprehensive written reports with findings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our leak detection expertise across various property types and challenging scenarios
            </p>
          </div>
          <div className="text-center py-12">
            <p className="text-lg text-gray-500 mb-4">Case studies coming soon...</p>
            <p className="text-gray-400">
              We're currently compiling detailed case studies showcasing our most challenging and successful leak detection projects. 
              Check back soon to see how we've helped property owners across the UK solve complex leak detection problems.
            </p>
          </div>
        </div>
      </section>
      {/* About the Owner */}
      <section id="about" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About the Owner
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Major Atwal</h3>
                <p className="text-blue-400 text-lg font-semibold">Founder & Managing Director</p>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="mb-6">
                  With over a decade of experience in the leak detection industry, Major Atwal founded Leak Detection Local 
                  with a vision to provide the most advanced, non-invasive leak detection services across the UK. His expertise 
                  in thermal imaging technology and acoustic detection methods has helped thousands of property owners identify 
                  and resolve water leaks without costly property damage.
                </p>
                <p className="mb-6">
                  Major's commitment to continuous professional development and investment in cutting-edge technology ensures 
                  that Leak Detection Local remains at the forefront of the industry. He personally oversees all major projects 
                  and maintains the highest standards of service delivery across the company's operations.
                </p>
                <p className="mb-8">
                  Under Major's leadership, the company has built strong relationships with insurance companies, loss adjusters, 
                  and property restoration specialists, establishing Leak Detection Local as a trusted partner in water damage 
                  prevention and property protection throughout the UK.
                </p>
                <div className="text-center">
                  <a 
                    href="https://www.linkedin.com/in/major-atwal-72277476" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span className="mr-2">Connect on LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300">
              Get in touch for professional leak detection services across the UK
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-gray-300">0148 367 7123</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400 text-xl">✉</span>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">info@leakdetectionlocal.co.uk</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400 text-xl">🕒</span>
                  <div>
                    <p className="font-semibold text-white">Emergency Service</p>
                    <p className="text-gray-300">24/7 Available</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400 text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-white">Service Area</p>
                    <p className="text-gray-300">Nationwide UK Coverage</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Quote</h3>
              <p className="text-gray-300 mb-4">
                Need a quick quote? Click the button below to fill out our detailed quote form, or call us directly for immediate assistance.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Emergency Leak Detection?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our expert team is available 24/7 for urgent leak detection services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-4 text-lg">
              <PhoneCall className="h-5 w-5 mr-2" />
              Call Emergency Line
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logoImage} alt="Leak Detection Local" className="h-12 w-auto" />
              </div>
              <p className="text-gray-400">
                Leading UK specialists in non-invasive leak detection using advanced thermal imaging and acoustic technology. Serving residential, commercial, and industrial clients nationwide with certified technicians, comprehensive insurance-approved reports, and 24/7 emergency response. Over a decade of experience in water damage prevention and property protection.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Water Leak Detection</li>
                <li>Central Heating Leaks</li>
                <li>Underfloor Heating</li>
                <li>Emergency Response</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>0148 367 7123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✉</span>
                  <span>info@leakdetectionlocal.co.uk</span>
                </div>
                <p>24/7 Emergency Service</p>
                <p>Free Quotes Available</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Leak Detection Local. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  )
}

export default App

