import React from "react";
import ButtonLogin from "./Children/ButtonLogin";
import "./form.css";
function FormLogic() {
  return (
    <form className="form">
      <input type="text" placeholder="NickName..." />
      <ButtonLogin />
    </form>
  );
}

export default FormLogic;
