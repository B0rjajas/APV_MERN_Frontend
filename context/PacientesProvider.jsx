import { createContext, useState, useEffect } from "react";
import clienteAxios from '../config/axios';

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        const obtenerPacientes = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                };

                const { data } = await clienteAxios('/pacientes', config);
                setPacientes(data);
            } catch (error) {
                console.error('Error al obtener pacientes:', error);
            }
        };
        obtenerPacientes();
    }, []);

    const guardarPaciente = async (paciente) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            const { data } = await clienteAxios.post('/pacientes', paciente, config);
            setPacientes([...pacientes, data]);
        } catch (error) {
            console.error('Error al guardar paciente:', error.response.data.msg);
        }
    };

    const setEdicion = (paciente) => {
        setPaciente(paciente);
    };

    return (
        <PacientesContext.Provider value={{ pacientes, paciente, guardarPaciente, setEdicion }}>
            {children}
        </PacientesContext.Provider>
    );
};

export default PacientesContext;
