
import React from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta";
import { useState } from "react";

const OlvidePassword = () => {
    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState('')

   

    const handleSubmit = async e => {
        e,preventdefault()

        if(email === ''){
            setAlerta({msg:'El email es obligatorio', error: true})
            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/olvide-password',{ email })
            setAlerta({msg: data.msg})
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            
        }
    }
    return (
        <>
        <div>
        <h1 className="text-indigo-600 font-black text-6xl "> 
        Recupera tu Acceso y no pierdas  <span className="text-black">
            Pacientes</span></h1>
            </div>

            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
      <form>
        <div className="my-5">
        <label 
            className="uppercase text-gray-600 block text-xl font-bold"
        >
           Email
        </label>
        <input type="text"
                placeholder="Escribe tu Email"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
            
            <input type="submit" 
                   value="Iniciar Sesion"
                   className="bg-indigo-600 w-full py-3 px-10 rounded-xl  text-white
                   uppercase font-bold mt-5 hover:cursor-pointer
                   hover:bg-indigo-800 md:w-auto "
                   />
            </div>
            </form>
            <nav className="mt-10 lg:flex lg:justify-between ">
        <Link className="block text-center my-5 text-gray-500" to="/registrar">¿Ya tienes una Cuenta? Registrate</Link>
        <Link className="block text-center my-5 text-gray-500" to="/olvide-password">Olvide mi password</Link>

      </nav>
        </div>

        </>
    )
}


export default OlvidePassword;