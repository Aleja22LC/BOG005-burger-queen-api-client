// ira el estado de pedidos
import { useNavigate } from "react-router-dom";

export function Orders() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="ordersView">Estado de  Pedidos</h1>
      <button className="btn" onClick={() => navigate("/Users")}>Volver</button>
      
    </div>
  );
};