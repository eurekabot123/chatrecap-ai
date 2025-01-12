import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Demo from '@/components/home/Demo'
import Upload from '@/components/home/Upload'
import Testimonials from '@/components/home/Testimonials'

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Upload />
      <Features />
      <Demo />
      <Testimonials />
    </main>
  )
}
