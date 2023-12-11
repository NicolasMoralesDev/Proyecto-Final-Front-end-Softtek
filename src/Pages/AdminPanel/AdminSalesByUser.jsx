import { useState, useEffect, useContext } from 'react';
import { getUsers } from '../../utils/fetchUser';
import { getUserSales } from '../../utils/fetchSales';
import { SalesTable } from '../../components/SalesTable/SalesTable';
import { PaginationContext } from '../../context/PaginationContext';

const AdminSalesByUser = () => {
    const [users, setUsers] = useState([]);
    const [userSales, setUserSales] = useState([]);
    const [userId, setUserId] = useState(null);

    const {page, setTotal} = useContext(PaginationContext);

    useEffect(() => {
        // Logica para obtener la lista de usuarios cuando el componente se monta
        const fetchData = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error('Error al obtener la lista de usuarios', error);
            }
        };

        fetchData();
    }, []);

    const handleUserSelectChange = (event) => {
        setUserId(event.target.value)
    };

    useEffect(() => {
        if (userId) {
            handleGetSalesByUser();
        }
    }
    , [userId, page]);


    const handleGetSalesByUser = async () => {
        
        if (userId) {
            try {
                const salesData = await getUserSales(userId, page);
                setUserSales(salesData.data.sales);
                setTotal(salesData.data.total);
            } catch (error) {
                console.error("Error al obtener las ventas del usuario", error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Ventas por Usuario</h2>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="userSelect" className="form-label">Selecciona un Usuario:</label>
                    <select id="userSelect" className="form-select mb-3" onChange={handleUserSelectChange} >
                        <option value={null}>Usuarios</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id} >
                                {`ID: ${user.id}  ${user.firstName} ${user.lastName}`}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {/* aca mostrar las ventas del usuario seleccionado */}
            <SalesTable userSales={userSales} />
        </div>
    );
};

export default AdminSalesByUser;