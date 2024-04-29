import { useState, useEffect, createContext } from "react";
import clienteAxios from "../../config/axios"; 

const AuthContext = createContext()
const AuthProvider = ( { children }) => {

    const [ auth, setAuth ] = useState({})
    const [ cargando, setCargando] = useEffect(true)
    useEffect( () =>{
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data }= await clienteAxios('/veterinarios/perfil',
                config)
                setAuth(data)
                
            } catch (error) {
                console.log(error.response.data.msg)
                setAuth({})
                
            }

            setCargando(false)
        }
        autenticarUsuario()
    }, [])

    const cerrarSesion = () => {
        localStorage.removeItem('token')
        setAuth({ })
    }

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion
            }}
            >
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthProvider
}


export default AuthContext