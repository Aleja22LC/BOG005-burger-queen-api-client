import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";
import logohamburguesa from "../img/logohamburguea.png";
import logotitulo from "../img/logotitulo.png";
import titulo from "../img/titulo.PNG";
import { loginUsers } from "../helpers/axios";
import swal from 'sweetalert';

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
      swal({
        title: 'Ingresar e-mail y contraseña, para entrar al sistema',
        icon: 'warning',
        timer: '2000'
      })

      return
    }
    loginUsers(inputs.username, inputs.pass)
      .then((res) => {
        //colocar que evalue 
        if (res.data.user.role === "mesero") {
          swal({
            title:'Ingreso exitoso!',
            icon: 'success',
            timer: '2000'
          })
          console.log('RESULTADO', res)
          navigate("/Users")
        }

      })
      .catch((res) => {
        // 
        if (res.response.data === 'Email and password are required') {
          swal({
            icon: 'warning',
            title: 'Error',
            text: 'Ingresa tu contraseña!',
            timer: '2000'            
          })
          // alert('Ingresa tu contraseña ')
        }
        else if (res.response.data === 'Cannot find user') {
          swal({
            icon: 'warning',
            title: 'Usuario no autorizado para ingresar en el sistema',
            text: 'Verifique su usuario y contraseña.',
            timer: '3500'            
          })
          // alert("Usuario no autorizado para ingresar en el sistema")
        }
        else if (res.response.data === 'Email format is invalid') {
          swal({
            icon: 'warning',
            title: 'E-mail no valido!',
            text: 'Ingresa un e-mail valido.',
            timer: '3500'            
          })
          // alert('Ingresa email valido')
        }
        else if (res.response.data === 'Incorrect password') {
          swal({
            icon: 'warning',
            title: 'Contraseña Inválida',
            text: 'Verifique su contraseña!',
            timer: '3000'            
          })
          // alert('Contraseña invalida')
        }
        else if (res.response.data === 'Password is too short') {
          swal({
            icon: 'warning',
            title: 'Contraseña Debil',
            text: 'Introduzca contraseña valida!',
            timer: '3000'            
          })
          // alert('Introduce contraseña valida')
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
          placeholder=" Contraseña"
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
