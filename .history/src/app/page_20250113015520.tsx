import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Upload from '@/components/home/Upload'

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Upload />
    </main>
  )
}
