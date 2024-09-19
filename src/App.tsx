import React from 'react';
import { Layout } from 'antd';
import HeaderContainer from './components/Header/HeaderContainer';
import IntroContainer from './components/Content/Intro/IntroContainer';
import MainContentCotainer from './components/Content/MainContent/MainContentContainer';
import FooterContainer from './components/Footer/FooterContainer';

function App() {
  const { Content } = Layout;
  return (
    <Layout
      style={{
        backgroundColor: 'white',
        paddingTop: '30px',
      }}
    >
      <HeaderContainer />
      <Content>
        <IntroContainer />
        <MainContentCotainer />
      </Content>
      <FooterContainer />
    </Layout>
  );
}

export default App;
