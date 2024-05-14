import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { baseClasses } from "../../../constants";
import Text from "../../widgets/Text/Text";
import { useCallback } from "react";
import { SortingDirection, SortingKey } from "../../../hooks/usePaginatedToDoList";

interface Props<T extends SortingKey = SortingKey> {
  text: string;
  slugToSort: T;
  direction: SortingDirection;
  onClick: (slug: T, direction: SortingDirection) => void;
}

const _SortingButton = <T extends SortingKey = SortingKey>(props: Props<T>) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      props.onClick(
        props.slugToSort,
        props.direction === "asc" ? "desc" : "asc"
      );
    },
    [props.direction, props.slugToSort]
  );

  return (
    <div className={baseClasses.table.sortingButton} onClick={handleClick}>
      <Text text={props.text} />
      <FontAwesomeIcon
        icon={props.direction === "asc" ? "arrow-up-a-z" : "arrow-down-a-z"}
      />
    </div>
  );
};

export default _SortingButton;
