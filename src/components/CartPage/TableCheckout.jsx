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
                                <>   <tr>
                                    <td>
                                        <img src={i.imgUrl} alt={i.name} height={"120px"} />
                                    </td>
                                    <td>{i.name}</td>
                                    <td>$ {i.price}{ }</td>
                                    <td><button className="btn btn-danger">Quitar</button></td>
                                </tr>
                                </>

                            )
                        }

                        )
                    }

                    <tr className='d-flex w-100 '>

                        <td className='d-flex w-25'>
                            <a href="" className="btn btn-primary fw-bold">Pagar con Mercado Pago</a>
                        </td>
                        <td className='d-flex w-25'> <span>TOTAL = $ {total}</span></td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TableCheckout