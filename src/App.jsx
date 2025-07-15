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
      description: "Locate hidden water leaks behind walls, under floors, and in buried pipes using advanced acoustic detection and thermal imaging. Non-invasive methods mean no damage to your property.",
      icon: Droplets,
      color: "text-blue-600"
    },
    {
      title: "Central Heating Leak Detection", 
      description: "Specialist central heating system diagnostics to identify leaks in pipes, radiators, and boiler connections. Minimise water damage and heating system downtime.",
      icon: Thermometer,
      color: "text-orange-600"
    },
    {
      title: "Underfloor Heating Leaks",
      description: "Expert detection of leaks in underfloor heating systems using thermal imaging and pressure testing. Preserve your flooring whilst locating the exact leak position.",
      icon: Zap,
      color: "text-yellow-600"
    },
    {
      title: "Underground Water Leaks",
      description: "Professional detection of leaks in underground water mains and supply pipes. Advanced acoustic equipment pinpoints leaks without excavation.",
      icon: Droplets,
      color: "text-blue-500"
    },
    {
      title: "Thermal Imaging Services",
      description: "State-of-the-art thermal imaging cameras detect temperature variations that indicate hidden leaks, moisture ingress, and insulation problems.",
      icon: Thermometer,
      color: "text-red-600"
    },
    {
      title: "Emergency Leak Detection",
      description: "24/7 emergency response for urgent leak detection. Rapid attendance to minimise water damage and property disruption.",
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
              <img src={logoImage} alt="Leak Detection Local" className="h-10 w-auto" />
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
              Advanced thermal imaging technology finds hidden leaks without damage to your property. 
              24/7 emergency callouts available.
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
                <img src={logoImage} alt="Leak Detection Local" className="h-8 w-auto" />
              </div>
              <p className="text-gray-400">
                Professional leak detection services across the UK using advanced thermal imaging technology.
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

