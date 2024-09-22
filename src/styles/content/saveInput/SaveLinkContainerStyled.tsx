import { Flex, FlexProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../../types/theme';

export const SaveLinkContainerStyled = styled(Flex)<FlexProps>`
  && {
    gap: 20px;
    @media (${baseTheme.size.media.sm}) {
      border-top: 1px solid ${baseTheme.bg.color.tertiary};
      flex-direction: column;
      align-items: stretch;
      gap: 5px;
      align-items: start;
      width: 100%;
      margin-top: 5px;

      & .ant-btn-primary {
        width: 100%;
      }
    }
  }
`;
