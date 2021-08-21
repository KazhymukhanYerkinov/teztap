import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Description, ProfileContent, Input, Button, Modal } from '@components/index';

const ChangePassword = (): JSX.Element => {
  const [modal, setModal] = React.useState<boolean>(false);


  const activateModal = () => {
    setModal(true)
  }
  const deactivateModal = () => {
    setModal(false);
  }

  return (
    <ProfileContent title = 'Введите новый Email'>
      <React.Fragment>
        <Description size = 'small' className = 'm-top--10 m-bottom--20' position = 'center'>
          Ваш текущий email: <br /> kazhymukhanyerkinov@gmail.com
        </Description>
        <Formik initialValues = {{
          email: ''
        }}
        onSubmit = {(formData) => console.log(formData)}>
          {({ errors, touched }) => (
            <Form>
              <Field 
                name = 'email' 
                placeholder = 'Новый email'
                error = { errors.email && touched.email } 
                errorText = { errors.email }
                as = { Input } />
              <Button fullWidth appearance = 'primary' onClick = {activateModal}> Отпарвить </Button>
            </Form>
          )}
        </Formik>
      </React.Fragment>
      <Modal  
        modal = {modal}
        title = 'Подтвердить действие' 
        deactivateModal = {deactivateModal}>
        <Description position = 'center'>
          На ваш текущий email (kazhymukhanyerkinov@gmail.com) был отправлен 
          код подтверждения для подтверждения действия, введите его
        </Description>
      </Modal>
    </ProfileContent>
  )
};

export default ChangePassword;