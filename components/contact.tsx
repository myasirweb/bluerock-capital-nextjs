"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import * as Toast from "@radix-ui/react-toast"


export default function ContactPage() {
 const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    purposeOfContact: "",
  })

  const [toastOpen, setToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState<"success" | "error">("success")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phoneNumber,
      purpose: formData.purposeOfContact,
      message: formData.purposeOfContact,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.success) {
        setToastMessage("Thank you! Your message has been sent.")
        setToastType("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          purposeOfContact: "",
        })
      } else {
        setToastMessage(`Error: ${data.error || "Failed to send message."}`)
        setToastType("error")
      }
    } catch (err) {
      console.error(err)
      setToastMessage("Something went wrong while sending your message.")
      setToastType("error")
    } finally {
      setToastOpen(true)
    }
  }

  return (
    <div className="bg-[#050A19] text-gray-300 min-h-screen font-sans overflow-hidden relative">
      {/* Header */}
      <header
        className="relative py-20 text-center px-4 rounded-b-3xl shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/counter.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 rounded-b-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
           Contact
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
           Get in touch with our financial experts
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Office Locations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Headquarters */}
          <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-400" />
                Headquarters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-slate-700/50 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8359!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDYnMDkuMCJF!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-blue-200">
                      Bucharest, district 2, Aurel Vlaicu street, nr 35, Corp B, Postal Code 020091
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:office@bluerock.ro" className="text-blue-400 hover:text-blue-300 transition-colors">
                      office@bluerock.ro
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:+40213000479" className="text-blue-400 hover:text-blue-300 transition-colors block">
                        +4 021 300 04 79
                      </a>
                      <a href="tel:+40213000455" className="text-blue-400 hover:text-blue-300 transition-colors block">
                        +4 021 300 04 55 / +4 021 300 04 77
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brasov Agency */}
          <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-400" />
                Brasov Agency
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-slate-700/50 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8359!2d25.6012!3d45.6579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM5JzI4LjQiTiAyNcKwMzYnMDQuMyJF!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-blue-200">Nicolae Iorga street, district 2, 1st floor, 500057</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:office@bluerock.ro" className="text-blue-400 hover:text-blue-300 transition-colors">
                      office@bluerock.ro
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:+40213000479" className="text-blue-400 hover:text-blue-300 transition-colors block">
                        +4 021 300 04 79
                      </a>
                      <a href="tel:+40311051721" className="text-blue-400 hover:text-blue-300 transition-colors block">
                        +4 031 105 17 21 / +4 031 105 17 22
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl text-white mb-4">
                Ask Us Anything/Petitions. Anytime.
              </CardTitle>
              <p className="text-blue-200 text-lg">We will get in touch as soon as possible</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-white font-medium">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-white font-medium">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="text-white font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="purposeOfContact" className="text-white font-medium">
                    Purpose Of Contact
                  </label>
                  <Textarea
                    id="purposeOfContact"
                    name="purposeOfContact"
                    value={formData.purposeOfContact}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 min-h-[120px]"
                    placeholder="Please describe the purpose of your contact..."
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>




      {/* Toast */}
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          className={`fixed bottom-5 right-5 w-96 rounded-lg p-4 font-medium shadow-lg text-white ${
            toastType === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          <Toast.Description>{toastMessage}</Toast.Description>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    </div>
  )
}
