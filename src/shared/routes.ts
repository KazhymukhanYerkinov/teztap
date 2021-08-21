const app = '/app';
export const appRoutes = {
  root: app,
  search: `${app}/search`,
  subs: `${app}/subs`,
  profile: `${app}/profile`,
}

const auth = '/auth';
export const authRoutes = {
  root: auth,
  login: `${auth}/login`,
  register: `${auth}/register`,
  recovery_email: `${auth}/recovery-email`,
  recovery_password: `${auth}/recovery-password`,
  success_register: `${auth}/success-register`,
  success_recovery: `${auth}/success-recovery`,
}

const user = '/user';
export const userRoutes = {
  root: user,
  change_password: `${user}/change-password`,
  change_email: `${user}/change-email`,
  success_password: `${user}/success-change-password`,
  success_email: `${user}/success-change-email`,
}