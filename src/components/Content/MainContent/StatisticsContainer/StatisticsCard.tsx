import { ReactNode } from 'react';
import { StatisticsCardContainerInnerStyled } from '../../../../styles/content/statistic/StatisticsCardContainerInnerStyled';
import { StatisticsCardContainerStyled } from '../../../../styles/content/statistic/StatisticsCardContainerStyled';
import { HStyled } from '../../../../styles/global/HStyled';
import { TextStyled } from '../../../../styles/global/TextStyled';

type StatisticsCardProps = {
  title: string;
  text: string;
  index: number;
  icon: ReactNode;
};

const StatisticsCard = ({ title, text, index, icon }: StatisticsCardProps) => {
  return (
    <StatisticsCardContainerStyled index={index} lg={8} xs={24}>
      <StatisticsCardContainerInnerStyled vertical>
        {icon}
        <HStyled titlelevel={'h3'}>{title}</HStyled>
        <TextStyled size={'cardText'} color={'primary'}>
          {text}
        </TextStyled>
      </StatisticsCardContainerInnerStyled>
    </StatisticsCardContainerStyled>
  );
};

export default StatisticsCard;
