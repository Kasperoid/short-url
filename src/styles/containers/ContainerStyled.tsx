import { styled } from 'styled-components';
import { baseTheme, BgColorType } from '../theme';

interface ContainerProps {
  $bgc?: keyof BgColorType;
}

export const ContainerStyled = styled.div<ContainerProps>`
  && {
    display: flex;
    justify-content: center;
    background-color: ${({ $bgc }) =>
      $bgc ? baseTheme.bg.color[$bgc] : 'white'};
    &.container-main-content {
      flex-direction: column;
      align-items: center;
    }
  }
`;
