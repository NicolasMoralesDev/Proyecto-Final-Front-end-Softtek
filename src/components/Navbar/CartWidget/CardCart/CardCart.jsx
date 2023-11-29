import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const CardCart = () => {

    const [data, setdata] = useState([{}]);
    useEffect(() => {

          setdata(JSON.parse(localStorage.getItem("cart")));
    
     
    }, [])
    
    

    return (
        data ?
        <div>

       {
        data.map(i => (
            <div className="card mb-3 mt-3 dropdown-item" style={{ maxWidth: '700px' }} key={ Date.now()*i.id}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={i.imgUrl} className="img-fluid  h-100 w-100 rounded-start" alt={i.name}></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{i.name}</h5>
                            <p className="card-text">Precio $ {i.price }</p>
                        </div>
                    </div>
                </div>
            </div>
        )

        )} 
        </div>
: <></>
    ) 
}

export default CardCart