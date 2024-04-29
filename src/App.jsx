import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout";
import Login from "./paginas/Login";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import Registrar from "./paginas/Registrar";
import NuevoPassword from "./paginas/NuevoPassword";
import { AutProvider } from "../context/AuthProvider"
import { PacientesProvider } from "../context/PacientesProvider";
import RutaProtegida from "./layout/RutaProtegida";
import AdministraPacientes from "./paginas/AdministrarPacientes";


import EditarPerfil from "./paginas/EditarPerfil";
import CambiarPassword from "./paginas/CambiarPassword";

function App() {
  return (
    <BrowserRouter>
    <AutProvider>
      <PacientesProvider >
      <Routes >
        <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password" element={<NuevoPassword/>} />

            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />



      </Route>

      <Route path="/admin" element={<RutaProtegida />}>
          <Route index element={<AdministraPacientes />} />
          <Route path ="perfil" element={<EditarPerfil />}/>
          <Route path ="cambiar-password" element={<CambiarPassword />}/>

       </Route>
      </Routes>
      </PacientesProvider>
      </AutProvider>
    </BrowserRouter>
  )
}

export default App
