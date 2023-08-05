import Image from 'next/image'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
    </main>
  )
}
