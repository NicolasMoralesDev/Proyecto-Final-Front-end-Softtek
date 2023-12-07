import { useUser } from '../../../context/Hooks';
import { useState } from 'react';
import AdminProductForm from './AdminAddProduct';
import AdminProductList from './AdminProductList';

const AdminPanel = () => {

    const [userOrders] = useState(null);
    const { user, loading, isAdmin} = useUser();
    

    const [selectedView, setSelectedView] = useState(null);

    const handleAddProduct = () => {
      // Configura el estado para que renderice el componente de formulario de productos
      setSelectedView('agregarProducto');
      
    };
  
    const handleGetProducts = () => {
      // Configura el estado para que renderice el componente de lista de productos
      setSelectedView('listaProductos');
    };

    return (
        <div className="">
        <div className="row mx-auto ">
          <div className="col-6 col-md-2">
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
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Productos
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
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
            </div>
          </div>
          <div className="col-12 col-md-10 ">
            <h1 className='mb-2 text-center'>Panel de Administración</h1>
            {isAdmin && selectedView === 'agregarProducto' && (
              <AdminProductForm/>
            )}
            {isAdmin && selectedView === 'listaProductos' && (
              <AdminProductList />
            )}
          </div>
        </div>
      </div>
    );
};



export default AdminPanel;