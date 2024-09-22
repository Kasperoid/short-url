import { Flex, FlexProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../../types/theme';

export const StatisticsCardContainerInnerStyled = styled(Flex)<FlexProps>`
  && {
    gap: 20px;
    background-color: white;
    padding: 80px 30px 25px 30px;
    border-radius: ${baseTheme.border.radius.round}px;
    position: relative;

    & .statistic-card-icon {
      border: 1px solid ${baseTheme.bg.color.secondary};
      border-radius: 50%;
      padding: 20px;
      background-color: ${baseTheme.bg.color.secondary};
      position: absolute;
      top: -40px;
    }

    @media (${baseTheme.size.media.xs}) {
      gap: 10px;
      text-align: center;
      align-items: center;
      padding-top: 70px;
    }
  }
`;
