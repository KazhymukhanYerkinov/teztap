const app = '/app';
export const appRoutes = {
  root: `${app}`,
  search: `${app}/search`,
  subs: `${app}/subs`,
  profile: `${app}/profile`,
}

const auth = '/auth';
export const authRoutes = {
  root: `${auth}`,
  login: `${auth}/login`,
  register: `${auth}/register`,
  recovery_email: `${auth}/recovery-email`,
  recovery_password: `${auth}/recovery-password`,
  success_register: `${auth}/success-register`,
  success_recovery: `${auth}/success-recovery`,
}