import { Col, Row, Table } from 'react-bootstrap';
import styles from './UserPanel.module.css';
import { useUser } from '../../context/Hooks';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { OrderDetail } from '../../components/OrderDetail/OrderDetail';


const UserPanel = () => {
  const [ userOrders] = useState(null);
  const { user, loading } = useUser();

  
  return (
    <div className={styles.main}>
      <div className={`container ${styles.container}`}>
        { loading ? <p>Cargando...</p> : 
        <>
          <Row className='justify-content-center align-items-center'>
            <Col xs={12} lg={10} xl={8} className={styles.box}>
              <div className={styles.header}>
                <h1 className={styles.title}>Historial</h1>
              </div>
              {userOrders && userOrders.length > 0 ? (
                <OrderTable orders={userOrders} />
              ) : (
                <p>Todavía no ha realizado compras</p>
              )}
            </Col>
          </Row>
          <Row className='justify-content-center align-items-center'>
            <Col xs={12} lg={10} xl={8} className={styles.box}>
              <div className={styles.header}>
                <h1 className={styles.title}>Datos de usuario</h1>
              </div>
              <div className={styles.box}>
                <div>
                  <h6 style={{display: "inline-block", paddingRight: "10px"}}>Nombre: </h6>
                  <p  style={{display: "inline-block"}}>{user.firstName}</p>
                </div>
                <div>
                  <h6 style={{display: "inline-block", paddingRight: "10px"}}>Apellido: </h6>
                  <p  style={{display: "inline-block"}}>{user.lastName}</p>
                </div>
                <div>
                  <h6 style={{display: "inline-block", paddingRight: "10px"}}>Email: </h6>
                  <p  style={{display: "inline-block"}}>{user.email}</p>
                </div>
              </div>
            </Col>
          </Row>
        </>
        }
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const OrderTable = ({ orders }) => {
  
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
    handleOpenModal();
  }


  return (
    <div>
      <div className='table-responsive'>
        <Table className='table-hover'>
          <thead>
            <tr>
              <th scope='col'>Id de la compra</th>
              <th scope='col'>Fecha</th>
              <th scope='col'>Productos</th>
              <th scope='col'>Total</th>
            </tr>
          </thead>
          <tbody>
            
            {
            // eslint-disable-next-line react/prop-types
            orders.map((order) => (
              <tr key={order.id} onClick={() => handleSelectOrder(order)}>
                <td>
                  <span>{order.id}</span>
                </td>
                <td>
                  <span>{order.createdAt}</span>
                </td>
                <td>
                  <span>{order.products.length}</span>
                </td>
                <td>
                  <span>{order.total}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal} title="Detalle de la compra">
        <OrderDetail order={selectedOrder} />
      </Modal>
    </div>
  );
};

export default UserPanel;
