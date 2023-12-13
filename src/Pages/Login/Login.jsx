import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { Helmet } from 'react-helmet'
import { useUser } from '../../context/Hooks';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {

    const { login, register } = useUser();
    const navigate = useNavigate();

    const handleLoginSubmit = async (values) => {
        const res = await login(values.email, values.password);
        if (res.status == 200){
            navigate('/');
        } else {
        showErrorMessage(res.message);
        }
    }
    const handleRegisterSubmit = async (values) => {
        const res = await register(values);
        if (res.status == 200){
            Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                text: res.message,
                timer: 1000,
            })
            navigate('/');
        } else {
        showErrorMessage(res.message);
        }
    }

    const showErrorMessage = (message) => {
        Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Inicia session para acceder a tu cuenta." />
            </Helmet>
            <div className={`container`}>
                <Row className="d-flex justify-content-around">
                    <Col xs={7} lg={5} xl={3}>
                        <h1 style={{padding: "30px"}}>Iniciar sesión</h1>
                        <LoginForm handleSubmit={handleLoginSubmit}/>
                    </Col>
                    <Col xs={7} lg={5} xl={3}>
                        <h1 style={{padding: "30px"}}>Registrarse</h1>
                        <RegisterForm handleSubmit={handleRegisterSubmit}/>
                        
                    </Col>
                </Row>
                
            </div>
        </>

    )
}

export default Login