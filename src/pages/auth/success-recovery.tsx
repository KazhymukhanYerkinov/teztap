import { SuccessContent, Description } from '@components/index';

const SuccessPage = () => {
  return (
    <SuccessContent title = 'Ваш пароль был успешно изменен'>
      <Description size = 'small' className = 'm-top--10'> 
        Вакансия активна и работает только для 
        одного заведения бла бла бла бла бла бла бла 
        бла бла бла бла бла бла бла бла бла бла бла бла  
      </Description>
    </SuccessContent>
  );
}

export default SuccessPage;