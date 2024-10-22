import { Space, SpaceProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../theme';

export const StatisticsContainerStyled = styled(Space)<SpaceProps>`
  && {
    padding-bottom: 100px;
    gap: 80px;

    @media (${baseTheme.size.media.md}) {
      padding-bottom: 60px;
    }
  }
`;
