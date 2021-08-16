import { authRoutes } from '@shared/routes';
import { registerValidation } from '@shared/validations';
import { Formik, Form, Field } from 'formik';
import { AuthContent, Input, Tag, Button, Description } from '@components/index';




type RegisterFormType = {
  name: string
  email: string
  password: string
  password_confirm: string
  phone: string
}

const RegisterPage = (): JSX.Element => {

  const onSubmit = (formData: RegisterFormType) => {
    console.log(formData);
  }

  return (
    <AuthContent>
      <Formik initialValues = {{
          name: '',
          email: '',
          password: '',
          password_confirm: '',
          phone: ''
        }}
        validationSchema = {registerValidation}
        onSubmit = { onSubmit }>
          {({ isSubmitting, errors, touched }) => (
            <Form>

              <Field 
                name = 'name'
                placeholder = 'Имя'
                error = { errors.name && touched.name } 
                errorText = { errors.name }
                as = { Input } />
              
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

              <Field
                name = 'password_confirm'
                placeholder = 'Повторить пароль' 
                type = 'password'
                error = { errors.password_confirm && touched.password_confirm } 
                errorText = { errors.password_confirm }
                as = { Input } />
              
              <Description size = 'small' className = 'm-bottom--5 m-top--20'> 
                * Вакансия активна и работает только для одного заведения бла 
                бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла  
              </Description>

              <Field
                name = 'phone'
                placeholder = 'Телефон' 
                error = { errors.phone && touched.phone } 
                errorText = { errors.phone }
                as = { Input } />
              
              <Button fullWidth type = 'submit' appearance = 'primary' className = 'm-top--20'> Зарегистрироваться </Button>
              <Tag size = 'medium' position = 'center' className = 'm-top--10' href = {authRoutes.login}> Уже есть аккаунт? </Tag>

            </Form>
          )}

      </Formik>
    </AuthContent>
  );
}

export default RegisterPage;