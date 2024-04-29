import axios from "axios";

const clienteAxios = axios.create({

    baseUrl:`${import.meta.VITE_BACKEND_URl}/api`
})

export default axios;