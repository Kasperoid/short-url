import { styled } from 'styled-components';
import { baseTheme } from '../../theme';

export const StatisticLineStyled = styled.div`
  && {
    height: 7px;
    background-color: ${baseTheme.bg.color.primary};
    position: absolute;
    margin: 0 30px;
    top: 50%;
    left: 0;
    right: 0;
    z-index: -1;

    @media (${baseTheme.size.media.md}) {
      margin: 30px 0;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 7px;
      height: inherit;
      transform: translate(-50%, 0);
    }
  }
`;
