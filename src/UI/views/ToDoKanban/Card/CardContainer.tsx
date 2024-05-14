import { useReducer } from "react";
import { ToDoList } from "../../../../models";
import { initReducer, reducer } from "../../../../reducer/reducer";
import { baseClasses } from "../../../../constants";
import Card from "./Card";

interface Props {
  toDoList: ToDoList;
}

const CardContainer = (props: Props) => {
  const [toDoState, dispatch] = useReducer(
    reducer,
    props.toDoList,
    initReducer
  );

  function handleToDoAction(toDoId: number) {
    dispatch({ action: { taskId: toDoId }, type: "TOGGLE_TO_DO_STATUS" });
  }

  function generateSingleList(toDos: number[]) {
    return toDos.map((toDo) => (
      <Card
        key={toDo}
        onStatusToggle={handleToDoAction}
        toDoTask={toDoState.taskRecord[toDo]}
      />
    ));
  }

  function renderTitle(text: string) {
    return <h2>{text}</h2>;
  }

  return (
    <div className={baseClasses.card.listWrapper}>
      <div>
        {renderTitle("In progress")}
        <div className={baseClasses.card.listContainer}>
          {generateSingleList(toDoState.toDoTask)}
        </div>
      </div>
      <div>
        {renderTitle('Completed')}
        <div className={baseClasses.card.listContainer}>
          {generateSingleList(toDoState.completedTask)}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
