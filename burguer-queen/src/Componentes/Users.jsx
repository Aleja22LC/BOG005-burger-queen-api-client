// va la vista del mesero para hacer pedidos
import { useNavigate } from "react-router-dom";
import "../Style/Users.css";
import logotitulo from "../img/logotitulo.png";


export function Waiter() {
  const navigate = useNavigate();

  return (
    <section>
      <header>
        <img className="logot" id="logotitulo" src={logotitulo} alt='logo' />
      </header>
      <section className="navWaiter">

        <h1 className="waiterView">Agrega Productos al Pedido</h1>
        <button className="btn" onClick={() => navigate("/Home")}>Salir</button>
        <button className="btn" onClick={() => navigate("/Orders")}>Pedidos</button>
      </section>
    </section>
  );
};

