import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";
import logohamburguesa from "../img/logohamburguea.png";
import logotitulo from "../img/logotitulo.png";
import titulo from "../img/titulo.PNG";
import { loginUsers } from "../helpers/axios";


export function FormLogin() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ username: "", pass: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  function handleClick() {
    if (inputs.username === "") {
      alert("Debes registrarte para ingresar al sistema")
      return
    }
    loginUsers(inputs.username, inputs.pass)
      .then((res) => {
        //colocar que evalue 
        if (res.data.user.role === "mesero") {
          console.log('RESULTADO', res)
          navigate("/Users")
        }

      })
      .catch((res) => {
        // 
        if (res.response.data === 'Email and password are required') {
          alert('Ingresa tu contraseña ')
        }
        else if (res.response.data === 'Cannot find user') {
          alert("Usuario no autorizado para ingresar en el sistema")
        }
        else if (res.response.data === 'Email format is invalid') {
          alert('Ingresa email valido')
        }
        else if (res.response.data === 'Incorrect password') {
          alert('Contraseña invalida')
        }
        else if (res.response.data === 'Password is too short') {
          alert('Introduce contraseña valida')
        }
      })
  }

  return (
    <form onClick={handleSubmit} className="login">
      <img className="logot" id="logotitulo" src={logotitulo} alt='logo' />
      <img className="logoh" id="hamburguer" src={logohamburguesa} alt='logo' />
      <img className="titulo" id="titulo" src={titulo} alt='logo' />
      <section className="form-container">
        <input
          type="email"
          placeholder="  E-mail"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          id="inputemail"
        />

        <input
          type="password"
          placeholder="Contraseña"
          name="pass"
          value={inputs.pass || ""}
          onChange={handleChange}
          id="inputpass"
        />

        <section className="buttons-container">
          <button className="btn" id="btn-login" onClick={handleClick}>
            INGRESAR
          </button>
        </section>
      </section>
    </form>
  );

}
