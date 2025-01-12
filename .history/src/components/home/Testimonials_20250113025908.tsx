'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "This tool helped me understand why my conversations weren&apos;t going as planned. Game changer!",
    author: "Sarah M.",
    title: "Early Access User"
  },
  {
    quote: "The insights are incredibly accurate. It&apos;s like having a relationship expert in your pocket.",
    author: "James K.",
    title: "Beta Tester"
  },
  {
    quote: "I wish I had this tool months ago. It would have saved me from so many misunderstandings.",
    author: "Alex R.",
    title: "Early Access User"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Early Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of users who are improving their relationships
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 