"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react"
import * as Toast from "@radix-ui/react-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    purpose: "",
    message: "",
  })

  const [toastOpen, setToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState<"success" | "error">("success")

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await res.json()

      if (result.success) {
        setToastMessage("Message sent successfully!")
        setToastType("success")
        setFormData({ name: "", email: "", phone: "", company: "", purpose: "", message: "" })
      } else {
        setToastMessage(result.error || "Failed to send message. Please try again later.")
        setToastType("error")
      }
    } catch (error) {
      console.error(error)
      setToastMessage("An error occurred. Please try again.")
      setToastType("error")
    } finally {
      setToastOpen(true)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Bucuresti, sector 2, str Aurel Vlaicu nr 35, Corp B, et 4", "Romania"],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+4 021 300 04 55", "+4 021 300 04 77", "+4 021 300 04 79"],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["office@bluerock.ro"],
      gradient: "from-blue-500 to-indigo-500",
    },
  ]

  return (
    <section className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* subtle bg gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full border border-blue-500/30 mb-6">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Want More{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Information
                </span>{" "}
                On This Topic?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                We would be delighted to answer your questions. Contact us today to learn more about our services and how we can help you achieve your financial goals.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-300 text-sm leading-relaxed">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 shadow-md hover:shadow-lg transition-all duration-500">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Send us a{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Message</span>
                  </h3>
                  <p className="text-gray-300">Let's start a conversation about your goals</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name *</label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 h-12" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email *</label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 h-12" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 h-12" placeholder="+40 123 456 789" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company (Optional)</label>
                      <Input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 h-12" placeholder="Your company name" />
                    </div>
                  </div>

                  {/* Purpose & Message */}
                  <div className="space-y-2">
                    <label htmlFor="purpose" className="block text-sm font-medium text-gray-300">Purpose of Contact</label>
                    <Input id="purpose" name="purpose" type="text" value={formData.purpose} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 h-12" placeholder="Investment consultation, Portfolio management, etc." />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 resize-none" placeholder="Tell us more about your investment goals..." />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 h-14 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <Send className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Toast */}
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 rounded-lg p-4 font-medium shadow-lg text-white text-center z-50 ${
            toastType === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          <Toast.Description>{toastMessage}</Toast.Description>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    </section>
  )
}
