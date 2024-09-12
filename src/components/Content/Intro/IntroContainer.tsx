import React from 'react';
import './../../../styles/content/intro/intro.css';
import { Row, Col, Typography, Button, Space } from 'antd';

const IntroContainer = () => {
  const { Title, Text } = Typography;
  return (
    <div className="container">
      <div className="conitainer-inner">
        <Row
          align={'middle'}
          justify={'center'}
          style={{ padding: '80px 0 120px 0' }}
        >
          <Col
            xl={9}
            lg={11}
            md={{ span: 12, order: 1 }}
            xs={{ span: 24, order: 2 }}
          >
            <Space direction="vertical" size={0}>
              <Title
                type="secondary"
                style={{ fontWeight: 700, fontSize: '60px', margin: 0 }}
              >
                More than just shorter links
              </Title>
              <Space direction="vertical" size={35}>
                <Text style={{ fontSize: '18px' }}>
                  Build your brand's recognition and get detailed insights on
                  how your links are perfoming
                </Text>
                <Button
                  size="large"
                  type="primary"
                  style={{ fontWeight: '600' }}
                >
                  Get Started
                </Button>
              </Space>
            </Space>
          </Col>
          <Col
            xl={15}
            lg={13}
            md={{ span: 12, order: 2 }}
            xs={{ span: 24, order: 1 }}
          >
            <div className="intro-image" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default IntroContainer;
