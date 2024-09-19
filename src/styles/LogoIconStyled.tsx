import { styled } from 'styled-components';
import { LogoIcon } from '../components/Icons/Icons';
import { baseTheme, BgColorType } from './theme';

interface LogoIconProps {
  fillcolor: keyof BgColorType;
  $footer?: boolean;
}

export const LogoIconStyled = styled(LogoIcon)<LogoIconProps>`
  && {
    ${({ $footer }) => $footer && `align-items: start;`}

    & path {
      fill: ${({ fillcolor }) => baseTheme.bg.color[fillcolor]};
    }
  }
`;
