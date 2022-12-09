//se pinta lista de menu del desayuno
import React from "react";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { faMinusCircle, faPlusCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css"
import "../Style/Crud.css"



// export function Crud() {

// const navigate = useNavigate();
class Crud extends React.Component {
    state = {
        abierto: false
    }
    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto })
        // {this.state.abierto ?}
    }
    render (){
    return(
        <section>
            <article> <h1 id="waiterView">Agrega Productos al Pedido</h1></article>
            <article className="food">
            <button id="btn-breakfast" onClick={this.abrirModal}>Desayuno</button>
            <button id="btn-lunch" onClick={this.abrirModal}>Almuerzo y Cena</button>
            </article>
        <section>
            <Modal isOpen={this.state.abierto} className="Modal">
                <ModalHeader>
                    Menú Desayuno
                </ModalHeader>
                <ModalBody>
                    <article className="product2">Café con Leche      $ 7</article>
                    <article className="product3">Sw Jamón y Queso    $ 10</article>
                    <article className="product4">Jugo de Frutas Nat  $ 7</article>
                </ModalBody>
                <ModalFooter>
                    <button onClick={this.abrirModal}>Cerrar</button>
                </ModalFooter>
            </Modal>
            <FontAwesomeIcon icon={faMinusCircle} />
            <FontAwesomeIcon icon={faPlusCircle} />
            <FontAwesomeIcon icon={faPaperPlane} />
        </section>
        <section>
        <Modal isOpen={this.state.abierto} className="Modal">
                <ModalHeader>
                Item y Precio
                </ModalHeader>
                <ModalBody>
                    <article className="product2">Hamburguesa simple  $ 10</article>
                    <article className="product3">Hamburguesa doble   $ 15</article>
                    <article className="product4">Papas fritas	       $5</article>
                    <article className="product5"> Agua 500ml	$5</article>
                    <article className="product6">Agua 750ml   $7</article>
                    <article className="product7">Bebida/gaseosa 500ml  $7</article>
                    <article className="product8">Bebida/gaseosa 750ml	$10</article>
                </ModalBody>
                <ModalFooter>
                    <button onClick={this.abrirModal}>Cerrar</button>
                </ModalFooter>
            </Modal>
        </section>
            
         <h1>Menú desayuno</h1>

           <section>
        
               
             </section> 
        </section >
    )
}
}
    

export default Crud;