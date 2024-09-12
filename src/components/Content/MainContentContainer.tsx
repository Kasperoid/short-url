import React from 'react';
import InputShortContainer from './InputShort/InputShortContainer';

const MainContentCotainer = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: 'rgb(240, 241, 246)' }}
    >
      <div className="conitainer-inner" style={{ position: 'relative' }}>
        <InputShortContainer />
      </div>
    </div>
  );
};

export default MainContentCotainer;
