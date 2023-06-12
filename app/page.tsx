import Hero from '@/components/Hero'
import Layanan from '@/components/Layanan'
import Portofolio from '@/components/Portofolio'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <Layanan/>
      <Portofolio/>
    </main>
  )
}
