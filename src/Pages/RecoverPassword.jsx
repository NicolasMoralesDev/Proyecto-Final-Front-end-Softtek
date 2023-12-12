import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'
import { changePasswordEmail } from '../utils/fetchUser'

const RecoverPassword = () => {

    const navigate = useNavigate();

    const cookies = new Cookies();

    const [Password, setPassword] = useState({
        userId: 0,
        newPassword: "",
        confirmationPassword: "",
    });
    const [searchParams] = useSearchParams();

    cookies.set("token", searchParams.get("q"), { path: '/' });

    const changePassword = async (e) => {
        e.preventDefault()
        const response = await changePasswordEmail(Password);

        if (response.status === 200) {
            Swal.fire({
                title: 'Contraseña restablecida con éxito!',
                icon: 'success',
                confirmButtonText: 'Ok',
            });

            navigate('/login');
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al restablecer tu contraseña!',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        }

    }

    const handleChange = (e) => {

        const { name, value } = e.target;
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