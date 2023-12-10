/* eslint-disable react/prop-types */
import { Button, Col, Row, Table } from 'react-bootstrap';
import styles from './UserPanel.module.css';
import { useUser } from '../../context/Hooks';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { OrderDetail } from '../../components/OrderDetail/OrderDetail';
import { getUserSales } from '../../utils/fetchSales';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm';
import { changePasswordRequest } from '../../utils/fetchUser';
import Swal from 'sweetalert2';
import { PacmanLoader } from "react-spinners"
import { Helmet } from 'react-helmet';

const UserPanel = () => {

  const [saleList, setSaleList] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Panel de Usuario</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={styles.main}>
        <div className={`container ${styles.container}`}>
          {loading ? <Loading /> :
            <>
              <SalesSection saleList={saleList} />
              <UserSection user={user} />

            </>
          }
        </div>
      </div>
    </>
  );
};

const SalesSection = ({ saleList }) => {
  const navigate = useNavigate();
  return (
    <Row className='justify-content-center align-items-center'>
      <Col xs={12} lg={10} xl={8} className={styles.box}>
        <div className={styles.header}>
          <h1 className={styles.title}>Historial de compras</h1>
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
  )
}

const UserSection = ({ user }) => {
  return (
    <>
      <Row className='d-flex justify-content-center align-items-center'>
        <div className={`d-flex justify-content-center ${styles.header}`}>
          <h1 className={styles.title}>Datos de usuario</h1>
        </div>
        <Col sm={6} className={`d-flex justify-content-center ${styles.box}>`}>
          <div className={styles.box}>
            <div>
              <h6 style={{ display: "inline-block", paddingRight: "10px" }}>Nombre: </h6>
              <p style={{ display: "inline-block" }}>{user.firstName}</p>
            </div>
            <div>
              <h6 style={{ display: "inline-block", paddingRight: "10px" }}>Apellido: </h6>
              <p style={{ display: "inline-block" }}>{user.lastName}</p>
            </div>
            <div>
              <h6 style={{ display: "inline-block", paddingRight: "10px" }}>Email: </h6>
              <p style={{ display: "inline-block" }}>{user.email}</p>
            </div>
          </div>
        </Col>
        <Col sm={6} className={styles.box}>
          <UserButtons />
        </Col>
      </Row>

    </>
  )
}

const UserButtons = () => {
  const { user } = useUser();

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);
  const [loading, setLoading] = useState(false);

  const prepareRequest = (values) => {
    const request = {
      userId: user.id,
      currentPassword: values.currentPassword,
      newPassword: values.newPassword,
      confirmationPassword: values.confirmationPassword
    }
    return request;
  }

  const sendRequest = async (request) => {
    try {
      setLoading(true);
      const response = await changePasswordRequest(request);
      setLoading(false);
      if (response.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Contraseña cambiada con éxito',
          showConfirmButton: false,
          timer: 1500
        })
        handleCloseModal();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal, intente nuevamente',
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal, intente nuevamente',
      })
    }
  }

  const handleSubmit = (values) => {
    const request = prepareRequest(values);
    sendRequest(request);
  }

  return (
    <>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col xs={6} sm={6} className="d-flex gap-3">
          <Button onClick={handleOpenModal} className='fw-bold'>Cambiar contraseña</Button>
        </Col>
      </Row>
      <Modal show={showModal} handleClose={handleCloseModal} title="Cambiar contraseña">
        {loading ?
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
            <PacmanLoader color="#000000" />
          </div>
          :
          <ChangePasswordForm handleSubmit={handleSubmit} />}
      </Modal>
    </>
  );
}
// eslint-disable-next-line react/prop-types
const OrderTable = ({ saleList }) => {

  const [showModal, setShowModal] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const handleSelectSale = (sale) => {
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
              <th scope='col'>Estado de la compra</th>
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
                  <td className='text-center'>
                    <span>{sale.date}</span>
                  </td>
                  <td className='text-center'>
                    <span>{sale.itemList.length}</span>
                  </td>
                  <td>
                    <span>
                      {sale.status}
                    </span>
                  </td>
                  <td>
                    <span>$ {calcTotal(sale)}</span>
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
