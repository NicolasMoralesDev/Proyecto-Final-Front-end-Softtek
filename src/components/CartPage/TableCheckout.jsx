import React from 'react'
import Table from 'react-bootstrap/Table';

const TableCheckout = () => {
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
                    <tr>
                        <td>
                            <img src="" alt="" />
                        </td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><button className="btn btn-danger">Quitar</button></td>
                    </tr>
                    <tr className='d-flex w-100 '>
                    
                        <td className='d-flex w-25'>
                            <a href="" className="btn btn-primary fw-bold">Pagar con Mercado Pago</a>
                        </td>
                        <td className='d-flex w-25'> <span>TOTAL = $ 2</span></td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TableCheckout