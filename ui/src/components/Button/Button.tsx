import { IProps } from './IProps';
import { ButtonWithVariant } from './styles';

function Button({ text, variant, ...props }: IProps) {
  return (
    <ButtonWithVariant variant={variant} {...props}>
      {text}
    </ButtonWithVariant>
  );
}

export default Button;
