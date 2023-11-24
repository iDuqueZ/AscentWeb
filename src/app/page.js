import AboutUsHome from '@/components/AboutUsHome'
import GridServicios from '@/components/GridServicios'
import Hero from '@/components/Hero'
import Pricing from '@/components/Prices'
import React from 'react'

export default function Home() {
  return (
    <main className="flex flex-col items-center mb-40">
      <div className='flex items-center w-4/5 justify-between h-screen z-10'>
        <Hero />
        <section className="flex flex-col w-1/2 items-center justify-center">
          <div className='flex flex-col items-end mb-5'>
            <h1 className='text-3xl font-bold text-zinc-900'>Expertos en desarrollo digital&nbsp;</h1>
            <p className='text-2xl font-normal text-zinc-800'>Descubre las ventajas del mundo digital para tu negocio.</p>
          </div>
          <GridServicios />
        </section>
      </div>
      <AboutUsHome />
      <section className="flex flex-col items-center justify-center">
        <Pricing />
      </section>
    </main>
  )
}
