import { Row, RowProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../../types/theme';

export const IntroRow = styled(Row)<RowProps>`
  && {
    padding: 60px 0 120px 0;

    @media (${baseTheme.size.media.sm}) {
      padding: 20px 0 100px 0;
      gap: 15px;
    }

    @media (${baseTheme.size.media.xs}) {
      padding: 20px 0 140px 0;
    }
  }
`;
