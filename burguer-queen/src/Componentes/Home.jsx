// se pinta la vista del landing o bienvenida
import { useNavigate } from "react-router-dom";

export function Start() {
  const navigate = useNavigate();

  return (
    <div className='landing'>
      <img src="" alt="" />
      <p>“La grandeza de nuestra empresa se basa en la calidad de trabajadores como usted y el esfuerzo que hacen cada día para brindar el mejor servicio”.</p>
      <h2> “La única forma de lograr lo imposible <br/> es creer que es posible”.</h2>
      <button className="btn" onClick={() => navigate("/Login")}>Bienvenidos</button>
    </div>
  );
};


