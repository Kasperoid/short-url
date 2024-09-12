import React from 'react';
import { Button, Flex, Input } from 'antd';
import './../../../styles/content/inputShort/inputShort.css';
import SaveInput from './SaveInput';

const InputShortContainer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: -60,
        }}
      >
        <Flex gap={15} className="inputContainer">
          <Input placeholder="Basic usage" style={{ borderRadius: 8 }} />
          <Button
            style={{ fontWeight: 600, borderRadius: 8 }}
            size="large"
            type="primary"
          >
            Shorten It!
          </Button>
        </Flex>
      </div>
      {/* <Flex vertical gap={12} className="saveInputContainer">
        <SaveInput />
        <SaveInput />
        <SaveInput />
      </Flex> */}
    </div>
  );
};

export default InputShortContainer;
