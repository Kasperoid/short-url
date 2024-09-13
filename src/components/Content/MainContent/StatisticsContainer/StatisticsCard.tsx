import React, { ReactNode } from 'react';
import { Col, Typography } from 'antd';

type StatisticsCardProps = {
  title: string;
  text: string;
  index: number;
  icon: ReactNode;
};

const StatisticsCard = ({ title, text, index, icon }: StatisticsCardProps) => {
  const { Text, Title } = Typography;
  return (
    <Col span={8} style={{ marginTop: `${40 * index}px` }}>
      <div
        style={{
          backgroundColor: 'white',
          padding: '50px 30px 25px 30px',
          borderRadius: '7px',
          position: 'relative',
        }}
      >
        {icon}
        <Title level={4} type="secondary" style={{ fontWeight: '700' }}>
          {title}
        </Title>
        <Text>{text}</Text>
      </div>
    </Col>
  );
};

export default StatisticsCard;
