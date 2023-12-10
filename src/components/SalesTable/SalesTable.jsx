import React from 'react'
import Modal from '../Modal/Modal';
import { OrderDetail } from '../OrderDetail/OrderDetail';

export const SalesTable = ({userSales}) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedSale, setSelectedSale] = useState(null);
  
    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);
  
    const handleSelectSale = (sale) => {
      setSelectedSale(sale);
      handleOpenModal();
    }


    return (
        <div>
        <div className="mt-4">
            <h2>Ventas del Usuario</h2>
            {userSales.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID Venta</th>
                            <th>Fecha</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Estado</th>

                        </tr>
                    </thead>
                    <tbody>
                        {userSales.map((sale) => (
                            <tr key={sale.id} onClick={() => handleSelectSale(sale)}>
                                <td>{sale.id}</td>
                                <td>{sale.date}</td>
                                <td>{sale.address}</td>
                                <td>{sale.phone}</td>
                                <td>{sale.status}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
           
            ) : (
                <p>No hay ventas para mostrar.</p>
            )}
           
  
        </div>
        <Modal show={showModal} handleClose={handleCloseModal} title="Detalle de la compra">
        <OrderDetail sale={selectedSale} />
      </Modal>
        </div>   
    )
}
