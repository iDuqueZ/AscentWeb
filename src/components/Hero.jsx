import Image from "next/image";


export default function Hero() {
    return (
        <div className="Hero flex items-center">

            {/* Titulo y descripcion */}
            <div className="flex flex-row justify-center items-center">
                <Image src="/source/HeroLogoDark.svg" alt="Logo" width={600} height={300} />
                {/* <div class="banner">
                    <Image src="/source/HeroBanner.png" alt="Banner Tecnologías" width={600} height={700} quality={100}/>
                    <div class="fade"></div>
                </div> */}
                {/* <p className="text-2xl mt-6 text-center text-zinc-600">
                    En Ascent, creemos en soluciones a tu medida. <br/>Desde la elegancia de una Landing Page hasta la potencia de una Aplicación Web, nuestros planes de bajo costo son ideales para tu negocio. 
                </p> */}
            </div>
        </div>
    )
}
