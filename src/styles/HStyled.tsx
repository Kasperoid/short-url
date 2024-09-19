import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import { styled } from 'styled-components';
import { baseTheme, TextColorType, TitleSizeType } from './theme';

const { Title } = Typography;

interface HStyledProps extends TitleProps {
  titlelevel: keyof TitleSizeType;
  color?: keyof TextColorType;
}

export const HStyled = styled(Title)<HStyledProps>`
  && {
    font-weight: ${baseTheme.font.weight.bold};
    ${({ titlelevel }) =>
      titlelevel &&
      `font-size: calc(20px + ${
        baseTheme.font.size.title[titlelevel] - 20
      } * (100vw - ${baseTheme.size.container.min}px) / ${
        baseTheme.size.container.max
      })`};
    margin: 0;
    color: ${({ color }) =>
      color ? baseTheme.font.color[color] : baseTheme.font.color.tertiary};
  }
`;
