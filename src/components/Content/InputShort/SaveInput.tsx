import React from 'react';
import { Flex, Button, Typography } from 'antd';

const SaveInput = () => {
  const { Text } = Typography;
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{
        padding: '10px 25px',
        backgroundColor: 'white',
        borderRadius: '5px',
      }}
    >
      <Text>https://www.frontendmentor.io</Text>
      <Flex align="center" gap={20}>
        <Button type="link" style={{ color: '#2bd1d1' }}>
          https://www.frontendmentor.io
        </Button>
        <Button style={{ fontWeight: 500 }} size="small" type="primary">
          Copy
        </Button>
      </Flex>
    </Flex>
  );
};

export default SaveInput;
