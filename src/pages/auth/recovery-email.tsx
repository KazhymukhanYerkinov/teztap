import { recoveryEmailValidation } from '@shared/validations';
import { Formik, Form, Field } from 'formik';
import { AuthContent, Input, Button, Tag } from '@components/index';


type RecoveryEmailFormType = {
  email: string
}

const RecoveryEmail = (): JSX.Element => {

  const onSubmit = (formData: RecoveryEmailFormType) => {
    console.log(formData);
  }

  return (
    <AuthContent>
      <Formik initialValues = {{
          email: '',
        }}
        validationSchema = {recoveryEmailValidation}
        onSubmit = {onSubmit}>
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Tag size = 'small' className = 'm-bottom--5'> На вашу почту был отправлен код <br /> подтверждения, введите код из письма </Tag>
              <Field 
                name = 'email' 
                placeholder = 'Email'
                error = { errors.email && touched.email } 
                errorText = { errors.email }
                as = { Input } />
              <Button type = 'button' fullWidth appearance = 'primary' className = 'm-top--20'> Далее </Button>
            </Form>
          )}

      </Formik>
    </AuthContent>
  );
}

export default RecoveryEmail;