import { Button, ButtonProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from './theme';

export const ButtonIconStyled = styled(Button)<ButtonProps>`
  && {
    background-color: inherit;
    border: inherit;

    &.ant-btn-default:hover {
      background-color: inherit;
      border: inherit;
      path {
        fill: ${baseTheme.bg.color.primary};
      }
    }
  }
`;
