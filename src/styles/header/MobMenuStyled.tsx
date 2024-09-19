import { Flex, FlexProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../theme';

interface MobMenuStyledProps extends FlexProps {
  $active?: boolean;
}

export const MobMenuStyled = styled(Flex)<MobMenuStyledProps>`
  && {
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    padding: 25px 15px;
    position: absolute;
    left: 0;
    right: 0;
    top: 64px;
    background-color: ${baseTheme.bg.color.secondary};
    border-radius: ${baseTheme.border.radius.round}px;
    z-index: ${({ $active }) => ($active ? 100 : -1)};
    transition: opacity 0.5s;
  }
`;
