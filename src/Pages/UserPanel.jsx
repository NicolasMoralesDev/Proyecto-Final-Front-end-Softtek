import { Col, Row, Table } from 'react-bootstrap';
import styles from './UserPanel.module.css';
import { useUser } from '../context/Hooks';


const UserPanel = () => {
  const { userOrders, user } = useUser();
  const orders = userOrders();

  return (
    <div className={styles.main}>
      <div className={`container ${styles.container}`}>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} lg={10} xl={8} className={styles.box}>
            <div className={styles.header}>
              <h1 className={styles.title}>Historial</h1>
            </div>
            {orders && orders.length > 0 ? (
              <OrderTable orders={orders} />
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
                <p  style={{display: "inline-block"}}>{user.fullName}</p>
              </div>
              <div>
                <h6 style={{display: "inline-block", paddingRight: "10px"}}>Email: </h6>
                <p  style={{display: "inline-block"}}>{user.email}</p>
              </div>
              <div>
                <h6 style={{display: "inline-block", paddingRight: "10px"}}>Dirección: </h6>
                <p  style={{display: "inline-block"}}>{user.address}</p>
              </div>
              <div>
                <h6 style={{display: "inline-block", paddingRight: "10px"}}>Teléfono: </h6>
                <p  style={{display: "inline-block"}}>{user.phone}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const OrderTable = ({ orders }) => {
  console.log(orders)
  return (
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
            <tr key={order.id}>
              <td>
                {' '}
                <span>{order.id}</span>{' '}
              </td>
              <td>
                {' '}
                <span>{order.createdAt}</span>{' '}
              </td>
              <td>
                <span>{order.products.length}</span>
              </td>
              <td>
                {' '}
                <span>{order.total}</span>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserPanel;
