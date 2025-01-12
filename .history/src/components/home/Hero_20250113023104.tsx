import { HeroActions, TrustSignals } from './HeroClient'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-[1200px]">
        <h1 className="font-bold tracking-tight">
          <div className="text-5xl md:text-6xl text-gray-900 mb-2">Decode the</div>
          <div className="text-5xl md:text-6xl text-primary-500 mb-2">Hidden Signals</div>
          <div className="text-5xl md:text-6xl text-gray-800">in Your Messages</div>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mt-8 mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
          Know exactly where your relationship stands. Understand their true feelings and intentions.
        </p>

        <HeroActions />
        
        <TrustSignals />
      </div>
    </div>
  )
} 