'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Demo() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Transform your chat history into actionable insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">1</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Upload Your Chat</h3>
                  <p className="text-gray-600">Simply upload your chat screenshots or export files. We support all major messaging platforms.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">2</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                  <p className="text-gray-600">Our advanced AI analyzes communication patterns, sentiment, and engagement levels.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">3</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
                  <p className="text-gray-600">Receive detailed analysis and actionable recommendations to improve your relationships.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/demo-analysis.png"
              alt="Chat Analysis Demo"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 