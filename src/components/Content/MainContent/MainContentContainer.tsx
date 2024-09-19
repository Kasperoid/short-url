import InputShortContainer from './InputShort/InputShortContainer';
import StatisticsContainer from './StatisticsContainer/StatisticsContainer';
import BoostLink from './boostLink/BoostLink';
import { ContainerInnerStyled } from '../../../styles/containers/ContainerInnerStyled';
import { ContainerStyled } from '../../../styles/containers/ContainerStyled';

const MainContentCotainer = () => {
  return (
    <ContainerStyled $bgc="tertiary" className="container-main-content">
      <ContainerInnerStyled>
        <InputShortContainer />
        <StatisticsContainer />
      </ContainerInnerStyled>
      <BoostLink />
    </ContainerStyled>
  );
};

export default MainContentCotainer;
