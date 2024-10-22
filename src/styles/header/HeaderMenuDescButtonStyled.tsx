import { Flex, FlexProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../theme';

export const HeaderMenuDescButtonStyled = styled(Flex)<FlexProps>`
  && {
    @media (${baseTheme.size.media.xs}) {
      display: none;
    }
  }
`;
