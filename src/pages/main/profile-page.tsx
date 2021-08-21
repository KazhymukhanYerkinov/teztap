import React from 'react';
import { userRoutes } from '@shared/routes';
import { Formik, Field, Form } from 'formik';


import { UserContent, Button, Tag, DrawerComponent, Input, InputLink } from '@components/index';
import { withAuthRedirect } from '@hoc/withAuthRedirect';

const ProfilePage = () => {
  const [ drawer, setDrawer ] = React.useState<boolean>(false);

  const activateDrawer = () => {
    setDrawer(true);
  }
  const deactivateDrawer = () => {
    setDrawer(false);
  }

  return (
    <div>
      <UserContent name = 'Kazhymukhan Yerkinov'  phone = '+7 708 417 1975'/>
      <Button fullWidth appearance = 'primary' className = 'm-top--30'> подключиться к телеграмме </Button>
      <Tag underline position = 'center' className = 'm-top--10' onClick = {activateDrawer}> Изменить профиль </Tag>

      <DrawerComponent drawer = { drawer } deactivateDrawer = { deactivateDrawer }>
        <UserContent update />
        <Formik initialValues = {{
            name: '',
            phone: '',
          }}
          onSubmit = {(formData) => console.log(formData)}>
          {({ errors, touched }) => (
            <Form>

              <Field 
                name = 'name' 
                placeholder = 'Имя'
                error = { errors.name && touched.name } 
                errorText = { errors.name }
                as = { Input } />

              <Field 
                name = 'phone' 
                placeholder = 'Телефон'
                error = { errors.phone && touched.phone } 
                errorText = { errors.phone }
                as = { Input } />

              <InputLink href = {userRoutes.change_email}> kazhymukhanyerkinov@gmail.com </InputLink>
              <InputLink href = {userRoutes.change_password}> Изменить пароль </InputLink>
              <Button type = 'submit' fullWidth appearance = 'primary'> Сохранить </Button>
            </Form>
          )}
        </Formik>
      </DrawerComponent>
      
    </div>
  )
}

export default withAuthRedirect(ProfilePage);