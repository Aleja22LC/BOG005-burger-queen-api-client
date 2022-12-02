// va la vista del mesero para hacer pedidos
import { useNavigate } from "react-router-dom";

export function Waiter() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="waiterView">Agrega Productos al Pedido</h1>
      <button className="btn" onClick={() => navigate("/Home")}>Salir</button>
      <button className="btn" onClick={() => navigate("/Orders")}>Pedidos</button>
    </div>
  );
};

