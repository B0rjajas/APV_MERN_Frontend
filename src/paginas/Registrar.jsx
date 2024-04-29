import  Alerta  from "../components/Alerta";
import { useState } from "react";
import React from "react";
import {Link} from "react-router-dom"
import clienteAxios from "../config/axios"



const Registrar = () => {
    const [ nombre, setNombre] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ reppassword, setReppassword] = useState('')


    const [ alerta, setAlerta] = useState({});

    const handlSubmit = async e =>{
        e.preventDefault()

        if([nombre,email, password, reppassword, password].includes('')){
            setAlerta({msg:"Campos vacios", error: true})
            return
        }

        if(password !== reppassword){
            setAlerta({msg:"PassWord Vacios", error: true})            
            return
        }

        if(password.length < 6 ){
            setAlerta({msg:"Password muy largos", error: true})
            return
        }

        setAlerta({})

        //Crear el usaario en la API

        try {
            await clienteAxios.post('/veterinario', { nombre, email, password} )
            setAlerta({
                msg: 'Creado Correctamente, revisa tu email ',
                error: false
            })
        } catch (error) {
            setAlerta({
                msg: error.reponse.data.mensaje,
                error: true
            })
            
        }


    } 

    return (
        <>
    <div>
        <h1 className="text-indigo-600 font-black text-6xl "> 
        Crea tu cuenta  <span className="text-black">
            Pacientes</span></h1>
    </div>

    <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        
        <Alerta 
            mensaje={alerta}
        />
      
      <form onSubmit={handlSubmit}>
        <div className="my-5">
        <label 
            className="uppercase text-gray-600 block text-xl font-bold"
        >
            Nombre
        </label>
        <input type="text"
                placeholder="Tu nombre"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={nombre}
                onChange={ e => setNombre(e.target.value)} />
            </div>

            <div className="my-5">
        <label 
            className="uppercase text-gray-600 block text-xl font-bold"
        >
            Email
        </label>
        <input type="email"
                placeholder="Tu Email"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={email}
                onChange={ e => setEmail(e.target.value)} />
            </div>

            <div className="my-5">
        <label 
            className="uppercase text-gray-600 block text-xl font-bold"
        >
            Password
        </label>
        <input type="password"
                placeholder="Tu password"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={password}
                onChange={ e => setPassword(e.target.value)} />
            </div>

            <div className="my-5">
        <label 
            className="uppercase text-gray-600 block text-xl font-bold"
        >
            Repite tu Password
        </label>
        <input type="password"
                placeholder="Repite Tu password"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={reppassword}
                onChange={ e => setReppassword(e.target.value)} />
            </div>

            <input type="submit" 
                   value="Iniciar Sesion"
                   className="bg-indigo-600 w-full py-3 px-10 rounded-xl  text-white
                   uppercase font-bold mt-5 hover:cursor-pointer
                   hover:bg-indigo-800 md:w-auto "
                   />
      </form>
      <nav className="mt-10 lg:flex lg:justify-between ">
        <Link className="block text-center my-5 text-gray-500" to="/registrar">¿Ya tienes una Cuenta? Registrate</Link>
        <Link className="block text-center my-5 text-gray-500" to="/olvide-password">Olvide mi password</Link>

      </nav>
      </div>
        </>
    )
}

export default Registrar;