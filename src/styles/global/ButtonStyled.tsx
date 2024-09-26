import { Button, ButtonProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme, BgColorType } from '../theme';

interface PrimaryButtonProps extends ButtonProps {
  color?: keyof BgColorType;
}

export const ButtonStyled = styled(Button)<PrimaryButtonProps>`
  && {
    &.ant-btn {
      color: white;
      font-weight: ${baseTheme.font.weight.semiBold};
      background-color: ${({ color }) =>
        color ? baseTheme.bg.color[color] : 'inherit'};
      padding: 20px 25px;
      border: none;
      border-radius: ${({ shape }) =>
        shape
          ? baseTheme.border.radius[shape]
          : baseTheme.border.radius.default}px;
    }

    &.ant-btn-default:hover {
      color: white;
      background-color: ${baseTheme.bg.color.primary};
    }

    &.ant-btn-primary:hover {
      background-color: ${baseTheme.bg.color.primaryHover};
      transition: background-color 0.6s;
    }

    &.btn-copied {
      background-color: ${baseTheme.bg.color.secondary};
      transition: background-color 0.5s;

      &:hover {
        background-color: ${baseTheme.bg.color.secondary};
        opacity: 0.9;
        transition: opacity 0.6s;
      }
    }
  }
`;
