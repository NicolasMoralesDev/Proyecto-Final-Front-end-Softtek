import React, { useState, useEffect } from 'react';
import { getAllSales } from '../../utils/fetchSales';

const AdminSalesList = () => {


    const [sales, setSales] = useState([]);

    useEffect(() => {
        // Lógica para obtener las ventas cuando el componente se monta
        const fetchData = async () => {
            try {
                const salesData = await getAllSales();
                setSales(salesData);
            } catch (error) {
                console.error('Error al obtener las ventas', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Listado de Ventas</h1>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark mx-2">
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>User Id</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Estado</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale) => (
                        <tr key={sale.id}>
                            <td>{sale.id}</td>
                            <td>{sale.date}</td>
                            <td>{sale.addres}</td>
                            <td>{sale.phone}</td>
                            <td>{sale.status}</td>                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

  export default AdminSalesList;