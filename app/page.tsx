import Hero from '@/components/Hero'
import Layanan from '@/components/Layanan'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <Layanan/>
    </main>
  )
}
