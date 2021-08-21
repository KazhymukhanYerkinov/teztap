import { SuccessContent, Description } from '@components/index';

const SuccessPassword = (): JSX.Element => {
  return (
    <SuccessContent title = 'Пароль успешно изменен'>
      <Description size = 'small' className = 'm-top--10'>
        Ваш пароль был успешно изменен, <br /> вам нужно заново войти в систему
      </Description>
    </SuccessContent>
  );
};

export default SuccessPassword;