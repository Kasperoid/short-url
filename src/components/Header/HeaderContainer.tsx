import React from 'react';
import { Layout, Flex, Button } from 'antd';
import '../../styles/header/header.css';

const HeaderContainer = () => {
  const { Header } = Layout;
  const options: string[] = ['Features', 'Pricing', 'Resources'];
  return (
    <div className="container">
      <div className="conitainer-inner">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 0,
          }}
        >
          <div className="header-logo" />
          <Flex>
            {options.map((item, index) => (
              <Button
                style={{ fontWeight: 600, fontSize: '16px' }}
                type="link"
                key={index + 1}
              >
                {item}
              </Button>
            ))}
          </Flex>
        </Header>
      </div>
    </div>
  );
};

export default HeaderContainer;
