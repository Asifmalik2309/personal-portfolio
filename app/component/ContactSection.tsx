"use client"

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function ContactSection() {
  const vibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate([80, 40, 80])
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-white text-gray-900 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary mb-4">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Let’s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Connect
              </span>
            </h2>

            <p className="text-gray-600 max-w-md mb-10 leading-relaxed">
              Open to full-time roles, freelance work, and collaborations.
              Feel free to reach out directly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700">
                <Mail className="h-5 w-5 text-primary" />
                asifdxi1234@gmail.com
              </div>

              <div className="flex items-center gap-4 text-gray-700">
                <Phone className="h-5 w-5 text-primary" />
                +91 7905898426
              </div>

              <div className="flex items-center gap-4 text-gray-700">
                <MapPin className="h-5 w-5 text-primary" />
                Bengaluru, Karnataka, India
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-10">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/Asifmalik2309"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/mohd-asif-ali-837b9a35b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT – ACTION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-gray-50 border border-gray-200 rounded-2xl p-10"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Prefer a quick conversation?
            </h3>

            <p className="text-gray-600 mb-8">
              Click below to instantly email or call me.
            </p>

            <div className="space-y-4">
              {/* SEND EMAIL */}
              <motion.div
                whileTap={{ scale: 1.1 }}
                onTap={vibrate}
              >
                <Button asChild size="lg" className="w-full text-lg">
                  <a href="mailto:asifdxi1234@gmail.com">
                    <Mail className="mr-2 h-6 w-6" />
                    Send Email
                  </a>
                </Button>
              </motion.div>

              {/* CALL */}
              <motion.div
                whileTap={{ scale: 1.1 }}
                onTap={vibrate}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full text-lg"
                >
                  <a href="tel:+917905898426">
                    <Phone className="mr-2 h-6 w-6" />
                    Call Me
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 hover:opacity-100 transition pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
