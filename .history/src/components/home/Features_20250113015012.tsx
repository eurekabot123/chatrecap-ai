'use client'

import { motion } from 'framer-motion'
import { ChartBarIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: ChartBarIcon,
    title: "Detailed Analysis",
    description: "Get comprehensive insights about message patterns, response times, and engagement levels."
  },
  {
    icon: ShieldCheckIcon,
    title: "Red Flags Detection",
    description: "Identify potential warning signs and behavioral patterns in your conversations."
  },
  {
    icon: LightBulbIcon,
    title: "Smart Recommendations",
    description: "Receive personalized advice on how to improve your communication."
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features to Understand Your Conversations
          </h2>
          <p className="text-xl text-gray-600">
            Advanced AI analysis tools at your fingertips
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-primary-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 