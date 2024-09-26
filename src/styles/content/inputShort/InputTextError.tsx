import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { styled } from 'styled-components';
import { baseTheme } from '../../theme';

const { Text } = Typography;
export const InputTextError = styled(Text)<TextProps>`
  position: absolute;
  color: ${baseTheme.font.color.error};
  bottom: -25px;
  font-size: ${baseTheme.font.size.text.descriptionText}px;
  font-style: italic;
`;
