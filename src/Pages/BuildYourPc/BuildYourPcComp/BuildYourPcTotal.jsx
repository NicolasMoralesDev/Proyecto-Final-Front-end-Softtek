import React from "react";
import { CartContext } from "../../../context/CartContext";




const BuildYourPcTotal = ({ selectedProducts }) => {

    const total = selectedProducts.reduce((acc, product) => acc + product.price, 0);
    return (
        <>
            <div className="row">
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    Listado Seleccionado
                </button>
                <h3>Total: ${total.toFixed(2)}</h3>
            </div>
            <div style={{ minHeight: "120px" }}>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="card card-body" style={{ width: "300px" }}>
                    <ul>
                        {selectedProducts.map((product, index) => (
                        <li key={index}>{product.name} {product.price}</li>
                         ))}
                    </ul>
                    </div>
                    <a href="#" className="btn text-light btn-orange-custom mt-2 ">agregar al carrito</a>
                </div>
            </div>
        </>
    );
};

export default BuildYourPcTotal;