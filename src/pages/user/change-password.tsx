import React from 'react';
import { Formik, Field, Form } from 'formik';
import { ProfileContent, Description, Input, Button } from '@components/index';

const ChangeEmail = (): JSX.Element => {
  return (
    <ProfileContent title='Изменить пароль'>
      <React.Fragment>

        <Description size='small' className='m-top--10 m-bottom--20' position='center'>
          Придумайте пароль, который <br /> вы не забудете
        </Description>

        <Formik initialValues={{
          old_password: '',
          new_password: '',
          confirm_new_password: '',
        }}
        onSubmit={(formData) => console.log(formData)}>

          {({ errors, touched }) => (
            <Form>

              <Field 
                name = 'old_password' 
                placeholder = 'Старый пароль'
                error = { errors.old_password && touched.old_password } 
                errorText = { errors.old_password }
                as = { Input } />

              <Field 
                name = 'new_password' 
                placeholder = 'Новый пароль'
                error = { errors.new_password && touched.new_password } 
                errorText = { errors.new_password }
                as = { Input } />
              
              <Field 
                name = 'confirm_new_password' 
                placeholder = 'Павторить новый пароль'
                error = { errors.confirm_new_password && touched.confirm_new_password } 
                errorText = { errors.confirm_new_password }
                as = { Input } />
              <Button fullWidth appearance = 'primary'> Отпарвить </Button>
            </Form>
          )}

        </Formik>

      </React.Fragment>
    </ProfileContent>
  );
};

export default ChangeEmail;


