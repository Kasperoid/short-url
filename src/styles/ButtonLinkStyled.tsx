import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styled from 'styled-components';
import {
  baseTheme,
  TextColorType,
  TextSizeType,
  TextWeightType,
} from './theme';

interface ButtonLink extends Omit<ButtonProps, 'color' | 'size'> {
  color?: keyof TextColorType;
  weight?: keyof TextWeightType;
  size?: keyof TextSizeType;
  colorhover?: keyof TextColorType;
}

export const ButtonLinkStyled = styled(Button)<ButtonLink>`
  && {
    padding: 0;
    color: ${({ color }) =>
      color ? baseTheme.font.color[color] : baseTheme.font.color.second};
    font-weight: ${({ weight }) =>
      weight ? baseTheme.font.weight[weight] : 500};
    font-size: ${({ size }) =>
      size
        ? `calc(10px + ${baseTheme.font.size.text[size] - 10} * (100vw - ${
            baseTheme.size.container.min
          }px) / ${baseTheme.size.container.max})`
        : baseTheme.font.size.text};

    &.ant-btn-link:hover,
    &.ant-btn-link:active {
      color: ${({ colorhover }) =>
        colorhover
          ? baseTheme.font.color[colorhover]
          : baseTheme.font.color.tertiary};
    }
  }
`;
