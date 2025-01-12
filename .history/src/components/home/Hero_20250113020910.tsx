import { HeroActions, TrustSignals } from './HeroClient'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Discover the 
          <span className="text-primary-500"> True Meaning </span>
          Behind Every Message
        </h1>
        
        <p className="text-xl text-gray-600 mt-6 mb-8">
          Upload your chat history and get AI-powered insights in seconds
        </p>

        <HeroActions />
      </div>

      <TrustSignals />
    </div>
  )
} 