import {  useState } from 'react';
import { useEffect } from 'react';
import styles from "./CardCart.module.css"
import { v4 as uuidv4 } from "uuid";
import { useCart } from '../../../../context/Hooks.js';


const CardCart = () => {
    const [data, setData] = useState(null);

    let total = 0;
    const { cart } = useCart();

    useEffect(() => {
        if (cart.length > 0) {
            setData(cart);
        } else {
            setData(null);
        }
    } , [cart])

    return (
        data ?
            <div className={`container_items_dropdown ${styles.container}` } style={{ maxHeight: '200px' }}>
                {
                    data.map(item => {

                        total += item.product.price;
                        return (
                        <div className="card mb-3 mt-3 dropdown-item" style={{ maxWidth: '700px' }} key={uuidv4()}>
                            <div className="row g-0 d-flex">
                                <div className="col col-md-4">
                                    <img src={item.product.imageUrl} alt={item.product.name} style={{maxWidth: "100px"}} / >
                                </div>
                                <div className="col col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.product.name}</h5>
                                        <h6>Cantidad: {item.amount}</h6>
                                        <p className="card-text fw-bold">Total: $ {item.product.price * item.amount}</p>
                                    </div>
                                </div>
                            </div>
                         {/*    <button className='btn btn-danger'>+</button> */}
                        </div>)
                }
                )}
                <h6 className='text-center'>Total = ${total}</h6>
            </div>
            : <h6 className='text-center'>Sin Productos</h6>
    )
}

export default CardCart