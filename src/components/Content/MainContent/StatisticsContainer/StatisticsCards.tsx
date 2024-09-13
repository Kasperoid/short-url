import React, { ReactNode } from 'react';
import { Row } from 'antd';
import './../../../../styles/content/statistic/statistic.css';
import { RecognitionIcon } from '../../../Icons/Icons';
import { DetailedIcon } from '../../../Icons/Icons';
import { CustomizableIcon } from '../../../Icons/Icons';
import StatisticsCard from './StatisticsCard';

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
    <Row gutter={30} style={{ position: 'relative', zIndex: 2 }}>
      {cardsOptions.map((item, index) => (
        <StatisticsCard {...item} index={index} />
      ))}
      <div
        style={{
          height: '7px',
          backgroundColor: 'rgb(41, 209, 206)',
          position: 'absolute',
          margin: '0 30px',
          top: '50%',
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      />
    </Row>
  );
};

export default StatisticsCards;
