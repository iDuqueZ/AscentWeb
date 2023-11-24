import React from 'react'

export default function AboutUsHome() {
    return (
        <section className="flex flex-col items-center justify-center container w-3/4 mx-auto mt-0 mb-8 marginUp z-10">
            <div className='flex flex-col lg:flex-row items-center mb-12'>
                <h2 className="text-4xl font-bold text-gradient bg-gradient-to-t from-zinc-600 via-zinc-800 to-zinc-900">¿Qué es Ascent? &nbsp;</h2>
                <p className='text-2xl font-normal text-zinc-700'>La casa de software que impulsa tu éxito digital.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-4">Soluciones Avanzadas</h3>
                    <p className="text-gray-300">Proporcionamos soluciones avanzadas para empresas en crecimiento.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-4">Simples y Accesibles</h3>
                    <p className="text-gray-300">Nuestras soluciones son simples, accesibles y profesionales.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-4">Éxito Digital</h3>
                    <p className="text-gray-300">Elevamos tu presencia en Internet y posicionamos tu marca para destacar.</p>
                </div>
            </div>

            <p className="text-2xl font-normal text-zinc-700 text-center mt-8">
                Únete a nosotros y conquista nuevos horizontes en la era digital con Ascent.
            </p>
        </section>

    )
}
