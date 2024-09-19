import { styled } from 'styled-components';
import { baseTheme } from '../theme';

export const ButtonBurgerContainerStyled = styled.div`
  && {
    display: none;
    @media (${baseTheme.size.media.xs}) {
      display: flex;
      align-items: center;
    }
  }
`;
