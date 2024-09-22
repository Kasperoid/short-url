import { Space, SpaceProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../../types/theme';

interface BoostLinkContainerProps extends SpaceProps {
  bg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const BoostLinkContainerStyled = styled(Space)<BoostLinkContainerProps>`
  && {
    background-color: ${baseTheme.bg.color.secondary};
    width: 100%;
    text-align: center;
    padding: 50px 0;
    background-image: ${({ bg }) => `url(${bg})`};
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
