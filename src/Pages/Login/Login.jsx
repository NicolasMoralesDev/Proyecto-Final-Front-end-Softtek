import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { Helmet } from 'react-helmet'
import { useUser } from '../../context/Hooks';
import { Col, Row } from 'react-bootstrap';
import styles from './Login.module.css'
import { useNavigate } from 'react-router';

const Login = () => {
    const { login, register } = useUser();
    const navigate = useNavigate();

    const handleLoginSubmit = (values) => {
        login(values.email, values.password);
        navigate('/');
    }
    const handleRegisterSubmit = (values) => {
        register(values);
        navigate('/');
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className={`container ${styles.container}`}>
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