import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Demo from '@/components/home/Demo'
import Upload from '@/components/home/Upload'
import Testimonials from '@/components/home/Testimonials'

export default async function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Upload />
        <Features />
        <Demo />
        <Testimonials />
      </div>
    </main>
  )
}
