import React from 'react';
import InputShortContainer from './InputShort/InputShortContainer';
import StatisticsContainer from './StatisticsContainer/StatisticsContainer';
import { Flex } from 'antd';
import BoostLink from './boostLink/BoostLink';

const MainContentCotainer = () => {
  return (
    <Flex
      vertical
      align="center"
      className="container"
      style={{
        backgroundColor: 'rgb(240, 241, 246)',
      }}
    >
      <div className="conitainer-inner">
        <InputShortContainer />
        <StatisticsContainer />
      </div>
      <BoostLink />
    </Flex>
  );
};

export default MainContentCotainer;
