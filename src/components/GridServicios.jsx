import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";

export default function GridServicios() {
    return (
        < div className="grid grid-cols-2 gap-8 w-full pt-4" >
            <div className="flex flex-row items-center text-left bg-blue-200 shadow-md rounded-md p-4 hover:bg-blue-300 cursor-pointer">
                <div className="text-blue-600">
                    <FaLaptopCode className="text-6xl m-4" />
                </div>
                <div className="ml-4">
                    <h2 className="text-2xl font-bold text-blue-800">Software</h2>
                    <p className="text-sm text-blue-800">Desarrollo de aplicaciones web y móviles</p>
                </div>
            </div>

            <div className="flex flex-row items-center text-left bg-green-200 shadow-md rounded-md p-4 hover:bg-green-300 cursor-pointer">
                <div className="text-green-600">
                    <FaChartLine className="text-6xl m-4" />
                </div>
                <div className="ml-4">
                    <h2 className="text-2xl font-bold text-green-800">Marketing Digital</h2>
                    <p className="text-sm text-green-800">Estrategias de marketing digital</p>
                </div>
            </div>

            <div className="flex flex-row items-center text-left bg-purple-200 shadow-md rounded-md p-4 hover:bg-purple-300 cursor-pointer">
                <div className="text-purple-600">
                    <MdOutlineWeb className="text-6xl m-4" />
                </div>
                <div className="ml-4">
                    <h2 className="text-2xl font-bold text-purple-800">Sitios web</h2>
                    <p className="text-sm text-purple-800">Diseño de SPA y creación de sitios web a la medida</p>
                </div>
            </div>

            <div className="flex flex-row items-center text-left bg-yellow-200 shadow-md rounded-md p-4 hover:bg-yellow-300 cursor-pointer">
                <div className="text-yellow-600">
                    <FaRegLightbulb className="text-6xl m-4" />
                </div>
                <div className="ml-4">
                    <h2 className="text-2xl font-bold text-yellow-800">Consultoría</h2>
                    <p className="text-sm text-yellow-800">Asesoría en tecnología y marketing digital</p>
                </div>
            </div>


        </div >
    )
}
