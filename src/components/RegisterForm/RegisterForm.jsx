import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Alert } from 'react-bootstrap';
import { object, string, ref } from 'yup';

const validationSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
  password: string().required('Required'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Required'),
  fullName: string().required('Required'),
  phone: string().required('Required'),
  address: string().required('Required'),
});

// eslint-disable-next-line react/prop-types
const RegisterForm = ({ handleSubmit, handleCloseRegisterModal }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        phone: '',
        address: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form as={BootstrapForm}>
        <div className="mb-3">
          <label htmlFor="email">Correo electrónico:</label>
          <Field
            type="email"
            name="email"
            className="form-control"
            id="email"
            autoComplete="off"
          />
          <ErrorMessage name="email" component={Alert} variant="danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Contraseña:</label>
          <Field
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
          <ErrorMessage name="password" component={Alert} variant="danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword">Repita la contraseña:</label>
          <Field
            type="password"
            name="confirmPassword"
            className="form-control"
            id="confirmPassword"
          />
          <ErrorMessage
            name="confirmPassword"
            component={Alert}
            variant="danger"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName">Nombre completo:</label>
          <Field
            type="text"
            name="fullName"
            className="form-control"
            id="fullName"
          />
          <ErrorMessage name="fullName" component={Alert} variant="danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone">Teléfono:</label>
          <Field
            type="text"
            name="phone"
            className="form-control"
            id="phone"
          />
          <ErrorMessage name="phone" component={Alert} variant="danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="address">Dirección donde se entregará el producto:</label>
          <Field
            type="text"
            name="address"
            className="form-control"
            id="address"
          />
          <ErrorMessage name="address" component={Alert} variant="danger" />
        </div>
        <Button type="submit" className="me-2">
          Enviar
        </Button>
        <Button variant="secondary" onClick={handleCloseRegisterModal}>
          Cancelar
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;