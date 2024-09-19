import { LayoutProps } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { styled } from 'styled-components';

export const HeaderContainerStyled = styled(Header)<LayoutProps>`
  && {
    position: relative;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0;
  }
`;
