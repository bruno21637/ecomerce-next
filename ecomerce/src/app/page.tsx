import Image from 'next/image'
import Navbar from './components/NavBar'
import Hero from './components/hero'
import Produtos from './components/Produtos'
import Compre from './components/compre'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Produtos/>
      <Compre/>
      <Footer/>
    </div>

  )
}
