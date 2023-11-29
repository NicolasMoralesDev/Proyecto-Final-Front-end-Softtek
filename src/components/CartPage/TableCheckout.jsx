import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Mp from "../../assets/mercado-pago.svg";

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
                                <tr key={Date.now() * i.id}>
                                    <td className='w-25'>
                                        <img src={i.imgUrl} alt={i.name} height={"120px"} />
                                    </td>
                                    <td>{i.name}</td>
                                    <td>$ {i.price}</td>
                                    <td >
                                        <button className='btn btn-danger'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                    </svg></button></td>
                                </tr>


                            )
                        }

                        )
                    }


                </tbody>
            </Table>
            <div className='d-flex w-100 gap-3  justify-content-end align-items-center'>

                <div className='d-flex w-50'>
                    <a href="" className="btn btn-primary fw-bold ">Pagar  Mercado Pago <img src={Mp} alt="mercado pago icon" /></a>
                </div>
                <div className='d-flex w-50 fw-bold fs-4'> <span>TOTAL = $ {total}</span></div>

            </div>
        </div>
    )
}

export default TableCheckout