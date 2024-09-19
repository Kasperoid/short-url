import { ReactNode } from 'react';
import { RecognitionIcon } from '../../../Icons/Icons';
import { DetailedIcon } from '../../../Icons/Icons';
import { CustomizableIcon } from '../../../Icons/Icons';
import StatisticsCard from './StatisticsCard';
import { StatisticLineStyled } from '../../../../styles/content/statistic/StatisticLineStyled';
import { StatisticsCardsContainerStyled } from '../../../../styles/content/statistic/StatisticsCardsContainerStyled';

const StatisticsCards = () => {
  type cardsOptionType = {
    title: string;
    text: string;
    icon: ReactNode;
  };
  const cardsOptions: cardsOptionType[] = [
    {
      title: 'Brand Recognition',
      text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      icon: <RecognitionIcon className="statistic-card-icon" />,
    },
    {
      title: 'Detailed Records',
      text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions',
      icon: <DetailedIcon className="statistic-card-icon" />,
    },
    {
      title: 'Fully Customizable',
      text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      icon: <CustomizableIcon className="statistic-card-icon" />,
    },
  ];
  return (
    <StatisticsCardsContainerStyled gutter={[30, { sm: 80, xs: 80 }]}>
      {cardsOptions.map((item, index) => (
        <StatisticsCard {...item} index={index} key={index + 1} />
      ))}
      <StatisticLineStyled />
    </StatisticsCardsContainerStyled>
  );
};

export default StatisticsCards;
