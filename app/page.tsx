import Hero from '@/components/Hero'
import Layanan from '@/components/Layanan'
import Portofolio from '@/components/Portofolio'
import Profil from '@/components/Profil'
import Tim from '@/components/Tim'
import Ulasan from '@/components/Ulasan'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <Layanan/>
      <Portofolio/>
      <Profil/>
      <Tim/>
      <Ulasan/>
    </main>
  )
}
