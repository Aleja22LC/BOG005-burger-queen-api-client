import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";
import logohamburguesa from "../img/logohamburguea.png";
import logotitulo from "../img/logotitulo.png";
import titulo from "../img/titulo.PNG";

export function FormLogin() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  // const baseUrl = "http://localhost:8080";

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onClick={handleSubmit} className="login">
      <img className="logot" id="logotitulo" src={logotitulo} alt='logo'/>
      <img className="logoh" id="hamburguer" src={logohamburguesa} alt='logo'/>
      <img className="titulo" id="titulo" src={titulo} alt='logo'/>
      <section className="form-container">
        <input
          type="email"
          placeholder="  E-mail"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          id= "inputemail"
        />

        <input
          type="password"
          placeholder="  Contraseña"
          name="pass"
          value={inputs.pass || ""}
          onChange={handleChange}
          id= "inputpass"
        />

        <section className="buttons-container">
          <button className="btn" id="btn-login" onClick={() => navigate("/Users")}>
            INGRESAR
          </button>
        </section>
      </section>
    </form>
  );
};


