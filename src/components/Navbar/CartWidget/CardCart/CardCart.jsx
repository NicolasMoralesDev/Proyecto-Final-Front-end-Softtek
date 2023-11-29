import { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { CartContext } from '../../../../context/CartContext';
import styles from "./cardCart.module.css"
const CardCart = () => {

    const [data, setdata] = useState([{}]);
    const { cart } = useContext(CartContext);

    useEffect(() => {

        setdata(JSON.parse(localStorage.getItem("cart")));


    }, [cart])



    return (
        data ?
            <div className={`container_items_dropdown ${styles.container}` } style={{ maxHeight: '200px' }}>

                {
                    data.map(i => (
                        <div className="card mb-3 mt-3 dropdown-item" style={{ maxWidth: '700px' }} key={i.name}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={i.imgUrl} className="img-fluid  h-100 w-100 rounded-start" alt={i.name}></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{i.name}</h5>
                                        <p className="card-text fw-bold">$ {i.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                    )}
            </div>
            : <h6 className='text-center'>Sin Productos</h6>
    )
}

export default CardCart