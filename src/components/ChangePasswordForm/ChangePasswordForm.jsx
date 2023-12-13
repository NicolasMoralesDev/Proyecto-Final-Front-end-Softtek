/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Alert } from 'react-bootstrap';
import { object, string } from 'yup';

const validationSchema = object().shape({
  currentPassword: string()
    .required('La actual contraseña es requerida')
    .min(8, 'La contraseña debe contener mas de 8 caracteres')
    .max(50, 'La contraseña no puede tener mas de 50 caracteres'),
  newPassword: string()
    .required('La nueva contraseña es requerida')
    .min(8, 'La contraseña debe contener mas de 8 caracteres')
    .max(50, 'La contraseña no puede tener mas de 50 caracteres'),
  confirmationPassword: string()
    .required('Confirmar contraseña es requerido')
    .test('password', 'Las contraseñas no coinciden', function (value) {
      return this.parent.newPassword === value;
    }),
});

const ChangePasswordForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        currentPassword: '',
        newPassword: '',
        confirmationPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form as={BootstrapForm} className="d-flex justify-content-center">
        <div className='col-8 text-center'>
          <div className='mb-3'>
            <label htmlFor='currentPassword'>Contraseña actual:</label>
            <Field
              type='password'
              name='currentPassword'
              className='form-control'
              id='currentPassword'
            />
            <ErrorMessage
              name='currentPassword'
              component={Alert}
              variant='danger'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='newPassword'>Nueva contraseña:</label>
            <Field
              type='password'
              name='newPassword'
              className='form-control'
              id='newPassword'
            />
            <ErrorMessage
              name='newPassword'
              component={Alert}
              variant='danger'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='confirmationPassword'>Modificar contraseña:</label>
            <Field
              type='password'
              name='confirmationPassword'
              className='form-control'
              id='confirmationPassword'
            />
            <ErrorMessage
              name='confirmationPassword'
              component={Alert}
              variant='danger'
            />
          </div>
          <Button type='submit' className='me-2 fw-bold'>
            Cambiar contraseña
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ChangePasswordForm;
