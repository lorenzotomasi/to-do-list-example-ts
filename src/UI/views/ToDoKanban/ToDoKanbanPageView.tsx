import { getToDoList } from "../../../API/requests/getToDoList";
import { useFetchHook } from "../../../hooks/useFetchHook";
import CardContainer from "./Card/CardContainer";
import { baseClasses } from "../../../constants";
import Loader from "../../widgets/Loader/Loader";

const ToDoKanbanPageView = () => {
  const { data } = useFetchHook({
    params: [],
    promise: getToDoList,
  });

  if (data !== undefined) {
    return <CardContainer toDoList={data} />;
  }

  return (
    <div className={baseClasses.card.listWrapper}>
      <Loader />
    </div>
  );
};

export default ToDoKanbanPageView;
