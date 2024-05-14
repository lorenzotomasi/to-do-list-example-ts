import { Link } from "react-router-dom";

interface Props {
  text: string;
  className?: string
  linkable?: {
    url: string;
  };
}

const Text = (props: Props) => {
  function renderBaseText() {
    return <p className={props.className}>{props.text}</p>;
  }

  if (props.linkable) {
    return <Link className={props.className} to={props.linkable.url}>{renderBaseText()}</Link>;
  }

  return renderBaseText();
};

export default Text;
