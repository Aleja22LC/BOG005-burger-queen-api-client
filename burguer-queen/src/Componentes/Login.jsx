import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";


export function FormLogin() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

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
      <section className="form-container">
        <input
          type="email"
          placeholder="E-mail"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Contraseña"
          name="pass"
          value={inputs.pass || ""}
          onChange={handleChange}
        />

        <section className="buttons-container">
          <button className="btn" onClick={() => navigate("/Users")}>
            INGRESAR
          </button>
        </section>
      </section>
    </form>
  );
};


