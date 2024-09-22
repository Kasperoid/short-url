import { Flex, FlexProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../types/theme';

export const FooterSocialsContainerStyled = styled(Flex)<FlexProps>`
  && {
    gap: 20px;
    @media (${baseTheme.size.media.xs}) {
      justify-content: center;
      gap: 10px;
    }
  }
`;
