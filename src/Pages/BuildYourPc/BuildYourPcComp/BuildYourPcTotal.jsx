import { useCart } from "../../../context/Hooks";

const BuildYourPcTotal = () => {

    const { cart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.amount * item.product.price, 0);
    return (
        <>
            <div className="row">
                <button className="btn btn-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    Listado Seleccionado
                </button>
                <h3 className="mt-3 text-center">Total: ${total.toFixed(2)}</h3>
            </div>
            <div style={{ minHeight: "120px" }}>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="card card-body" style={{ width: "300px" }}>
                    <ul>
                        {cart.map((item, index) => (
                        <li key={index}>{item.product.name}, ${item.product.price}, x{item.amount}</li>
                         ))}
                    </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuildYourPcTotal;