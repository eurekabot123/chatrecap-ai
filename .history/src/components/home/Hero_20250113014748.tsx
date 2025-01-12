'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-4">
      {/* 主标题区域 */}
      <div className="text-center space-y-6 max-w-3xl">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI解读每一条消息背后的
          <span className="text-primary-500">真实含义</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          上传聊天记录，3秒洞察对方真实想法
        </motion.p>

        {/* 上传按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors">
            立即分析
          </button>
          <p className="mt-2 text-sm text-gray-500">完全免费，无需注册</p>
        </motion.div>
      </div>

      {/* 信任标识 */}
      <motion.div 
        className="absolute bottom-10 text-center space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-2xl font-bold text-gray-700">10,000+</p>
        <p className="text-gray-500">已分析的对话</p>
      </motion.div>
    </div>
  )
} 