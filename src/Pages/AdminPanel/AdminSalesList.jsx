import React, { useState, useEffect } from 'react';
import { getAllSales } from '../../utils/fetchSales';
import { SalesTable } from '../../components/SalesTable/SalesTable';

const AdminSalesList = () => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Lógica para obtener todas las ventas cuando el componente se monta
        const fetchData = async () => {
            try {
                const salesData = await getAllSales();
                setSales(salesData.sales);
                setLoading(false); 
            } catch (error) {
                console.error('Error al obtener las ventas', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Todas las Ventas</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <SalesTable userSales={sales} />
            )}
        </div>
    );
};
  export default AdminSalesList;