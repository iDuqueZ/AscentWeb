import Image from "next/image";


export default function Hero() {
    return (
        <div className="hidden lg:inline-flex w-full h-96 bg-zinc-900 mt-20 flex items-center p-8 relative mb-64">

            {/* Titulo y descripcion */}
            <div className="flex flex-col w-full justify-center items-center mt-96 pb-24 px-6 z-10">
                <Image src="/source/AscentLogo.png" alt="Logo" width={200} height={200} />
                <h1 className="text-7xl font-bold text-zinc-900">Ascent</h1>
                <p className="text-1xl mt-5 text-zinc-900">Soluciones agíles de software y marketing digital</p>
            </div>

            <div className="flex items-center justify-center absolute left-0 bottom-0 w-full down">
                <div>
                    <Image className="ml-12" src="/source/HeroDesktop.png" alt="Hero" width={1200} height={600} quality={100} />
                </div>
            </div>
        </div>
    )
}
