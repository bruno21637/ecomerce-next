import Image from 'next/image'
import Navbar from './components/NavBar'
import Hero from './components/hero'

export default function Home() {
  return (
    <div className='bg-black h-screen'>
      <Navbar />
      <Hero />
    </div>

  )
}
