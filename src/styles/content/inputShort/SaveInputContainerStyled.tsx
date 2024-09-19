import { Flex } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../theme';

export const SaveInputContainerStyled = styled(Flex)`
  && {
    padding-top: 80px;

    @media (${baseTheme.size.media.sm}) {
      margin: 0 auto;
      padding-top: 60px;
    }

    @media (${baseTheme.size.media.xs}) {
      padding-top: 70px;
    }
  }
`;
