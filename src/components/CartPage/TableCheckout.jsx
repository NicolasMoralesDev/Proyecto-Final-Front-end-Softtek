import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const TableCheckout = () => {

    const [data, setdata] = useState([{}]);
    let total = 0;

    useEffect(() => {

        setdata(JSON.parse(localStorage.getItem("cart")));


    }, [])

    return (

        <div className='container mb-5 mt-5'>

            <h2 className="text-center">Checkout </h2>
            <Table striped responsive className='fw-bold'>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((i) => {
                            total = total + i.price
                            return (
                                   <tr key={Date.now()*i.id}>
                                    <td className='w-25'> 
                                        <img src={i.imgUrl} alt={i.name} height={"120px"} />
                                    </td>
                                    <td>{i.name}</td>
                                    <td>$ {i.price}</td>
                                    <td className='w-25'><button className="btn btn-danger">Quitar</button></td>
                                </tr>
                                

                            )
                        }

                        )
                    }

                    
                </tbody>
            </Table>
            <div className='d-flex w-100 gap-3 flex-wrap justify-content-end'>

                        <div className='d-flex w-25'>
                            <a href="" className="btn btn-primary fw-bold">Pagar con Mercado Pago</a>
                        </div>
                        <div className='d-flex w-25 fw-bold fs-4'> <span>TOTAL = $ {total}</span></div>

                    </div>
        </div>
    )
}

export default TableCheckout