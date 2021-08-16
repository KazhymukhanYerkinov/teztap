import * as Yup from 'yup';
import { authRoutes } from '@shared/routes';
import { Formik, Field, Form } from 'formik';
import { AuthContent, Input, Button, Tag } from '@components/index';


const validation = Yup.object().shape({
  email: Yup.string()
    .email('Неправильный электронный адрес')
    .required('Поле, обязательное для заполнения'),
  password: Yup.string()
    .min(8, 'Минимальная длина 8 символов')
    .max(255, 'Максимальная длина 255 символов')
    .required('Поле, обязательное для заполнения')
});

const LoginPage = (): JSX.Element => {
  return (
    <AuthContent>
      <Formik initialValues = {{
          email: '',
          password: '',
        }}
        validationSchema = {validation}
        onSubmit = {(formData) => console.log(formData)}>

        {({ isSubmitting, errors, touched }) => (
          <Form>

            <Field 
              name = 'email' 
              placeholder = 'Email'
              error = { errors.email && touched.password } 
              errorText = { errors.email }
              as = { Input } />
              
            <Field 
              name = 'password' 
              placeholder = 'Пароль' 
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