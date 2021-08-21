import { Description, SuccessContent } from '@components/index';

const SuccessEmail = (): JSX.Element => {
  return (
    <SuccessContent title = 'Email успешно изменен'>
      <Description size = 'small' className = 'm-top--10'>
        Ваш email был успешно изменен, <br /> вам нужно заново войти в систему
      </Description>
    </SuccessContent>
  );
};

export default SuccessEmail;