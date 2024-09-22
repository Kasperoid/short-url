import { styled } from 'styled-components';
import { baseTheme } from '../../../types/theme';

interface InputContainerInnerProps {
  $bg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const InputContainerInnerStyled = styled.div<InputContainerInnerProps>`
  && {
    position: absolute;
    left: 0;
    right: 0;
    top: -60px;

    @media (${baseTheme.size.media.xs}) {
      top: -80px;
    }

    & .inputContainer {
      background-color: rgb(58, 48, 83);
      padding: 40px;
      border-radius: ${baseTheme.border.radius.round}px;
      ${({ $bg }) => `background-image: url(${$bg})`};
      background-repeat: no-repeat;
      background-size: cover;

      @media (${baseTheme.size.media.sm}) {
        padding: 30px;
      }

      @media (${baseTheme.size.media.xs}) {
        flex-direction: column;
        align-items: stretch;
        padding: 20px;
      }
    }
  }
`;
