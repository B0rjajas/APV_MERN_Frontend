import React, { useState } from "react";
import AdminNav from "./AdminNav";
import { useState } from "react";
import Alerta from "../components/Alerta";
import useAuth from "../../Hooks/useAuth";

const CambiarPassword = () => {

    const { guardarPassword } = useAuth()
  
    const [ alerta, setAlerta ] = useState([])
    const [ password, setPassword] = useState([
        pwd_actual = '',
        pwd_nuevo = ''
    ])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(console.log(Object.values(password).every( campo => campo === ''))){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        if( password.pwd_nuevo.lenght < 6 ){

            setAlerta({
                msg: 'El password  debe tener  minimo 6 caracteres',
                error: true

            })
            return
        }


        guardarPassword(password)
    
  };

  const {msg}  = alerta

  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10"> Cambiar Password</h2>
      <p className="text-xl mt-5 mb-5  text-center">
        Modifica tu{" "}
        <span className="text-indigo-600 font-bold">Password aqui</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          
          {msg && <Alerta alerta={alerta} /> }
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">Password Actual</label>
              <input
                type="password"
                className="border bg-gray-50  w-full p-2 mt-5  rounded-lg"
                placeholder="Escribe tu password actual"
                name="pwd_actual"
                onChange={e => setPassword( {
                    ...password,
                    [e.target.name] : e.target.value
                })}
            />
            </div>

            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">Password Nuevo</label>
              <input
                type="password"
                className="border bg-gray-50  w-full p-2 mt-5  rounded-lg"
                placeholder="Escribe tu password "
                name="pwd_nuevo"
            />
            </div>
            
            
            <input
              type="submit"
              value="Guardar Cambios"
              className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CambiarPassword;
