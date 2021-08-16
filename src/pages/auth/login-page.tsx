import { authRoutes } from '@shared/routes';
import { loginValidation } from '@shared/validations';
import { Formik, Field, Form } from 'formik';
import { AuthContent, Input, Button, Tag } from '@components/index';


type LoginFormType = {
  email: string
  password: string
}

const LoginPage = (): JSX.Element => {
  
  const onSubmit = (formData: LoginFormType) => {
    console.log(formData)
  }

  return (
    <AuthContent>
      <Formik initialValues = {{
          email: '',
          password: '',
        }}
        validationSchema = {loginValidation}
        onSubmit = {onSubmit}>

        {({ isSubmitting, errors, touched }) => (
          <Form>

            <Field 
              name = 'email' 
              placeholder = 'Email'
              error = { errors.email && touched.email } 
              errorText = { errors.email }
              as = { Input } />
              
            <Field 
              name = 'password' 
              placeholder = 'Пароль' 
              type = 'password'
              error = { errors.password && touched.password }
              errorText = { errors.password }
              as = { Input } />

            <Tag size = 'small' underline position = 'right' href = {authRoutes.recovery_email}> Забыли пароль ? </Tag>
            <Button fullWidth type = 'submit' appearance = 'primary' className = 'm-top--20'> Войти </Button>
            <Tag size = 'medium' position = 'center' className = 'm-top--10' href = {authRoutes.register}> Создать аккаунт </Tag>
          </Form>
        )}

      </Formik>
    </AuthContent>
  );
}

export default LoginPage;