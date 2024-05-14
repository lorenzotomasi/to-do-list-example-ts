import { baseClasses, translation } from "../../../constants";
import Button from "../../widgets/Button/Button";
import Text from "../../widgets/Text/Text";

interface Props {
  goNext: () => void;
  canGoNext: boolean;
  goPrev: () => void;
  canGoPrev: boolean;
  limit: number
  offset: number
  total: number
}

const _Pagination = (props: Props) => {
  function renderGoPrevButton() {
    return (
      <Button
        onClick={props.goPrev}
        isDisable={!props.canGoPrev}
        semantic={"secondary"}
        label={translation.t.previous}
      />
    );
  }

  function renderGoNextButton() {
    return (
      <Button
        onClick={props.goNext}
        isDisable={!props.canGoNext}
        semantic={"primary"}
        label={translation.t.next}
      />
    );
  }

  function renderPaginationInfo() {
    return <Text text={`${props.limit} ${translation.t.of} ${props.total} ${translation.t.todoTitle.toLowerCase()}`} />
  }

  return (
    <div className={baseClasses.table.pagination}>
      <div className={baseClasses.table.paginationLeading}>
        {renderPaginationInfo()}
      </div>
      <div className={baseClasses.table.paginationTrailing}>
        {renderGoPrevButton()}
        {renderGoNextButton()}
      </div>
    </div>
  );
};

export default _Pagination;
