// se pinta la vista del landing o bienvenida
import { useNavigate } from "react-router-dom";
import "../Style/Home.css";
import logohamburguesa from "../img/logohamburguea.png"
import logotitulo from "../img/logotitulo.png";
import titulo from "../img/titulo.PNG";

export function Start() {
  const navigate = useNavigate();

  return (
    <div className='landing'>
      <img src={logotitulo} id="logo-titulo" alt="logo"/>
      <img src={titulo} id="tituloHome" alt="logo"/>
      <img src={logohamburguesa} id="logo-hamburguesa" alt="logo" />
      <section id="section-home">
      <p id="text-home">“La grandeza de nuestra empresa se basa en la calidad de trabajadores como usted y el esfuerzo que hacen cada día para brindar el mejor servicio”.</p>
      <h2 id="text-home-mot"> “La única forma de lograr lo imposible, <br/>es creer que es posible”.</h2>
      </section>
      
      <button className="btn" id="btn-home" onClick={() => navigate("/Login")}>BIENVENIDOS</button>
    </div>
  );
};


