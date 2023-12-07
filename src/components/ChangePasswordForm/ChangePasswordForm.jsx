/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Alert } from 'react-bootstrap';
import { object, string } from 'yup';

const validationSchema = object().shape({
  currentPassword: string()
    .required('Current password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be less than 50 characters'),
  newPassword: string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be less than 50 characters'),
  confirmationPassword: string()
    .required('Confirm password is required')
    .test('password', 'Passwords do not match', function (value) {
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
          <Button type='submit' className='me-2'>
            Change Password
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ChangePasswordForm;
