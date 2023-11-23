import React from 'react';

const Pricing = () => {
    return (
        <div className="container w-10/12 mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">Nuestros Planes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col justify-between bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">Basic</h3>
                    <ul className="list-disc ml-4">
                        <li>Landing page SPA</li>
                        <li>Hosting</li>
                        <li>4 diseños para escoger</li>
                        <li>Posicionamiento en Google</li>
                        <li>1 solicitud de cambio / soporte por mes</li>
                    </ul>
                    <p className="mt-4">Valor: Antes $160.000 cop/mes Ahora $80.000 cop/mes</p>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700">Contactar Ahora</button>
                </div>

                {/* Repite el patrón para los demás planes */}
                
                <div className="flex  flex-col justify-between bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">Standard</h3>
                    <ul className="list-disc ml-4">
                        <li>Sitio Web multi page</li>
                        <li>Sección de Noticias o blog</li>
                        <li>Soporte garantizado</li>
                        <li>Plan de Marketing y posicionamiento digital</li>
                        <li>Google Analytics</li>
                        <li>Todo lo del plan Basic</li>
                    </ul>
                    <p className="mt-4">Valor: Antes $280.000 cop/mes Ahora $160.000 cop/mes</p>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700">Contactar Ahora</button>
                </div>

                <div className="flex flex-col justify-between bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">Expert</h3>
                    <ul className="list-disc ml-4">
                        <li>Aplicación web</li>
                        <li>Gestión de Inventario, Citas, Noticias, Usuarios</li>
                        <li>Marketing digital avanzado</li>
                        <li>Todo lo del plan Standard</li>
                    </ul>
                    <p className="mt-4">Valor: Antes $980.000 cop/mes Ahora $480.000 cop/mes</p>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700">Contactar Ahora</button>
                </div>

                <div className="flex flex-col justify-between bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">Gold</h3>
                    <ul className="list-disc ml-4">
                        <li>Software hecho a la medida</li>
                        <li>Soporte garantizado</li>
                    </ul>
                    <p className="mt-4">Valor: Definido por contrato</p>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700">Contactar Ahora</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
