import React from "react";

const Paciente = ( { paciente }) => {

    const { email, fecha, nombre, propietario, sintomas, _id } = paciente

    const FormatearFecha = (fecha) => {
        const NuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-ES', {dateStyle: 'long'}).format(NuevaFecha)
    }

    return(
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-gray-500 ">Nombre: {''}
                <span className="font-normal normal-case ">{nombre}</span>
            </p> 

            <p className="font-bold uppercase text-gray-500 ">Propietario: {''}
                <span className="font-normal normal-case ">{propietario}</span>
            </p>   

            <p className="font-bold uppercase text-gray-500 ">Email: {''}
                <span className="font-normal normal-case ">{email}</span>
            </p>

            <p className="font-bold uppercase text-gray-500 ">Fecha de Alta: {''}
                <span className="font-normal normal-case ">{FormatearFecha}</span>
            </p>

            <p className="font-bold uppercase text-gray-500 ">Sintomas: {''}
                <span className="font-normal normal-case ">{sintomas}</span>
            </p>


            <div className="flex justify-between my-5">
                <button 
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                >Editar
                </button>


                <button 
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                >Eliminar
                </button>

            </div>
            
             </div>
    )
}


export default Paciente