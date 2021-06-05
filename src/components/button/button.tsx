import './button.styles.css';
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

export const Button: React.FC<ButtonProps> = ({ title, onClick, type = ButtonType.Primary }) => {
  const className = buttonClass[type];

  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

const buttonClass = {
  [ButtonType.Primary]: 'button-primary',
  [ButtonType.Secondary]: 'button-secondary',
  [ButtonType.Transparent]: 'button-transparent',
};
