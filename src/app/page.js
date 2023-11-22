import GridServicios from '@/components/GridServicios'
import Hero from '@/components/Hero'
import HeroMobile from '@/components/HeroMobile'
import React from 'react'

export default function Home() {
  return (
    <main className="flex flex-col items-center mb-40">
      <Hero />

      <section className="flex flex-col items-center justify-center mt-36">
        <div className='flex flex-row items-end mb-5'>
          <h1 className='text-3xl font-bold text-zinc-900'>¿Quieres saber más?&nbsp;</h1>
          <p className='text-2xl font-normal text-zinc-800'>Descubre las ventajas del mundo digital para tu negocio.</p>
        </div>
        <GridServicios />
      </section>
    </main>
  )
}
