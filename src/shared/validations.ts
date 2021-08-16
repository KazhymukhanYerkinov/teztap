import * as Yup from 'yup';

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('Неправильный электронный адрес')
    .required('Поле, обязательное для заполнения'),
  password: Yup.string()
    .min(8, 'Минимальная длина 8 символов')
    .max(255, 'Максимальная длина 255 символов')
    .required('Поле, обязательное для заполнения')
});


export const registerValidation = Yup.object().shape({
  name: Yup.string()
    .max(255, 'Максимальная длина 255 символов')
    .required('Поле, обязательное для заполнения'),
  email: Yup.string()
    .email('Неправильный электронный адрес')
    .required('Поле, обязательное для заполнения'),
  password: Yup.string()
    .min(8, 'Минимальная длина 8 символов')
    .max(255, 'Максимальная длина 255 символов')
    .required('Поле, обязательное для заполнения'),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
    .required('Поле, обязательное для заполнения'),
  phone: Yup.string()
    .required('Поле, обязательное для заполнения')
});


export const recoveryEmailValidation = Yup.object().shape({
  email: Yup.string()
    .email('Неправильный электронный адрес')
    .required('Поле, обязательное для заполнения'),
});

export const recoveryPasswordValidation = Yup.object().shape({
  new_password: Yup.string()
    .min(8, 'Минимальная длина 8 символов')
    .max(255, 'Максимальная длина 255 символов')
    .required('Поле, обязательное для заполнения'),
  new_password_confirm: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'Пароли не совпадают')
    .required('Поле, обязательное для заполнения'),
})