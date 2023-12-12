import { useUser } from '../../context/Hooks';
import { useState } from 'react';
import AdminAddProduct from './AdminAddProduct';
import AdminProductList from './AdminProductList';
import AdminSalesByUser from './AdminSalesByUser';
import AdminSalesList from './AdminSalesList';
import { Helmet } from 'react-helmet';

const AdminPanel = () => {

    const [userOrders] = useState(null);
    const { user, loading, isAdmin } = useUser();


    const [selectedView, setSelectedView] = useState(null);

    const handleAddProduct = () => {
        // Configura el estado para que renderice el componente de formulario de productos
        setSelectedView('agregarProducto');
    };

    const handleGetProducts = () => {
        // Configura el estado para que renderice el componente de lista de productos
        setSelectedView('listaProductos');
    };

    const handleGetUserSales = () => {
        // Configura el estado para que renderice el componente de ventas por usuario
        setSelectedView('ventasPorUsuario');
    };

    const handleGetSales = () => {
        // Configura el estado para que renderice el componente de lista de ventas
        setSelectedView('listaVentas');
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Panel de Administracion</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Ha ocurrido un error." />
            </Helmet>
            <div className='container'>

                <div className="row mx-auto ">
                    <div className="col-6 col-md-2 mt-5">
                        <div className="accordion accordion-flush" id="accordionFlush">
                            <div>
                                <h2>Admin</h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseProductos"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseProductos"
                                    >
                                        Productos
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseProductos"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlush"
                                >
                                    <div className="accordion-body">
                                        <button
                                            type="button"
                                            className="btn btn-light"
                                            onClick={handleAddProduct}
                                        >
                                            Agregar Producto
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-light"
                                            onClick={handleGetProducts}
                                        >
                                            Lista de Productos
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseVentas"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseVentas"
                                    >
                                        Ventas
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseVentas"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlush"
                                >
                                    <div className="accordion-body">
                                        <button
                                            type="button"
                                            className="btn btn-light"
                                            onClick={handleGetUserSales}
                                        >
                                            Ventas por Usuario
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-light"
                                            onClick={handleGetSales}
                                        >
                                            Lista de Ventas
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10   mt-5">
                        <h1 className='mb-2 text-center'>Panel de Administración</h1>
                        {isAdmin && selectedView === 'agregarProducto' && (
                            <AdminAddProduct />
                        )}
                        {isAdmin && selectedView === 'listaProductos' && (
                            <AdminProductList />
                        )}
                        {isAdmin && selectedView === 'ventasPorUsuario' && (
                            <AdminSalesByUser />
                        )}
                        {isAdmin && selectedView === 'listaVentas' && (
                            <AdminSalesList />
                        )}
                    </div>
                </div>
            </div></>
    );
};



export default AdminPanel;