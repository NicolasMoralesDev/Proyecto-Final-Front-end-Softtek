import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Alert } from 'react-bootstrap';
import { object, string } from 'yup';

const validationSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
  password: string().required('Required'),
});

// eslint-disable-next-line react/prop-types
const LoginForm = ({ handleSubmit, secondaryButton = null }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form as={BootstrapForm}>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
          <ErrorMessage name="password" component={Alert} variant="danger" />
        </div>
        <Button type="submit" className="me-2">
          Iniciar sesión
        </Button>
       { secondaryButton && <Button variant="success" onClick={secondaryButton.onClick}>
          {secondaryButton.text}
        </Button>}
      </Form>
    </Formik>
  );
};

export default LoginForm;
