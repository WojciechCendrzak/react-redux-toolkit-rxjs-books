import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { APP_BORDER_RADIUS } from '../../styles/layout';

interface ButtonProps {
  title: string;
  type?: ButtonType;
  onClick: () => void;
}

export enum ButtonType {
  Primary,
  Secondary,
  Transparent,
}

export const Button: React.FC<ButtonProps> = ({ title, onClick, type = ButtonType.Primary, ...rest }) => (
  <ButtonInternal onClick={onClick} type={type} {...rest}>
    {title}
  </ButtonInternal>
);

const ButtonInternal = styled.div<{ type: ButtonType }>`
  border-radius: ${APP_BORDER_RADIUS};
  border: ${({ type }) => borderColor[type]} solid thin;
  background-color: ${({ type }) => backgroundColor[type]};
  color: ${({ type }) => textColor[type]};
  padding: 0.5rem 1rem;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const backgroundColor = {
  [ButtonType.Primary]: colors.primary,
  [ButtonType.Secondary]: colors.secondary,
  [ButtonType.Transparent]: 'transparent',
};

const borderColor = {
  [ButtonType.Primary]: colors.primary,
  [ButtonType.Secondary]: colors.secondary,
  [ButtonType.Transparent]: colors.secondary,
};

const textColor = {
  [ButtonType.Primary]: colors.white,
  [ButtonType.Secondary]: colors.black,
  [ButtonType.Transparent]: colors.black,
};
