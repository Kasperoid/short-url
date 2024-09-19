import { Flex, FlexProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../theme';

export const FooterInnerContainerStyled = styled(Flex)<FlexProps>`
  && {
    gap: 25px;
    padding: 50px 0 150px;

    @media (${baseTheme.size.media.xs}) {
      gap: 50px;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 25px 0 35px;
    }
  }
`;
