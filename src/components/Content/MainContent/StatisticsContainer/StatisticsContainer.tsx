import { Flex } from 'antd';
import StatisticsCards from './StatisticsCards';
import { HStyled } from '../../../../styles/global/HStyled';
import { TextStyled } from '../../../../styles/global/TextStyled';
import { StatisticHeaderContainerStyled } from '../../../../styles/content/statistic/StatisticHeaderContainerStyled';
import { StatisticsContainerStyled } from '../../../../styles/content/statistic/StatisticsContainerStyled';

const StatisticsContainer = () => {
  return (
    <StatisticsContainerStyled direction="vertical" id="statistic">
      <Flex justify="center">
        <StatisticHeaderContainerStyled direction="vertical" size={15}>
          <HStyled titlelevel={'h2'}>Advanced Statistics</HStyled>
          <TextStyled lineheight={1.7} size={'cardText'}>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </TextStyled>
        </StatisticHeaderContainerStyled>
      </Flex>
      <StatisticsCards />
    </StatisticsContainerStyled>
  );
};

export default StatisticsContainer;
