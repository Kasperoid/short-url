import { Button } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../types/theme';

export const HeaderBurgerMenuStyled = styled(Button)`
  && {
    color: ${baseTheme.font.color.second};
    padding: 0;
    width: auto;
    height: auto;
    border: none;

    & svg {
      width: 25px;
      height: 25px;
    }

    &.ant-btn-default:hover {
      color: ${baseTheme.font.color.tertiary};
    }

    &.ant-btn-default:focus-visible {
      outline: 4px solid ${baseTheme.font.color.primary};
    }
  }
`;
