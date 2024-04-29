import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
const RutaProtegida = () => {
    return(
        <>
        <h1> Estas en una ruta protegida</h1>
        <Header />
        {auth ._id? (
            <main className='container mx-auto mt-10'>
            <Outlet />
        </main>
        ): <Navigate to="/" />
            
        }
        
        
        <Footer />
        </>
    )
}


export default RutaProtegida