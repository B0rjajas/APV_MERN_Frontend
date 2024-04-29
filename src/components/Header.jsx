import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'


const Header = () => {

    const { cerrarSesion } = useAuth()
    return (
        <header className="py-10 bg-indigo-600">

        <div className='container mx-auto flex flex-col lg:flex-row justify items-center'>
            <h1 className="font-bold text-2xl text-indigo-200">
                Administrador de Pacientes de {''}
                <span className=' text-white front-black'>Veterinaria</span>
            </h1>

            <nav className='flex flex-col items-center lg:flex-gap4 mt-5 lg:mt-0'>
                <Link to="/admin" className='text-white text-sm uppercase font-bold'>Pacientes</Link>
                <Link to="/admin/perfil" className='text-white text-sm uppercase font-bold'><Perfil></Perfil></Link>

                <button type='button'
                    className='text-white text-sm uppercase'
                    onclick={cerrarSesion}
                    >Cerrar Sesion
                    
                </button>
            </nav>
        </div>

        </header>
    )
}

export default Header