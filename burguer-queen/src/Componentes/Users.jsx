// va la vista del mesero para hacer pedidos
import { useNavigate } from "react-router-dom";
import "../Style/Users.css";
import logotitulo from "../img/logotitulo.png";
import line from "../img/line.png";
import { MenuBreackFast } from "./Menubreackfast";


export function Waiter() {
  
  const navigate = useNavigate();
  return (
    <main className="users">
      <header>
        <img className="logot" id="logotituloUser" src={logotitulo} alt='logo' />
      </header>
      <section className="navWaiter">
      <button  id="btn-exit" onClick={() => navigate("/Home")}>Salir</button>
      <img className="line" id="linered" src={line} alt='inea' />
        <section className="titleWaiter">
          <h1 id="waiterView">Agrega Productos al Pedido</h1>
        </section>
        <section className="btn-menu">
        <button id="btn-breakfast" onClick={() => navigate("/MenuBreackFast")}>Desayunos</button>
        <button id="btn-lunch"  onClick={() => alert('Aquí menú Almuerzo y Cena')}>Almuerzo y Cena</button>
          </section>    
        
        <button className="btn" id="btn-orders" onClick={() => navigate("/Orders")}>Pedidos</button>
      </section>
    </main>
  );
};

