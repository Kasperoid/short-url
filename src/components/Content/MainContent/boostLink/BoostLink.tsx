import { ButtonStyled } from '../../../../styles/ButtonStyled';
import { BoostLinkContainerStyled } from '../../../../styles/content/boostLink/BoostLinkContainerStyled';
import { HStyled } from '../../../../styles/HStyled';
import bg from './../../../../images/bg-boost-desktop.svg';

const BoostLink = () => {
  return (
    <BoostLinkContainerStyled bg={bg} direction="vertical" size={20}>
      <HStyled titlelevel="h2" color="white">
        Boost your links today
      </HStyled>
      <ButtonStyled type="primary" color="primary" shape={'circle'}>
        Get Started
      </ButtonStyled>
    </BoostLinkContainerStyled>
  );
};

export default BoostLink;
