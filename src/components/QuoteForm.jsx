import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { insertQuoteRequest, SERVICE_TYPES } from '@/lib/supabase.js'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export function QuoteForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    description: '',
    urgency: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const { data, error } = await insertQuoteRequest({
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        property_address: formData.address,
        service_type: formData.serviceType,
        description: formData.description,
        urgency: formData.urgency
      })

      if (error) {
        throw error
      }

      setSubmitStatus('success')
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          serviceType: '',
          description: '',
          urgency: 'normal'
        })
        setSubmitStatus(null)
        if (onClose) onClose()
      }, 2000)

    } catch (error) {
      console.error('Error submitting quote request:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.phone && formData.address && formData.serviceType

  if (submitStatus === 'success') {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quote Request Submitted!</h3>
            <p className="text-gray-600">
              Thank you for your request. We'll contact you within 24 hours to discuss your leak detection needs.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Get Your Free Quote</CardTitle>
        <CardDescription>
          Fill out the form below and we'll contact you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Property Address *</Label>
            <Input
              id="address"
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Enter property address"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Required *</Label>
            <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={SERVICE_TYPES.WATER_LEAK}>Water Leak Detection</SelectItem>
                <SelectItem value={SERVICE_TYPES.CENTRAL_HEATING}>Central Heating Leak Detection</SelectItem>
                <SelectItem value={SERVICE_TYPES.UNDERFLOOR_HEATING}>Underfloor Heating Leaks</SelectItem>
                <SelectItem value={SERVICE_TYPES.UNDERGROUND_WATER}>Underground Water Leaks</SelectItem>
                <SelectItem value={SERVICE_TYPES.THERMAL_IMAGING}>Thermal Imaging Services</SelectItem>
                <SelectItem value={SERVICE_TYPES.EMERGENCY}>Emergency Leak Detection</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency">Urgency Level</Label>
            <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select urgency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal (within 48 hours)</SelectItem>
                <SelectItem value="urgent">Urgent (within 24 hours)</SelectItem>
                <SelectItem value="emergency">Emergency (immediate response)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe your leak detection needs..."
              rows={3}
            />
          </div>

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">Failed to submit request. Please try again.</span>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Quote Request'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

