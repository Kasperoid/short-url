import React from 'react';
import { Typography, Flex, Space } from 'antd';
import StatisticsCards from './StatisticsCards';

const StatisticsContainer = () => {
  const { Text, Title } = Typography;
  return (
    <Space direction="vertical" size={60}>
      <Flex justify="center">
        <div style={{ maxWidth: '400px', textAlign: 'center' }}>
          <Title level={2} type="secondary" style={{ fontWeight: 700 }}>
            Advanced Statistics
          </Title>
          <Text>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </Text>
        </div>
      </Flex>
      <StatisticsCards />
    </Space>
  );
};

export default StatisticsContainer;
