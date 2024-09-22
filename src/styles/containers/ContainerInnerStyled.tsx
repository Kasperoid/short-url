import { styled } from 'styled-components';
import { baseTheme } from '../../types/theme';

export const ContainerInnerStyled = styled.div`
  && {
    max-width: ${baseTheme.size.container.max}px;
    min-width: 0px;
    flex: 1;
    padding: 0 120px;

    @media (${baseTheme.size.media.lg}) {
      padding: 0 50px;
    }

    @media (${baseTheme.size.media.sm}) {
      padding: 0 30px;
    }

    @media (${baseTheme.size.media.xs}) {
      padding: 0 20px;
    }
  }
`;
