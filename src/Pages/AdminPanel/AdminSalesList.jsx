import { useState, useEffect, useContext } from 'react';
import { getAllSales } from '../../utils/fetchSales';
import { SalesTable } from '../../components/SalesTable/SalesTable';
import { PaginationContext } from '../../context/PaginationContext';

const AdminSalesList = () => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);

    const {page, setTotal} = useContext(PaginationContext);
    useEffect(() => {
        // Logica para obtener todas las ventas cuando el componente se monta
        const fetchData = async () => {
            try {
                const salesData = await getAllSales(page);
                setSales(salesData.data.sales);
                setTotal(salesData.data.total);
            } catch (error) {
                console.error('Error al obtener las ventas', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page]);

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