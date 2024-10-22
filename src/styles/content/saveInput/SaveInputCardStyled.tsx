import { Flex, FlexProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../theme';

export const SaveInputCardStyled = styled(Flex)<FlexProps>`
  && {
    padding: 10px 25px;
    background-color: white;
    border-radius: ${baseTheme.border.radius.round}px;

    @media (${baseTheme.size.media.sm}) {
      align-items: start;
      flex-direction: column;
      min-width: 100%;
      padding: 10px;
      margin: 0 auto;
    }
  }
`;
