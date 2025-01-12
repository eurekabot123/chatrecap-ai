import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Demo from '@/components/home/Demo'
import Testimonials from '@/components/home/Testimonials'
import Upload from '@/components/home/Upload'

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <Upload />
    </main>
  )
}
