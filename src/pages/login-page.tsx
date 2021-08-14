import React from 'react';
import { BackNavigation, Button } from '@components/index';

const LoginPage = () => {
  return (
    <div>
      <BackNavigation />
      <Button appearance = 'primary'> Click me </Button>
      <Button appearance = 'outline'> Click me </Button>
    </div>
  );
}

export default LoginPage;