import Table from 'react-bootstrap/Table';
import Mp from '../../assets/mercado-pago.svg';
import { useCart, useUser } from '../../context/Hooks';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from '../Modal/Modal';
import { object, string } from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Alert } from 'react-bootstrap';
import { payMd, sendSale } from '../../utils/fetchSales';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import styles from './TableCheckout.module.css';
import { PacmanLoader } from "react-spinners"

const TableCheckout = () => {


  const [showModal, setShowModal] = useState(false);
  const { cart, removeFromCart } = useCart();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const total = cart.reduce(
    (acc, item) => acc + item.amount * item.product.price,
    0
  );

  const handleDeleteItem = (id) => {
    removeFromCart(id);
    toast.success('Se eliminó el producto del carrito');
  };

  const handleOpenModal = () => {
    if (!isAuthenticated) {
      toast.error('Debes iniciar sesión para continuar');
      navigate('/login');
      return;
    }
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className={`container mb-5 mt-5 ${styles.main}`}>
      <h2 className='text-center pt-5 mb-5'>CHECKOUT </h2>
      <Table striped responsive className='fw-bold'>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Quitar</th>
          </tr>
        </thead>
        <tbody>
          {cart ? (
            cart.map((i) => {
              return (
                <tr key={Date.now() * i.product.id}>
                  <td className='w-25'>
                    <img
                      src={i.product.imageUrl}
                      alt={i.product.name}
                      height={'120px'}
                    />
                  </td>
                  <td>{i.product.name}</td>
                  <td>{i.product.brand}</td>
                  <td>{i.amount}</td>
                  <td>$ {i.product.price}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(i.product.id)}
                      className='btn btn-danger'
                      title='Quitar de la Orden'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-trash'
                        viewBox='0 0 16 16'
                      >
                        <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z' />
                        <path d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z' />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </Table>
      <div className='d-flex w-100 gap-3  justify-content-end align-items-center'>
        <div className='d-flex w-50'>
          <div
            className='btn btn-primary fw-bold p-3'
            onClick={handleOpenModal}
          >
          Crear orden
          </div>
        </div>
        <div className='d-flex w-50 fw-bold fs-4'>
          {' '}
          <span>TOTAL = $ {total}</span>
        </div>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal} title="Procesar compra">
        <CheckoutModal />
      </Modal>
    </div>
  );
};

export default TableCheckout;

const CheckoutModal = () => {

    const { cart, clearCart } = useCart();
    const { user } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const total = cart.reduce(
      (acc, item) => acc + item.amount * item.product.price,
      0
    );

    const totalItems = cart.reduce(
      (acc, item) => acc + item.amount + item.amount, 0
    );

    const validationSchema = object().shape({
        address: string().required('Requerido'),
        phone: string().required('Requerido'),
    });

    const  sendSaleRequest = async (shippingData) => {
        setLoading(true);
        const res = await sendSale(shippingData);
        return res;
    }
    const enviarPago = async ()=>{
      const data = [totalItems, total]
        await payMd(data); 
    }

    const prepareShippingData = (values) => {
        const shippingData = {
            itemList: cart.map((item) => ({
                product: {id: item.product.id},
                amount: item.amount,
            })),
            address: values.address,
            phone: values.phone,    
            status: "PENDIENTE",
            idUser: user.id,
        
        };
        return shippingData;
    }
     
    const handleResponse = (response) => {
        setLoading(false);
        if (response.status === 201) {
            Swal.fire({
                title: 'Compra realizada con éxito',
                text: `El id de tu compra es ${response.data.id}`,
                icon: 'success',
                confirmButtonText: 'Ok',
            });
            
            clearCart();
            navigate('/');
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al procesar la compra',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        }
    }

    const handleSubmit = (values) => {
        setLoading(true);
       enviarPago();
        const shippingData = prepareShippingData(values);
        sendSaleRequest(shippingData)
          .then((res) => handleResponse(res))
    }

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center" style={{minHeight: "400px"}}>
                <PacmanLoader color="#000000" />
        </div>
    }

    return ( 
    <>
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>${item.product.price}</td>
              <td>{item.amount}</td>
              <td>${item.product.price * item.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan="3"
              className="text-end fw-bold"
              style={{ paddingTop: 20 }}
            >
              Total: $
            </td>
            <td style={{ paddingTop: 20 }}>{total}</td>
          </tr>
        </tfoot>
      </Table>
      <Formik
      initialValues={{ address: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form as={BootstrapForm}>
        <div className="d-flex gap-4">
            <div className="mb-3">
            <label htmlFor="address">Dirección de entrega:</label>
            <Field
                type="text"
                name="address"
                className="form-control"
                id="address"
                autoComplete="off"
            />
            <ErrorMessage name="address" component={Alert} variant="danger" />
            </div>
            <div className="mb-3">
            <label htmlFor="phone">Teléfono de contacto:</label>
            <Field
                type="text"
                name="phone"
                className="form-control"
                id="phone"
            />
            <ErrorMessage name="phone" component={Alert} variant="danger" />
            </div>
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit" className="me-2 success fw-bold">
        Pagar Mercado Pago <img src={Mp} alt='mercado pago icon' />
        </Button>
        </div>
      </Form>
    </Formik>
     </>
    );
}

const EmptyCart = () => {
  return (
    <div className={`container mb-5 mt-5 ${styles.main}`}>
      <h2 className='text-center'>Checkout </h2>
      <div className='alert alert-warning' role='alert'>
        No hay productos en el carrito
      </div>
      <Link to='/'>
        <button className='btn btn-primary'>Ir a comprar</button>
      </Link>
    </div>
  );
}