import { Input, InputProps } from 'antd';
import { styled } from 'styled-components';
import { baseTheme } from '../../theme';

export const InputShortStyled = styled(Input)<InputProps>`
  && {
    padding: 10px 15px;
    border-radius: ${baseTheme.border.radius.default}px;

    &.ant-input-status-error {
      border: 3px solid ${baseTheme.font.color.error};
    }

    &::placeholder {
      ${({ status }) =>
        status === 'error' && `color: ${baseTheme.font.color.error};`}
    }

    &.ant-input-outlined:hover {
      ${({ status }) =>
        status === 'error'
          ? `border: 3px solid ${baseTheme.font.color.error}`
          : `border: 1.5px solid ${baseTheme.bg.color.primary}`};
      transition: border 0.2s;
    }
  }
`;
