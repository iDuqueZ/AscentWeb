import Image from "next/image";


export default function Hero() {
    return (
        <div className="Hero w-full h-96 flex items-center p-8 mb-44">

            {/* Titulo y descripcion */}
            <div className="flex flex-col w-10/12 justify-center items-center mt-72 mx-auto pb-24 px-6">
                <Image src="/source/HeroLogoDark.svg" alt="Logo" width={600} height={300} />
                <p className="text-2xl mt-6 text-center text-zinc-600">
                    En Ascent, creemos en soluciones a tu medida. <br/>Desde la elegancia de una Landing Page hasta la potencia de una Aplicación Web, nuestros planes de bajo costo son ideales para tu negocio. 
                </p>
            </div>
        </div>
    )
}
