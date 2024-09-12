import React from 'react';
import './styles/global/global.css';
import { Layout } from 'antd';
import HeaderContainer from './components/Header/HeaderContainer';
import IntroContainer from './components/Content/Intro/IntroContainer';
import MainContentCotainer from './components/Content/MainContentContainer';

function App() {
  const { Content } = Layout;
  return (
    <Layout
      style={{
        height: '100vh',
        backgroundColor: 'white',
      }}
    >
      <HeaderContainer />
      <Content>
        <IntroContainer />
        <MainContentCotainer />
      </Content>
    </Layout>
  );
}

export default App;
