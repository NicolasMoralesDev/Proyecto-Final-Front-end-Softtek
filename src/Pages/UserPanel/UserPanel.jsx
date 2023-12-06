import { Button, Col, Row, Table } from 'react-bootstrap';
import styles from './UserPanel.module.css';
import { useUser } from '../../context/Hooks';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { OrderDetail } from '../../components/OrderDetail/OrderDetail';
import { getUserSales } from '../../utils/fetchSales';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserPanel = () => {
  
  const [saleList, setSaleList] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  const navigate = useNavigate();

  const getUserOrders = async () => {
    try {
      const response = await getUserSales(user.id);
      
      if (response.data) {
        setSaleList(response.data.saleList);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user orders:", error);
      // Puedes agregar lógica adicional para manejar el error, como mostrar un mensaje al usuario.
    }
  };
  
  useEffect(() => {
    getUserOrders();
  }, [user]);
  
  return (
    <div className={styles.main}>
      <div className={`container ${styles.container}`}>
        {loading ? <p>Cargando...</p> : 
        <>
          <Row className='justify-content-center align-items-center'>
            <Col xs={12} lg={10} xl={8} className={styles.box}>
              <div className={styles.header}>
                <h1 className={styles.title}>Historial</h1>
              </div>
              {saleList && saleList.length > 0 ? (
                <OrderTable saleList={saleList} />
              ) : (
                <>
                  <p>Todavía no ha realizado compras</p>
                  <Button variant="primary" onClick={() => navigate("/")}> Ir a comprar </Button>
                </>
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
const OrderTable = ({ saleList }) => {
  
  const [showModal, setShowModal] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const handleSelectSale= (sale) => {
    setSelectedSale(sale);
    handleOpenModal();
  }

  const calcTotal = (sale) => {
    return sale.itemList.reduce((acc, item) => acc + item.amount * item.product.price, 0);
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
            saleList.map((sale) => (
              <tr key={sale.id} onClick={() => handleSelectSale(sale)}>
                <td>
                  <span>{sale.id}</span>
                </td>
                <td>
                  <span>{sale.date}</span>
                </td>
                <td>
                  <span>{sale.itemList.length}</span>
                </td>
                <td>
                  <span>{calcTotal(sale)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal} title="Detalle de la compra">
        <OrderDetail sale={selectedSale} />
      </Modal>
    </div>
  );
};

export default UserPanel;
