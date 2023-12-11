import React, { useState, useEffect } from 'react';
import { getUsers } from '../../utils/fetchUser';
import { getUserSales } from '../../utils/fetchSales';
import { SalesTable } from '../../components/SalesTable/SalesTable';

const AdminSalesByUser = () => {
    const [users, setUsers] = useState([]);
    const [userSales, setUserSales] = useState([]);
    const [userId, setUserId] = useState(null);


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
/*
    useEffect(() => {
        // Esta funcion se ejecuta cada vez que selectedUser cambie

    }, [selectedUser]);

    const handleUserSelectChange = (event) => {
        // Manejar el cambio de selección de usuario
        const selectedUserId = event.target.value;

        // Obtener el objeto de usuario correspondiente al ID seleccionado
        const selectedUserObject = users.find(user => user.id == selectedUserId);

        setSelectedUser(selectedUserObject);

    };
    */
    const handleUserSelectChange = (event) => {
        setUserId(event.target.value)
    };

/*
    const handleGetSalesByUser = async () => {
        console.log("Valor de selectedUser antes de la llamada:", selectedUser);
        if (selectedUser) {
            try {
                console.log("Intentando obtener las ventas del usuario...", selectedUser);

                // Imprimir el objeto requestDTO antes de la llamada
                const requestDTO = {
                    idUser: selectedUser.id,
                };
                console.log("RequestDTO:", requestDTO);

                const salesData = await getUserSales(requestDTO, 0); // 1 es la pagina, ajustar
                setUserSales(salesData.sales);
                console.log("Ventas del usuario seleccionado:", salesData);
            } catch (error) {
                console.error("Error al obtener las ventas del usuario", error);
            }
        }
    };*/

    
    const handleGetSalesByUser = async () => {
        console.log("Valor de selectedUser antes de la llamada:", userId);
        if (userId) {
            try {
                console.log("Intentando obtener las ventas del usuario...", userId);

                const salesData = await getUserSales(userId, 0); // 1 es la pagina, ajustar
                setUserSales(salesData.sales);
                console.log("Ventas del usuario seleccionado:", salesData);
            } catch (error) {
                console.error("Error al obtener las ventas del usuario", error);
            }
        }
    }
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
                <div className="col-md-6">
                    <button className="btn btn-primary" onClick={handleGetSalesByUser}>Obtener Ventas</button>
                </div>
            </div>
            {/* aca mostrar las ventas del usuario seleccionado */}
            <SalesTable userSales={userSales} />
        </div>
    );
};

export default AdminSalesByUser;