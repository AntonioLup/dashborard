import React, { useEffect, useState } from "react";
import ButtonLogin from "./Children/ButtonLogin";
import "./form.css";
function FormLogic() {
  const [usuario, setUsuario] = useState();

  const arraylog = JSON.parse(localStorage.getItem("user"));
  console.log(arraylog);
  return (
    <form className="form">
      {(arraylog && "@" + arraylog["Nombre"]) || "Usuario"}

      <ButtonLogin
        usuario={usuario}
        arraylog={arraylog}
        setUsuario={setUsuario}
      />
    </form>
  );
}

export default FormLogic;
