import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { styled } from 'styled-components';
import {
  baseTheme,
  TextColorType,
  TextSizeType,
  TextWeightType,
} from '../../types/theme';

const { Text } = Typography;

interface TextStyledProps extends Omit<TextProps, 'size' | 'color'> {
  size: keyof TextSizeType;
  color?: keyof TextColorType;
  weight?: keyof TextWeightType;
  lineheight?: number;
}

export const TextStyled = styled(Text)<TextStyledProps>`
  && {
    ${({ lineheight }) => lineheight && `line-height: ${lineheight}`};
    font-weight: ${({ weight }) =>
      weight ? baseTheme.font.weight[weight] : 500};
    color: ${({ color }) =>
      color ? baseTheme.font.color[color] : baseTheme.font.color.second};
    ${({ size }) =>
      size &&
      `font-size: calc(10px + ${
        baseTheme.font.size.text[size] - 10
      } * (100vw - ${baseTheme.size.container.min}px) / ${
        baseTheme.size.container.max
      })`}
  }
`;
