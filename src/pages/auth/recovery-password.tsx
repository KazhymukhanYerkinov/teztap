import { recoveryPasswordValidation } from '@shared/validations';
import { AuthContent, Input, Button } from '@components/index';
import { Formik, Field, Form } from 'formik';



type RecoveryPasswordFormType = {
  new_password: string
  new_password_confirm: string
}

const RecoveryPassword = (): JSX.Element => {

  const onSubmit = (formData: RecoveryPasswordFormType) => {
    console.log(formData);
  }

  return (
    <AuthContent>
      <Formik initialValues = {{
          new_password: '',
          new_password_confirm: '',
        }}
        validationSchema = { recoveryPasswordValidation }
        onSubmit = { onSubmit }>
        {({ isSubmitting, errors, touched }) => (
          <Form>

            <Field 
              name = 'new_password' 
              placeholder = 'Новый пароль'
              type = 'password'
              error = { errors.new_password && touched.new_password } 
              errorText = { errors.new_password }
              as = { Input } />
            
            <Field 
              name = 'new_confirm_password'
              placeholder = 'Повторить новый пароль'
              type = 'password'
              error = { errors.new_password_confirm && touched.new_password_confirm }
              errorText = { errors.new_password_confirm }
              as = { Input } />

            <Button type = 'submit' fullWidth appearance = 'primary' className = 'm-top--20'> Далее </Button>
          </Form>
        )}
      </Formik>
    </AuthContent>
  );
}

export default RecoveryPassword;