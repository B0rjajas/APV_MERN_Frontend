import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Alerta from "../components/Alerta";
import {Link} from "react-router-dom";
import clienteAxios from '../config/axios'



const ConfirmarCuenta= () => {
    const [ cuentaConfirmada, setCuentaConfirmada] = useState(false)
    const [cargando, setCargando] = useState(true)
    const [alerta, setAlerta] = useState(true)
    const params = useParams()
    const { id } = params

    useEffect(()=>{
        const consfirmarCuenta = async () => {
            try {
                const url = `/veterinarios/confirmar/${id}`
                const { data } = await clienteAxios(url)
                setCuentaConfirmada(true)
            } catch (error) {
                setAlerta({
                    msg:error.response.data,
                    error: true
                })
                
            }
            setCargando(false)
        }
        consfirmarCuenta();
    }, [] )
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Confirmar tu Cuenta y Comineza a Administrar {""}
                    <span className="text-black">tus Pacientes</span>

                </h1>
            </div>
            <div className="mt-20 md_mt-5 shadow-lg px-5 py-5 py-10 rounded-xl bg-white">
                {!cargando && <Alerta
                    alerta={alerta}
                />}
                
                

                {cuentaConfirmada && (
                      <Link className="block text-center my-5 text-gray-500" to="/registrar">
                        Iniciar Sesión
                      </Link>

                )

                }
                </div>
        </>
    )
}


export default  ConfirmarCuenta