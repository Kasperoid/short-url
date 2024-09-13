import React from 'react';
import { Typography, Button, Space } from 'antd';
import './../../../../styles/content/boostLink/boostLink.css';

const BoostLink = () => {
  const { Title } = Typography;
  return (
    <Space direction="vertical" size={20} className="boost-container">
      <Title style={{ color: 'white', margin: 0 }} level={2}>
        Boost your links today
      </Title>
      <Button type="primary" size={'large'} style={{ fontWeight: 600 }}>
        Get Started
      </Button>
    </Space>
  );
};

export default BoostLink;
