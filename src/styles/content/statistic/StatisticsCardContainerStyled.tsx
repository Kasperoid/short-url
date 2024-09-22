import { Col, ColProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../../types/theme';

interface StatisticsCardContainerProps extends ColProps {
  index: number;
}

export const StatisticsCardContainerStyled = styled(
  Col
)<StatisticsCardContainerProps>`
  && {
    margin-top: ${({ index }) => `${40 * index}px`};

    @media (${baseTheme.size.media.md}) {
      margin-top: 0;
    }
  }
`;
