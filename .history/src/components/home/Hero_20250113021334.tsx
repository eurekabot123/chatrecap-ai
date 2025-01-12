import { HeroActions, TrustSignals } from './HeroClient'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          <div>Discover the <span className="text-primary-500">True Meaning</span></div>
          <div>Behind Every Message</div>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mt-8 mb-12">
          Upload your chat history and get AI-powered insights in seconds
        </p>

        <HeroActions />
      </div>

      <TrustSignals />
    </div>
  )
} 