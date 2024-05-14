import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  size?: SizeProp;
}

const Loader = (props: Props) => {
  return (
    <FontAwesomeIcon
      icon={"circle-notch"}
      spin={true}
      size={props.size ?? "2x"}
    />
  );
};

export default Loader;
