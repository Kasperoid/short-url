import { ButtonStyled } from '../../../../styles/global/ButtonStyled';
import { BoostLinkContainerStyled } from '../../../../styles/content/boostLink/BoostLinkContainerStyled';
import { HStyled } from '../../../../styles/global/HStyled';
import bg from './../../../../images/bg-boost-desktop.svg';
import { scrollToElement } from '../../../../helpers/scrollToElem';

const BoostLink = () => {
  return (
    <BoostLinkContainerStyled bg={bg} direction="vertical" size={20}>
      <HStyled titlelevel="h2" color="white">
        Boost your links today
      </HStyled>
      <ButtonStyled
        type="primary"
        color="primary"
        shape={'circle'}
        onClick={() => scrollToElement('inputShort')}
      >
        Get Started
      </ButtonStyled>
    </BoostLinkContainerStyled>
  );
};

export default BoostLink;
