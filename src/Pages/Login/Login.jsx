import LoginForm from '../../components/LoginForm/LoginForm'
import { Helmet } from 'react-helmet'
import { useUser } from '../../context/Hooks';
import { Col, Row } from 'react-bootstrap';
import styles from './Login.module.css'

const Login = () => {
    const { login } = useUser();

    const handleSubmit = (values) => {
        login(values.email, values.password);
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className={`container ${styles.container}`}>
                <Row className="d-flex justify-content-center">
                    <Col xs={6} lg={6} xl={4}>
                        <LoginForm handleSubmit={handleSubmit}/>
                    </Col>
                </Row>
                
            </div>
        </>

    )
}

export default Login