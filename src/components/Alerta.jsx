import React from "react";

const Alerta = ({ mensaje }) => {
    return (
      <div
        className={`${
          mensaje.error ? 'bg-red-600' : 'bg-indigo-600'
        } text-white p-3 rounded-md`}
      >
        {mensaje.msg}
      </div>
    );
  };
    export default Alerta;

    