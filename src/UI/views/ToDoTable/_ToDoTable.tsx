import { baseClasses, translation } from "../../../constants";
import {
  SortingKey,
  SortingDirection,
  Sorting,
} from "../../../hooks/usePaginatedToDoList";
import { ToDo, ToDoList } from "../../../models";
import StatusButton from "../../widgets/StatusButton/StatusButton";
import Text from "../../widgets/Text/Text";
import _SortingButton from "./_SortingButton";

interface Props {
  toDos: ToDoList;
  setSorting: (sortingKey: SortingKey, dir: SortingDirection) => void;
  sortingState: Sorting;
}

const _ToDoTable = (props: Props) => {
  function renderRow(toDo: ToDo, index: number) {
    return (
      <tr key={`${index}---${toDo.id}`}>
        <td className={baseClasses.table.minWithSmall}>
          <Text text={String(toDo.id)} />
        </td>
        <td className={baseClasses.table.minWithLarge}>
          <Text text={toDo.title} />
        </td>
        <td className={baseClasses.table.minWithSmall}>
          <StatusButton isCompleted={toDo.completed} />
        </td>
        <td></td>
      </tr>
    );
  }

  function renderHeader() {
    return (
      <thead>
        <tr>
          <th className={baseClasses.table.minWithSmall}>
            <_SortingButton
              slugToSort={"id"}
              direction={
                props.sortingState.key === "id"
                  ? props.sortingState.direction
                  : "asc"
              }
              onClick={props.setSorting}
              text={translation.t.id}
            />
          </th>
          <th className={baseClasses.table.minWithLarge}>
            <_SortingButton
              slugToSort={"title"}
              direction={
                props.sortingState.key === "title"
                  ? props.sortingState.direction
                  : "asc"
              }
              onClick={props.setSorting}
              text={translation.t.title}
            />
          </th>
          <th className={baseClasses.table.minWithSmall}>
            <_SortingButton
              slugToSort={"completed"}
              direction={
                props.sortingState.key === "completed"
                  ? props.sortingState.direction
                  : "asc"
              }
              onClick={props.setSorting}
              text={translation.t.completed}
            />
          </th>
          <th></th>
        </tr>
      </thead>
    );
  }

  function renderBody() {
    return <tbody>{props.toDos.map(renderRow)}</tbody>;
  }

  return (
    <table className={baseClasses.table.base}>
      {renderHeader()}
      {renderBody()}
    </table>
  );
};

export default _ToDoTable;
