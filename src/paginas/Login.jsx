import React from "react";
import { Link } from "react-router-dom";
import { useState, useNavigate } from "react";
import Alerta from "../components/Alerta";
import useAuth from "../../Hooks/useAuth";
import clienteAxios from "../../config/axios"; // Añadido el import faltante y corregido el nombre de clienteAxios

const Login = () => {

  const [email, setEmail] = useState(''); // Corregido el nombre de setEmail
  const [password, setPassword] = useState(''); // Corregido el nombre de setPassword
  const [alerta, setAlerta] = useState({}); // Corregido el nombre de setAlerta

  const { setAuth } = useAuth()

  const navigate = useNavigate()// ruta para redireccionar al USuario

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes('')) { // Corregido el paréntesis faltante
      setAlerta({
        msg: 'Todos los campos son obligatorios', // Corregido la coma faltante
        error: true
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post('/veterinarios/login', { email, password }); // Corregido la coma faltante
      localStorage.setItem('token', data.token); // Corregido la coma faltante y añadido el punto y coma al final
      setAuth(data)
      navigate('/admin')//ruta privada

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });
      
    }
  };

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl ">
          Inicia Sesión y Administra tus <span className="text-black">Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {alerta.msg && <Alerta alerta={alerta} />}
        
        <form onSubmit={handleSubmit}> {/* Corregido onSubmit */}
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
            <input
              type="email"
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)} // Corregido onChange
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">Password</label>
            <input
              type="password"
              placeholder="Tu password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={e => setPassword(e.target.value)} // Corregido onChange
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 w-full py-3 px-10 rounded-xl  text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between ">
          <Link className="block text-center my-5 text-gray-500" to="/registrar">¿No tienes cuenta? Regístrate</Link> {/* Corregido "Registrate" a "Regístrate" */}
          <Link className="block text-center my-5 text-gray-500" to="/olvide-password">Olvidé mi password</Link> {/* Corregido "Olvide" a "Olvidé" */}
        </nav>
      </div>
    </>
  );
};

export default Login;
