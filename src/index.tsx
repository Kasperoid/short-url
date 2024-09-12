import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import 'normalize.css';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#2bd1d1',
        colorInfo: '#2bd1d1',
        colorTextBase: '#b2b1b8',
        colorLink: '#b2b1b8',
        colorLinkHover: '#26252a',
        colorTextSecondary: '#9e9aa7',
        colorTextTertiary: '#35323e',
        colorTextQuaternary: '#232127',
        colorText: '#b2b1b8',
        borderRadius: 14,
        colorPrimaryHover: '#9be3e2',
      },
      components: {
        Button: {
          paddingInlineLG: 30,
          paddingBlockLG: 22,
          paddingBlockSM: 17,
          paddingInlineSM: 25,
        },
      },
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>
);
