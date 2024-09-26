import { Space, SpaceProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../theme';

export const IntroTextContainerStyled = styled(Space)<SpaceProps>`
  display: flex;
  text-align: left;

  @media (${baseTheme.size.media.sm}) {
    text-align: center;
    gap: 5px;
  }
`;
