import { useMemo } from "react";
import { baseClasses } from "../../../constants";

type ButtonSemantic = "primary" | "secondary";
interface Props {
  semantic: ButtonSemantic;
  label: string;
  isDisable?: boolean 
  onClick?: () => void
}

const Button = (props: Props) => {
  const classes = useMemo(() => {
    return `${baseClasses.button.base} ${baseClasses.button.base}--${props.semantic}`;
  }, [props.semantic]);

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    props.onClick?.()
  }

  return <button disabled={props.isDisable} className={classes} onClick={handleOnClick}>
    {props.label}
  </button>;
};

export default Button;
