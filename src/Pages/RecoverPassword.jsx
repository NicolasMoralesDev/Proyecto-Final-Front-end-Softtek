import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { changePasswordRequest } from '../utils/fetchUser'
import { useSearchParams } from 'react-router-dom'

const RecoverPassword = () => {

    const [Password, setPassword] = useState({
        userId: 0,
        currentPassword: "",
        newPassword: "",
        confirmationPassword: "",
    });
    const [searchParams] = useSearchParams();

    localStorage.setItem("token", searchParams.get("q"));

    const changePassword = async (e) => {
        e.preventDefault()
        const response = await changePasswordRequest(Password);
        console.log(response);

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(Password);
        Password.userId = searchParams.get("id");
        setPassword((prevState) => ({ ...prevState, [name]: value }));
    }

    return (
        <div className='container-fluid h-50'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Restablecer Contraseña</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Ha ocurrido un error." />
            </Helmet>

            <main>
                <div className="mt-5 mb-5 container d-flex justify-content-center flex-column align-items-center">
                    <h1 className='text-center mt-5 mb-5'>Restablecer contraseña</h1>
                    <div className='w-25 h-50'>
                        <Form onSubmit={changePassword}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ingrese la contraseña actual:</Form.Label>
                                <Form.Control name='currentPassword' onChange={handleChange} required type="password" placeholder="ingrese la nueva contraseña..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ingrese la nueva contraseña:</Form.Label>
                                <Form.Control name="newPassword" onChange={handleChange} required type="password" placeholder="ingrese la nueva contraseña..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirme la contraseña:</Form.Label>
                                <Form.Control name='confirmationPassword' onChange={handleChange} type="password" required placeholder="confirme la contraseña..." />
                            </Form.Group>
                            <Button variant="primary" className='fw-bold' type="submit">
                                Restablecer
                            </Button>
                        </Form>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default RecoverPassword