import React, { useState } from 'react'
import { sendEmailLink } from '../utils/fetchUser';
import Swal from 'sweetalert2';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';

const RecuperarPassword = () => {

    const [email, setEmail] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {

        const { name, value } = e.target;
        setEmail((prevState) => ({ ...prevState, [name]: value }));
    }

    const changePassword = async (e) => {

        e.preventDefault();
        
        const response = await sendEmailLink(email);

        if (response.status === 200) {
            Swal.fire({
                title: 'Link enviado!',
                icon: 'success',
                confirmButtonText: 'Ok',
            });

            navigate("/");
            
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error!',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        }

    }


    return (
        <div className="container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Restablecer Contraseña</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Restablecer contraseña." />
            </Helmet>

            <main>
                <div className="mt-5 mb-5 container gap-3 d-flex justify-content-center flex-column align-items-center">
                    <h1 className='text-center mt-5 mb-2'>Restablecer contraseña</h1>
                    <p className="text-center">Le enviaremos un link a su correo para cambiar su contraseña.</p>
                    <div className='w-25 h-50 mt-5'>
                        <Form onSubmit={changePassword}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ingrese su correo:</Form.Label>
                                <Form.Control name="email" onChange={handleChange} required type="email" placeholder="Ingrese su correo..." />
                            </Form.Group>
                            <Button className='fw-bold btn btn-success' type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </div>
                </div>
            </main>
            </div>
    )
}

export default RecuperarPassword