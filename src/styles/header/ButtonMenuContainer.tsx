import { Flex } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../types/theme';

export const ButtonMenuContainer = styled(Flex)`
  && {
    @media (${baseTheme.size.media.xs}) {
      justify-content: end;
    }
  }
`;
