//se pinta lista de menu del desayuno
import React from "react";
import { useNavigate } from "react-router-dom";


export function MenuBreackFast() {
    
const navigate = useNavigate();
    return (
        <div>
            <h1>Menú desayuno</h1>

            <section>
            <button id="btn-breakfast" onClick={() => navigate("/menuBreackFast")}>Desayunos</button>
                <article className="product2">Café con Leche      $ 7</article>
                <article className="product3">Sw Jamón y Queso    $ 10</article>
                <article className="product4">Jugo de Frutas Nat  $ 7</article>
            </section>
        </div>
    )

}
